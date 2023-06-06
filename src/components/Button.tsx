import React from 'react';
import Button from 'react-bootstrap/Button';
type PropsCheck = {
    title: string,
    variant: string,
    handler?: () => void
    className: String
}
function ButtonComponent(props: PropsCheck): JSX.Element {
    return (
        <>
            <Button className={`${props.className}`} onClick={props.handler} variant={`${props.variant}`}>{props.title}</Button>{' '}
        </>
    );
}

export default ButtonComponent;