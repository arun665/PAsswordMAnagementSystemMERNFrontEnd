import { Container,Row,Col , Form ,Button, Alert } from 'react-bootstrap';
import Loader from 'react-loaders'

import react ,{useState , useEffect} from 'react';
import './sass/signin.scss';

import {addPassCat,updatePassCat,signupUser, loginUser , removemsg} from "../redux/action/userAction";
import {connect} from "react-redux";
import Ripples from 'react-ripples';
import BookContainer from './BookContainer.js';
import GetPassCat from './GetPassCat.js';
import Header from './Header.js';
import {signupuser} from "../redux/action/bookAction.js";
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;




function LoginContainer(props) {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const [confirmpassword,setConfirmPassword]=useState('');
  const [loader,setLoader]=useState(false);
  


  if(props.msg!=''){
    var msg=<Alert variant='danger'> <h3>{props.msg}</h3> </Alert>
}


var l=<div class="spinner-border text-muted"></div>


useEffect(()=>{
  if(props.msg!=""){
    setLoader(false);
    if(props.msg!="User Registered Successfully"){
    setTimeout(()=>{

    props.removemsg()
    },3000)
  }
  }
})



const fetchData = ()=>{
  props.loginUser(username,password)
  setLoader(true);


}



  return (

    <div id="signin">
  
    <Container >
    <Row>
    <Col>
    <h1>LOGIN-FORM</h1> 
   


<Form id="form" style={{'width':'80%','marginLeft':'auto','marginRight':'auto'}} >
{msg}

{loader && l}

<Form.Group>
<Form.Label>Username </Form.Label>
<Form.Control type="text" defaultValue={props.username}  onChange={e=>setUsername(e.target.value)} required/>

</Form.Group>

<Form.Group >
<Form.Label>Password</Form.Label>
<Form.Control type="password" defaultValue={props.password}  onChange={e=>setPassword(e.target.value)} required/>
</Form.Group>

<p>Doesn't have an account?<Link to="/signup"> Create new Account</Link></p>
<Button variant="primary"  onClick={fetchData} disabled={loader}>

{loader && <p> loading...</p>}
{!loader && <p> Signin</p>}
</Button>
</Form>

    </Col>
  </Row>  
</Container> 
    </div>

  );
}



const mapStatetoProps=(state)=>{

  
  return{
      username:state.user.username,
      password:state.user.password,
     
      msg:state.user.msg,
     
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
  }
  ,
  removemsg:function(username,password){
    dispatch(removemsg());
  }

}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(LoginContainer);








