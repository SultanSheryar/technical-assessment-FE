import Card from 'react-bootstrap/Card';
type PropsCheck = {
    poster?: String,
    title?: String,
    director?: string,
    plot?: string
}
function CardComponent(props: PropsCheck): JSX.Element {
    return (
        <Card >
            <Card.Img variant="top" src={`${props.poster}`} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.director}
                </Card.Text>
                <Card.Text>
                    {props.plot}
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default CardComponent;