
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from "./Button"
import Toast from "./toasts"
type PropsCheck = {
    onChangeHandler?: (e: any) => {},
    onClickHandler?: () => void

}

function NavScrollExample(props: PropsCheck) {
    function DumpData(): void {
        const response = fetch("http://localhost:8080/dumpData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        }).then(res => res.json()).then(res => alert(res.message)).catch(e => console.log(e))
    }


    return (<>

        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">Technical-Assessment</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="d-flex float-right">


                    <Form className="d-flex float-right">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={props.onChangeHandler}
                        />
                    </Form>
                    <Button title={`Search`} variant={'outline-success'} handler={props.onClickHandler} className="flex float-right" />
                    <Button title={`Dump Data`} variant={'outline-success'} handler={DumpData} className="flex float-right" />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
}

export default NavScrollExample;