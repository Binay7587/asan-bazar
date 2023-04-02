import { useFormik } from "formik";
import * as Yup from "yup"
import { toast } from "react-toastify";
import { Col, Form, Image, Row } from "react-bootstrap"
import ActionButton from "../../common/action-btn.component";
import noUserImage from "../../../assets/images/no-image.jpg";
import { useEffect, useState } from "react";
import categoryService from "../../../services/category.service";

const AdminCategoryForm = ({ defaultValue, submitEvent }) => {
    let [categoryList, setCategoryList] = useState([]);
    let validationRule = Yup.object({
        title: Yup.string().required("Title is required"),
        featured: Yup.boolean().default(false),
        parent: Yup.string().nullable(),
        status: Yup.string().oneOf(['active', 'inactive']).default("inactive"),
        categoryImage: Yup.string().nullable()
    });
    let formik = useFormik({
        initialValues: defaultValue,
        validationSchema: validationRule,
        onSubmit: async (values) => {
            try {
                // FormData
                let formData = new FormData();
                (Object.keys(values)).map((key) => formData.append(key, values[key]));
                submitEvent(formData)
            } catch (err) {
                throw err;
            }
        }
    })

    const loadCategoryList = async () => {
        try {
            let response = await categoryService.getAllCategories();
            setCategoryList(response.result);
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    useEffect(() => {
        loadCategoryList()
    }, [])

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Title:</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Enter category title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <span className="text-danger">{formik.errors.title}</span>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Sub-Category Of:</Form.Label>
                <Col sm={9}>
                    <Form.Select
                        name="parent"
                        size="sm"
                        onChange={formik.handleChange}
                        value={formik.values?.parent}>
                        <option value="">--Select Any One--</option>
                        {
                            categoryList.map((category) => (
                                <option key={category._id} value={category._id}>{category.title}</option>
                            ))
                        }
                    </Form.Select>
                    <span className="text-danger">{formik.errors.parent}</span>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Featured:</Form.Label>
                <Col sm={9}>
                    <Form.Check
                        name="featured"
                        type="switch"
                        label="Yes"
                        checked={formik.values.featured}
                        onChange={(e) => formik.setValues({
                            ...formik.values,
                            featured: e.target.checked
                        })}
                    />
                    <span className="text-danger">{formik.errors.featured}</span>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Status:</Form.Label>
                <Col sm={6}>
                    <Form.Select
                        name="status"
                        required
                        size="sm"
                        onChange={formik.handleChange}
                        value={formik.values?.status}>
                        <option>--Select Any One--</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </Form.Select>
                    <span className="text-danger">{formik.errors.status}</span>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Image:</Form.Label>
                <Col sm={6}>
                    <Form.Control
                        name="categoryImage"
                        type="file"
                        onChange={(e) => formik.setValues({
                            ...formik.values,
                            categoryImage: e.target.files[0]
                        })}
                    />
                    <span className="text-danger">{formik.errors.categoryImage}</span>
                </Col>
                <Col sm={3}>
                    {
                        typeof (formik.values?.categoryImage) === 'string' ?
                            (
                                formik.values?.categoryImage ? <Image src={`${process.env.REACT_APP_BASE_URL}/images${formik.values?.categoryImage}`} className="img img-fluid float-end" alt="profile" /> : <Image src={noUserImage} className="img img-fluid float-end" alt="no-image" />
                            )
                            :
                            (
                                formik.values?.categoryImage ? <Image src={URL.createObjectURL(formik.values?.categoryImage)} className="img img-fluid float-end" alt="profile" /> : <Image src={noUserImage} className="img img-fluid float-end" alt="no-image" />
                            )
                    }
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 1, offset: 3 }}>
                    <ActionButton />
                </Col>
            </Form.Group>
        </Form >
    )
}

export default AdminCategoryForm