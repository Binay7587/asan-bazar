import { useFormik } from "formik";
import * as Yup from "yup"
import { toast } from "react-toastify";
import { Col, Form, Image, Row } from "react-bootstrap"
import ActionButton from "../../common/action-btn.component";
import noImage from "../../../assets/images/no-image.jpg";

const AdminUserForm = ({ defaultValue, submitEvent }) => {
    let validationRule = Yup.object({
        name: Yup.string().required("Fullname is required").min(5).max(30),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,30}$/, 'Password should contain at least one uppercase, one lowercase, one unique character, and one number')
            .oneOf([Yup.ref("confirmPassword"), null], "Passwords must match")
            .required("Password is required"),
        role: Yup.string().required("Role is required").default("customer"),
        address: Yup.object({
            temp: Yup.object({
                state: Yup.string().required("State is required"),
                district: Yup.string().required("District is required"),
                municipality: Yup.string().required("Municipality is required"),
                street: Yup.string().required("Street is required"),
                houseNumber: Yup.string().required("House number is required"),
                postcode: Yup.string().required("Postcode is required"),
            }),
            perm: Yup.object({
                state: Yup.string().required("State is required"),
                district: Yup.string().required("District is required"),
                municipality: Yup.string().required("Municipality is required"),
                street: Yup.string().required("Street is required"),
                houseNumber: Yup.string().required("House number is required"),
                postcode: Yup.string().required("Postcode is required"),
            })
        }),
        phone: Yup.string().required("Phone number is required"),
        userImage: Yup.string().required("User image is required"),
    });

    const formik = useFormik({
        initialValues: defaultValue,
        validationSchema: validationRule,
        onSubmit: async (values) => {
            try {
                let finalSubmission = { ...values };
                finalSubmission.address = JSON.stringify(values.address);

                // FormData
                let formData = new FormData();
                (Object.keys(finalSubmission)).map((key) => formData.append(key, finalSubmission[key]));
                if (values.userIm?.userImage) {
                    formData.append("userImage", values.userIm?.userImage[0]);
                    delete values.userIm?.userImage;
                }
                submitEvent(formData)
            } catch (error) {
                toast.error(error.data.msg);
            }
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="mt-5">
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Fullname:</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter your fullname"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <span className="text-danger">{formik.errors.name}</span>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <span className="text-danger">{formik.errors.email}</span>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3">
                    <Form.Label>Billing Address:</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                name="temp.state"
                                type="text"
                                placeholder="Enter state"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            temp: {
                                                ...formik.values.address.temp,
                                                state: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.temp.state}
                            />
                            <span className="text-danger">{formik.errors.address?.temp?.state}</span>
                        </Col>
                        <Col>
                            <Form.Control
                                name="temp.district"
                                type="text"
                                placeholder="Enter district"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            temp: {
                                                ...formik.values.address.temp,
                                                district: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.temp.district}
                            />
                            <span className="text-danger">{formik.errors.address?.temp?.district}</span>
                        </Col>
                        <Col>
                            <Form.Control
                                name="temp.municipality"
                                type="text"
                                placeholder="Enter municipality"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            temp: {
                                                ...formik.values.address.temp,
                                                municipality: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.temp.municipality}
                            />
                            <span className="text-danger">{formik.errors.address?.temp?.municipality}</span>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Form.Control
                                name="temp.street"
                                type="text"
                                placeholder="Enter street"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            temp: {
                                                ...formik.values.address.temp,
                                                street: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.temp.street}
                            />
                            <span className="text-danger">{formik.errors.address?.temp?.street}</span>
                        </Col>
                        <Col>
                            <Form.Control
                                name="temp.houseNumber"
                                type="text"
                                placeholder="Enter house number"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            temp: {
                                                ...formik.values.address.temp,
                                                houseNumber: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.temp.houseNumber}
                            />
                            <span className="text-danger">{formik.errors.address?.temp?.houseNumber}</span>
                        </Col>
                        <Col>
                            <Form.Control
                                name="temp.postcode"
                                type="text"
                                placeholder="Enter post code"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            temp: {
                                                ...formik.values.address.temp,
                                                postcode: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.temp.postcode}
                            />
                            <span className="text-danger">{formik.errors.address?.temp?.postcode}</span>
                        </Col>
                    </Row>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3">
                    <Form.Label>Shipping Address:</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                name="perm.state"
                                type="text"
                                placeholder="Enter state"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            perm: {
                                                ...formik.values.address.perm,
                                                state: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.perm.state}
                            />
                            <span className="text-danger">{formik.errors.address?.perm?.state}</span>
                        </Col>
                        <Col>
                            <Form.Control
                                name="perm.district"
                                type="text"
                                placeholder="Enter district"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            perm: {
                                                ...formik.values.address.perm,
                                                district: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.perm.district}
                            />
                            <span className="text-danger">{formik.errors.address?.perm?.district}</span>
                        </Col>
                        <Col>
                            <Form.Control
                                name="perm.municipality"
                                type="text"
                                placeholder="Enter municipality"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            perm: {
                                                ...formik.values.address.perm,
                                                municipality: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.perm.municipality}
                            />
                            <span className="text-danger">{formik.errors.address?.perm?.municipality}</span>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Form.Control
                                name="perm.street"
                                type="text"
                                placeholder="Enter street"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            perm: {
                                                ...formik.values.address.perm,
                                                street: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.perm.street}
                            />
                            <span className="text-danger">{formik.errors.address?.perm?.street}</span>
                        </Col>
                        <Col>
                            <Form.Control
                                name="perm.houseNumber"
                                type="text"
                                placeholder="Enter house number"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            perm: {
                                                ...formik.values.address.perm,
                                                houseNumber: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.perm.houseNumber}
                            />
                            <span className="text-danger">{formik.errors.address?.perm?.houseNumber}</span>
                        </Col>
                        <Col>
                            <Form.Control
                                name="temp.postcode"
                                type="text"
                                placeholder="Enter post code"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        address: {
                                            ...formik.values.address,
                                            perm: {
                                                ...formik.values.address.perm,
                                                postcode: e.target.value
                                            }
                                        }
                                    })
                                }}
                                value={formik.values.address.perm.postcode}
                            />
                            <span className="text-danger">{formik.errors.address?.perm?.postcode}</span>
                        </Col>
                    </Row>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    <span className="text-danger">{formik.errors.phone}</span>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Role:</Form.Label>
                    <Form.Select
                        name="role"
                        required
                        placeholder="Enter your role"
                        size="sm"
                        onChange={formik.handleChange}
                        value={formik.values.role}
                    >
                        <option>-- Select Any Role --</option>
                        <option value={"seller"}>Seller</option>
                        <option value={"customer"}>Customer</option>
                    </Form.Select>
                    <span className="text-danger">{formik.errors.role}</span>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3 col-6">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control
                        name="userImage"
                        type="file"
                        size="sm"
                        onChange={(e) => {
                            formik.setValues({
                                ...formik.values,
                                //single file
                                userImage: e.target.files[0]
                            })
                        }}
                    />
                    <span className="text-danger">{formik.errors.userImage}</span>
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2">
                    {
                        typeof (formik.values?.userImage) === 'string' ?
                            (
                                formik.values?.userImage ? <Image src={`${import.meta.env.VITE_BASE_URL}/images${formik.values?.userImage}`} className="img img-fluid" alt="profile" /> : <Image src={noImage} className="img img-fluid" alt="no-image" />
                            )
                            :
                            (
                                formik.values?.userImage ? <Image src={URL.createObjectURL(formik.values?.userImage)} className="img img-fluid" alt="profile" /> : <Image src={noImage} className="img img-fluid" alt="no-image" />
                            )
                    }
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Password:</Form.Label>
                    <div className="input-group">
                        <Form.Control
                            name="password"
                            type='password'
                            placeholder="Enter password"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <span className="text-danger">{formik.errors.password}</span>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control
                        name="confirmPassword"
                        type='password'
                        placeholder="Enter confirm password"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3">
                    <ActionButton text="Submit" />
                </Form.Group>
            </Row>
        </Form>
    )
}

export default AdminUserForm