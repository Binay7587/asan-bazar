import { useFormik } from "formik";
import * as Yup from "yup"
import { toast } from "react-toastify";
import { Col, Form, Image, Row } from "react-bootstrap"
import ActionButton from "../../common/action-btn.component";
import { useEffect, useState } from "react";
import categoryService from "../../../services/category.service";
import brandService from "../../../services/brand.service";
import userService from "../../../services/user.service";
import { HTMLEditor, NumberInputField, SelectListField, SwitchField, TextInputField } from "../../common/form.component";

const AdminProductForm = ({ defaultValue, submitEvent }) => {
    let [categoryList, setCategoryList] = useState([]);
    let [brandList, setBrandList] = useState([]);
    let [sellerList, setSellerList] = useState([]);
    let [defaultImage, setDefaultImage] = useState();
    let validationRule = Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        categoryId: Yup.array().required("Category is required"),
        price: Yup.number().min(1).required("Price is required"),
        discount: Yup.number().min(0).max(100).required("Discount is required"),
        featured: Yup.boolean().default(false),
        brand: Yup.object().required("Brand is required"),
        sellerId: Yup.object().required("Seller is required"),
        status: Yup.object().required().default({ value: "inactive", label: "Unpublish" }),
        // productImage: Yup.string().nullable(),
        delImages: Yup.array().default([]),
    });

    let formik = useFormik({
        initialValues: defaultValue,
        validationSchema: validationRule,
        onSubmit: async (values) => {
            try {
                const formData = new FormData();
                for (const key of Object.keys(values)) {
                    switch (key) {
                        case 'productImage':
                            if (!Array.isArray(values[key])) {
                                for (const image of Object.values(values[key])) {
                                    formData.append('productImage', image, image.filename);
                                }
                            }
                            break;
                        case 'categoryId':
                            const categoryId = values[key].map((category) => category.value);
                            formData.append(key, JSON.stringify(categoryId));
                            break;
                        case 'brand':
                        case 'sellerId':
                        case 'status':
                            formData.append(key, values[key]?.value);
                            break;
                        default:
                            formData.append(key, values[key]);
                    }
                }
                submitEvent(formData)
            } catch (err) {
                throw err;
            }
        }
    })

    useEffect(() => {
        if (defaultValue.productImage) {
            setDefaultImage(defaultValue.productImage)
        }
    }, [defaultValue])

    const loadCategoryList = async () => {
        try {
            let response = await categoryService.getAllCategories();
            let options = [];
            if (response.result.length > 0) {
                options = response.result.map((category) => ({
                    value: category._id,
                    label: category.title
                }));
            }
            setCategoryList(options);
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    const loadBrandList = async () => {
        try {
            let response = await brandService.getAllBrands();
            let brandOptions = [];
            if (response.result.length > 0) {
                brandOptions = response.result.map((brand) => ({
                    value: brand._id,
                    label: brand.title
                }));
            }
            setBrandList(brandOptions);
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    const loadSellerList = async () => {
        try {
            let response = await userService.getUsersByType("seller");
            let sellerOptions = [];
            if (response.result.length > 0) {
                sellerOptions = response.result.map((seller) => ({
                    value: seller._id,
                    label: seller.name
                }));
            }
            setSellerList(sellerOptions);
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    useEffect(() => {
        loadCategoryList()
        loadBrandList()
        loadSellerList()
    }, [])

    return (
        <Form onSubmit={formik.handleSubmit}>
            <TextInputField
                name="title"
                label="Title"
                placeholder="Enter product title"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.errors.title}
                required={true}
            />
            <SelectListField
                name="categoryId"
                label="Categories"
                placeholder="Select categories"
                onChange={(e) => formik.setValues({
                    ...formik.values,
                    categoryId: e
                })}
                value={formik.values.categoryId}
                error={formik.errors.categoryId}
                options={categoryList}
                required={true}
                multiple={true}
                closeMenuOnSelect={false}
            />
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Description:</Form.Label>
                <Col sm={9}>
                    <HTMLEditor
                        name={"description"}
                        required={true}
                        onChange={(e) => {
                            formik.setValues({
                                ...formik.values,
                                description: e
                            })
                        }}
                        value={formik.values.description}
                        placeholder="Enter Product Description"
                        error={formik.errors.description}
                    />
                </Col>
            </Form.Group>
            <NumberInputField
                name="price"
                label="Price (NPR.)"
                placeholder="Enter product price"
                onChange={formik.handleChange}
                value={formik.values.price}
                error={formik.errors.price}
                required={true}
                min={1}
            />
            <NumberInputField
                name="discount"
                label="Discount (%)"
                placeholder="Enter discount"
                onChange={formik.handleChange}
                value={formik.values.discount}
                error={formik.errors.discount}
                min={0}
                max={100}
            />
            <SelectListField
                name="brand"
                label="Brand"
                placeholder="Select Brand"
                onChange={(e) => formik.setValues({
                    ...formik.values,
                    brand: e
                })}
                value={formik.values.brand}
                error={formik.errors.brand}
                options={brandList}
                required={true}
            />
            <SelectListField
                name="sellerId"
                label="Seller"
                placeholder="Select Seller"
                onChange={(e) => formik.setValues({
                    ...formik.values,
                    sellerId: e
                })}
                value={formik.values.sellerId}
                error={formik.errors.sellerId}
                options={sellerList}
                required={true}
            />
            <SwitchField
                name="featured"
                label="Featured"
                onChange={(e) => formik.setValues({
                    ...formik.values,
                    featured: e.target.checked
                })}
                value={formik.values.featured}
                error={formik.errors.featured}
            />
            <SelectListField
                name="status"
                label="Status"
                placeholder="Select Status"
                onChange={(e) => formik.setValues({
                    ...formik.values,
                    status: e
                })}
                value={formik.values.status}
                error={formik.errors.status}
                options={[{ value: "active", label: "Publish" }, { value: "inactive", label: "Unpublish" }]}
                required={true}
            />
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Images:</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name="productImage"
                        type="file"
                        multiple
                        onChange={(e) => {
                            formik.setValues({
                                ...formik.values,
                                productImage: e.target.files
                            })
                        }}
                    />
                    <span className="text-danger">{formik.errors.productImage}</span>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                {
                    defaultImage && defaultImage.map((item, index) => (
                        <Col sm={3} md={1} key={index}>
                            <Image fluid src={`${process.env.REACT_APP_BASE_URL}/images${item}`} thumbnail alt={"Product-" + index} />
                        </Col>
                    ))
                }
                {
                    formik.values.productImage && Object.values(formik.values.productImage).map((item, index) => (
                        typeof item === "object" ? (
                            <Col sm={3} md={1} key={index}>
                                <Image fluid src={URL.createObjectURL(item)} thumbnail alt={"Product-" + index} />
                            </Col>
                        ) : null
                    ))
                }
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 1, offset: 3 }}>
                    <ActionButton />
                </Col>
            </Form.Group>
        </Form >
    )
}

export default AdminProductForm