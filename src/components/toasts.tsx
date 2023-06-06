import Toast from 'react-bootstrap/Toast';
type PropsCheck = {
    variant?: string,
    text?: string
}
function ContextualExample(props: PropsCheck) {
    return (
        <>
            <Toast
                className="d-inline-block m-1"
                bg={`${props.variant}`}

            >
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body className='text-white'>
                    {props.text}
                </Toast.Body>
            </Toast>

        </>
    );
}

export default ContextualExample;