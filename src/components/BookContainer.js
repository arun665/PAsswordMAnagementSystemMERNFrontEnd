import react ,{useState} from 'react';

import {addPassCat,updatePassCat,removeaddmsg} from "../redux/index";
import {connect} from "react-redux";
import Ripples from 'react-ripples';
import './sass/addpassword.scss';

import { Container,Row,Col , Form ,Button, Alert} from 'react-bootstrap';

function BookContainer(props) {
    const [category,setCategory]=useState('');

    const [type,setType]=useState('');

    const [newpassword,setPassword]=useState('');
    if(props.msg!=''){
      var msg=<Alert variant='success'> <h3>{props.msg}</h3> </Alert>

      setTimeout(() => {
          props.removeaddmsg();
      }, 3000);
  }
      var ActionButton =   <button type="button" onClick={()=>props.addPassCat(category,props.user_id,newpassword,type)} className="btn btn-outline-primary"> Add  </button>
   
  return (
    <div id="addpassword">
    <h1> Add Password 🔒 {type} </h1>
    
    <div className="container">
    <form className="form">
    {msg}
    <div className="form-group">
    <label for="email">Password-Category:</label>
    
    <select  class="form-control" id="sel1" name="sellist1" onChange={e=>setType(e.target.value)}>
    <option value="" selected>Select the category </option>
        <option value="Email"> Email </option>
        <option value="linkedin"> linkedin </option>
        <option value="Instagram"> Instagram </option>
        <option value="Snapchat"> SnapChat </option>
        <option value="TikTok"> TikTok </option>
        <option value="Bank"> Bank </option>
        <option value="PayTm"> Paytm </option>
        <option value="Gpay"> Gpay </option>
        <option value="Phonepe"> Phonepe </option>
        <option value="Discord"> Discord </option>
        <option value="Github"> Github </option>
        <option value="Facebook"> Facebook</option>
        <option value="Amazon"> Amazon </option>
        <option value="Chalkpad"> Chalkpad </option>
        <option value="Heroku"> Heroku </option>
        <option value="Netlify"> Netlify </option>
        <option value="Leetcode"> Leetcode </option>
        <option value="CodeChef"> CodeChef </option>
        <option value="HackerRank"> HackerRank </option>
        <option value="GeeksForGeeks"> GeeksForGeeks </option>
        <option value="CodeQuoteint"> CodeQuotient </option>
        <option value="other"> other.. </option>

      </select>
      
    </div>
    <div className="form-group">
    <label for="email">Password-Details:</label>

    <input type="text" className="form-control" placeholder="enter category" onChange={e=>setCategory(e.target.value)}/>
</div>

<div className="form-group">
    <label for="email">Password</label>
    <input type="text" className="form-control"  placeholder="enter password" onChange={e=>setPassword(e.target.value)}/>
    </div>
    <Ripples>
    {ActionButton}
    </Ripples>
    </form>
    </div>
    </div>
  );
}


const mapStatetoProps=(state)=>{
    return{
        category:state.pass.category,
        password:state.pass.password,
        action:state.pass.action,
        id:state.pass.id,
        user_id:state.user.user_id,
        msg:state.pass.addmsg
    }
}


const mapDispatchtoProps=(dispatch)=>{
return{
    addPassCat:function(category,user_id,password,type){
     dispatch(addPassCat(category,user_id,password,type));
    },
    removeaddmsg:function(){
        dispatch(removeaddmsg());
    }
}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer);






