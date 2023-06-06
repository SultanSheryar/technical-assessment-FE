import React from 'react';
import Form from 'react-bootstrap/Form';
type PropsCheck = {
    label_text: string,
    type: string,
    placeholder: string,
    onchange: (e: React.ChangeEvent) => void
}
function FormInput(props: PropsCheck): JSX.Element {
    return (
        <>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>{props.label_text}</Form.Label>
                <Form.Control onChange={props.onchange} type={`${props.type}`} placeholder={`${props.placeholder}`} />
            </Form.Group>
        </>
    );
}

export default FormInput;