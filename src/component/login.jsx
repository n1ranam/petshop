import { Container,Row,Col,Form,Button, FormGroup } from "react-bootstrap";
import pic from './images/rabbit-373691_640.jpg'
function Login(){
    return(
        <>
        <Container>
        <Row className="mt-3 border p-3 bg-primary">
        <Col lg={6} xs={12}>
            <br></br>
            <img src={pic} className='' style={{'width':'100%','height':'250px','border-radius':'2% 30% 2% 30%'}}/>
        </Col>
        <Col lg={6} xs={12}>
            <Form>
            <Form.Group>
        <Form.Label className="display-6">UserName</Form.Label>
        <Form.Control type="text" name="fn1" placeholder="Enter your name here!" />
      </Form.Group>
       <Form.Group>
        <Form.Label className="display-6">Password</Form.Label>
        <Form.Control type="password" name="psw" placeholder="Enter your password here!" />
      </Form.Group>
      <FormGroup align="right">
        <Button
        type="submit"
        className="btn btn-outline-info mt-3">Login</Button>
      </FormGroup>
            </Form>
        </Col>
    </Row>
</Container>
</>
    );
}
export default Login;