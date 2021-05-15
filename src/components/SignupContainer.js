import react ,{useEffect, useState} from 'react';
import './sass/signin.scss';
import { Container,Row,Col , Form ,Button,Alert} from 'react-bootstrap';

import {addPassCat,updatePassCat,signupUser, loginUser , removesignupmsg} from "../redux/action/userAction";
import {connect} from "react-redux";
import Ripples from 'react-ripples';
import BookContainer from './BookContainer.js';
import GetPassCat from './GetPassCat.js';
import Header from './Header.js';
import {signupuser} from "../redux/action/bookAction.js";
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;






function SignupContainer(props) {
  const [Username,SetUsername]=useState('');
  const [Password,SetPassword]=useState('');
  const [Email,SetEmail]=useState('');
  const [Confirmpassword,SetConfirmPassword]=useState('');
  const [loader,setLoader]=useState(false);
  const [timer,setTimer]=useState(10);

  if(props.signupmsg!=''){
              var msg=<Alert variant='danger'> <h3>{props.signupmsg}</h3> </Alert>
  }

  
var l=<div class="spinner-border text-muted"></div>


useEffect(()=>{
  if(props.signupmsg!=""){
    setLoader(false);
    if(props.signupmsg!="User Registered Successfully"){
    setTimeout(()=>{

    props.removesignupmsg()
    },3000)
  }
  }
})

  const fetchData = ()=>{
    props.signupUser(Username,Email,Password,Confirmpassword)
    setLoader(true);
  
  
 
  }
  

  return (
    <div id="signin">
    
    <Container>
    <Row>
  
    <Col>
<h1>SIGN-UP FORM</h1> 

     

    <Form style={{'width':'80%','marginLeft':'auto','marginRight':'auto'}}>
    {msg}
    {loader && l}
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username {Username} </Form.Label>
    <Form.Control type="text" defaultValue={props.username}  onChange={e=>SetUsername(e.target.value)} required/>
    

  </Form.Group>

  <Form.Group >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" defaultValue={props.email}  onChange={e=>SetEmail(e.target.value)} required/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" defaultValue={props.password}  onChange={e=>SetPassword(e.target.value)} required/>
   </Form.Group>

  <Form.Group >
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" defaultValue={props.confirmpassword}  onChange={e=>SetConfirmPassword(e.target.value)} required/>
   
  </Form.Group>

<p> Already having account? <Link to="/signin">Signin</Link></p>
  <Button variant="primary"  onClick={fetchData} disabled={loader} required>

  
{loader && <p> loading... </p>}
{!loader && <p> Create Account </p>}
  </Button>
</Form>
        </Col>
  </Row>  
</Container> 
    </div>

  );
}



const mapStatetoProps=(state)=>{
  
  localStorage.setItem("name",state.user.username);
  return{
      username:state.user.username,
      email:state.user.email,
      password:state.user.password,
      confirmpassword:state.user.confirmpassword,
      signupmsg:state.user.signupmsg
  }
}


const mapDispatchtoProps=(dispatch)=>{
return{
  signupUser:function(username,email,password,confirmpassword){
   dispatch(signupUser(username,email,password,confirmpassword));
  }
  ,
  loginUser:function(username,password){
    dispatch(loginUser(username,password));
  },
  removesignupmsg:function(){
    dispatch(removesignupmsg());
}

}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(SignupContainer);








