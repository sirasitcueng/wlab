import { Form, Button } from 'react-bootstrap';

const DropdownForm = ({ label, options, value, onChange, name }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Select
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="-">Select {label.toLowerCase()}</option>
                {Object.entries(options).map(([key, display]) => (
                    <option key={key} value={key}>
                        {display}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
};


const TextArrayForm = ({ label, values, onChange }) => {
    const handleChange = (index, value) => {
        const updated = [...values];
        updated[index] = value;
        onChange(updated);
    };

    const addField = () => {
        onChange([...(values || []), '']);
    };

    const removeField = (index) => {
        const updated = [...values];
        updated.splice(index, 1);
        onChange(updated);
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>

            {values?.map((value, index) => (
                <div key={index} className="d-flex mb-2">
                    <Form.Control
                        value={value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className="me-2"
                    />
                    <Button
                        variant="outline-danger"
                        onClick={() => removeField(index)}
                    >
                        ×
                    </Button>
                </div>
            ))}

            <Button variant="outline-primary" onClick={addField}>
                + Add {label?.toLowerCase() || 'item'}
            </Button>
        </Form.Group>
    );
};

export { DropdownForm, TextArrayForm }
