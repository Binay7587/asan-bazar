import { useFormik } from "formik";
import * as Yup from "yup"
import { toast } from "react-toastify";
import { Col, Form, Row } from "react-bootstrap"
import ActionButton from "../../common/action-btn.component";

const AdminBannerForm = ({ defaultValue, submitEvent }) => {
    let validationRule = Yup.object({
        title: Yup.string().required("Title is required"),
        status: Yup.string().oneOf(['active', 'inactive']).default("inactive"),
        link: Yup.string().url().nullable(),
        bannerImage: Yup.string().required("Image is required"),
    });
    let formik = useFormik({
        initialValues: defaultValue,
        validationSchema: validationRule,
        onSubmit: async (values) => {
            try {
                submitEvent(values)
            } catch (error) {
                toast.error(error.data.msg);
            }
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Title:</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Enter banner title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <span className="text-danger">{formik.errors.title}</span>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Link (URL):</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name="link"
                        type="link"
                        placeholder="Enter banner link"
                        onChange={formik.handleChange}
                        value={formik.values.link}
                    />
                    <span className="text-danger">{formik.errors.link}</span>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Image:</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name="bannerImage"
                        type="file"
                        onChange={(e) => formik.setValues({
                            ...formik.values,
                            bannerImage: e.target.files[0]
                        })}
                    />
                    <span className="text-danger">{formik.errors.bannerImage}</span>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label className="col-sm-3">Status:</Form.Label>
                <Col sm={9}>
                    <Form.Select
                        name="status"
                        required
                        size="sm"
                        onChange={formik.handleChange}>
                        <option>--Select Any One--</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </Form.Select>
                    <span className="text-danger">{formik.errors.status}</span>
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

export default AdminBannerForm