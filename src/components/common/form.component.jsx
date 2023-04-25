import { Form, Row, Col } from "react-bootstrap";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const animatedComponents = makeAnimated();

export const TextInputField = ({ name, label, required = false, onChange, value = "", placeholder = "Enter the value.", error }) => {
    return (<>
        <Form.Group as={Row} className="mb-3">
            <Form.Label className="col-sm-3">{label}:</Form.Label>
            <Col sm={9}>
                <Form.Control
                    name={name}
                    type="text"
                    required={required}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                <span className="text-danger">{error}</span>
            </Col>
        </Form.Group>
    </>)
};

export const NumberInputField = ({ name, label, required = false, onChange, value = "", placeholder = "Enter the value.", error, min = null, max = null }) => {
    return (<>
        <Form.Group as={Row} className="mb-3">
            <Form.Label className="col-sm-3">{label}:</Form.Label>
            <Col sm={9}>
                <Form.Control
                    name={name}
                    type="number"
                    required={required}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    min={min}
                    max={max}
                />
                <span className="text-danger">{error}</span>
            </Col>
        </Form.Group>
    </>)
};

export const SelectListField = ({ name, label, required = false, multiple = false, onChange, value = "", placeholder = "Select the value.", closeMenuOnSelect, error, options = [] }) => {
    return (<>
        <Form.Group as={Row} className="mb-3">
            <Form.Label className="col-sm-3">{label}:</Form.Label>
            <Col sm={9}>
                <Select
                    name={name}
                    options={options}
                    value={value}
                    onChange={onChange}
                    isSearchable
                    isClearable
                    components={animatedComponents}
                    isMulti={multiple}
                    required={required}
                    placeholder={placeholder}
                    closeMenuOnSelect={closeMenuOnSelect}
                />
                <span className="text-danger">{error}</span>
            </Col>
        </Form.Group>
    </>)
}

export const SwitchField = ({ name, label, onChange, value = "", error }) => {
    return (<>
        <Form.Group as={Row} className="mb-3">
            <Form.Label className="col-sm-3">{label}:</Form.Label>
            <Col sm={9}>
                <Form.Check
                    name={name}
                    type="switch"
                    label={value ? "Yes" : "No"}
                    checked={value}
                    onChange={onChange}
                />
                <span className="text-danger">{error}</span>
            </Col>
        </Form.Group>
    </>)
}

export const TextAreaField = ({ name, label, required = false, onChange, value = "", placeholder = "Enter the value.", error }) => {
    return (<>
        <Form.Group as={Row} className="mb-3">
            <Form.Label className="col-sm-3">{label}:</Form.Label>
            <Col sm={9}>
                <Form.Control
                    as={"textarea"}
                    name={name}
                    rows={7}
                    style={{ resize: "none" }}
                    required={required}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                <span className="text-danger">{error}</span>
            </Col>
        </Form.Group>
    </>)
};

export const HTMLEditor = ({ name, required = false, onChange, value = "", error }) => {
    return (<>
        <CKEditor
            name={name}
            editor={ClassicEditor}
            data={value}
            onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
            }}
            required={required}
        />
        <span className="text-danger">{error}</span>
    </>)
};