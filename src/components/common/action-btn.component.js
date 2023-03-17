import { Button } from "react-bootstrap";

const ActionButton = ({ text }) => {
    return (<>
        <Button variant="primary" type="submit" className="w-100">
            {text ?? "Submit"}
        </Button>
    </>)
}

export default ActionButton; 