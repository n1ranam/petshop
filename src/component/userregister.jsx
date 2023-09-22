import { Container,Row,Col,Form,Button, FormGroup } from "react-bootstrap";
import pic from './images/puppy-g698c97e10_640.jpg'
import {useState} from 'react'
import AXIOS from 'axios'
function Userregister(){
  const[fn,setFn]=useState("")
  const[eml,setEml]=useState("")
  const[ps,setPs]=useState("")
  const handleData=()=>{
    const formdata=new FormData()
    formdata.append("fn",fn)
    formdata.append("eml",eml)
    formdata.append("ps",ps)
    AXIOS.post("http://localhost:3001/add",{fname:fn,email:eml,password:ps}).then((res)=>{
            alert(res.data.msg)
    })
        }
    return(
        <>
        <Container>
        <Row className="mt-3 border p-3 bg-secondary">
        <Col lg={6} xs={12}>
            <br></br>
            <img src={pic} className='' style={{'width':'100%','height':'250px','border-radius':'2% 30% 2% 30%'}}/>
        </Col>
        <Col lg={6} xs={12}>
            <Form onSubmit={()=>{handleData()}}>
    
            <Form.Group>
        <Form.Label className="display-6">FullName</Form.Label>
        <Form.Control 
        type="text" 
        name="fn"
        onChange={(e)=>{
          setFn(e.target.value)}}
         placeholder="Enter your name here!"></Form.Control>
         {fn}
      </Form.Group>
            <Form.Group>
        <Form.Label className="display-6">Email</Form.Label>
        <Form.Control
         type="email" 
         name="eml" 
          onChange={(e)=>{
          setEml(e.target.value)}}
         placeholder="Enter your email here!"></Form.Control>
        {eml}
      </Form.Group>
      <Form.Group>
        <Form.Label className="display-6">Password</Form.Label>
        <Form.Control type="password" 
        name="ps" 
         onChange={(e)=>{
          setPs(e.target.value)}}
        placeholder="Enter your password here!"></Form.Control>
        {ps}
      </Form.Group>
      <FormGroup align="right">
        <Button
        type="submit"
        className="btn btn-outline-info mt-3">Register</Button>
      </FormGroup>
            </Form>
        </Col>
    </Row>
</Container>
</>
    );
}
export default Userregister;