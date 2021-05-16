
import {Link} from "react-router-dom";
 import './sass/dashboard.scss';
 import bg from './sass/bg.png';
 import bg1 from './sass/bg1.jpg';
 import instagram from './sass/instagram.jpg';
 import flipkart from './sass/flipkart.png';
 import twitter from './sass/twitter.jpg';
 import tiktok from './sass/tiktok.png';
 import snapchat from './sass/snapchat.jpg';
 import facebook from './sass/facebook.jpg';
 import gmail from './sass/gmail.png';
 import linkedin from './sass/linkedin.webp';
 import amazon from './sass/amazon.webp';
 import Review from './review.js';
import forgot from './sass/forgot.gif';
import lock from './sass/lock.gif';

 import ScrollAnimation from 'react-animate-on-scroll';

function DashBoard(){


    return (
        <div id="dashboard">

        <div id="div">

        <div id="div3" >

        <h1 data-aos="zoom-out"> A.S PASSWORD <br></br>MANAGER</h1>
</div>
        </div>


<div className="container-fluid" id="div2" data-aos="fade-up">
  <div className="row">
    <div className="col-md-6 col-sm-12 col-xs-6" >
    <h5 id="h5"  style={{"color":"black"}} data-aos="fade">What we provide you ??</h5>
      <h5  id="h5" data-aos="fade"> No more need to remember lots of passwords. Our A.S Password Manager is the ultimate application that stores your data very safely and makes it very  easy to access.</h5>
    <br></br>
    </div>
    <div className="col-sm-12 col-md-6 col-xs-12">
<img src={forgot} id="forgot" />
</div> 
    </div>
  </div>


  <div className="container-fluid" id="div4" data-aos="fade-up">
  <div className="row">

  <div className="col-sm-12 col-md-6 col-xs-12">
<img src={lock} id="lock" />
</div> 

    <div className="col-md-6 col-sm-12 col-xs-6" >

   <h1 data-aos="fade" id="h1"> 100% percent safe, lock your passwords in our password manager </h1>
    <br></br>
    </div>

    </div>
  </div>





<div className="container-fluid" id="container2">

<h1 id="h12"> BENEFITS OF OUR PASSWORD MANAGER :</h1>

        <div className="row" >
        
        <div className="col-md-6 col-sm-12 col-xs-12">

        <div id="div1"  data-aos="zoom-in" >
      
        <ul id="ul" >
        <li > easy to use </li>
      
      </ul>
      
      </div>

      <div id="div1"  data-aos="zoom-in" >
      
      <ul id="ul" >
      <li> 100% safe</li>
      
    </ul>
    
    </div>
    <div id="div1"  data-aos="zoom-in" >
      
      <ul id="ul" >
      <li> 1 month free trial</li>

    </ul>
    
    </div>
    <div id="div1"  data-aos="zoom-in" >
      
      <ul id="ul" >
      <li> Lifetime access</li>
    
    </ul>
    
    </div>
    <div id="div1"  data-aos="zoom-in" >
      
      <ul id="ul" >
    
      <li> Special discount for students </li>
     
    </ul>
    
    </div>


      </div>

        
        



        <div className="col-md-6 col-sm-12 col-xs-12">

<div id="bg"     data-aos="zoom-in">

  <img src={bg} id="bgimg"/>
</div>

</div>
    </div>
    </div>



<Review/>


    <div className="container-fluid" id="container2">

    <h1 id="h12"> SAVE YOUR SOCIAL MEDIA PASSWORDS :</h1>
    <br></br>
      <div className="row">
        <div className="col-md-2 col-xs-6 col-sm-6">
          <div id="social"  data-aos="zoom-in">
            <img src={instagram} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-2 col-xs-6 col-sm-6">
          <div id="social"  data-aos="zoom-in">
            <img src={flipkart} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-2 col-xs-6 col-sm-12">
          <div id="social"  data-aos="zoom-in">
            <img src={linkedin} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-2 col-xs-6 col-sm12">
          <div id="social"  data-aos="zoom-in">
            <img src={facebook} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-2 col-xs-6 col-sm12">
          <div id="social"  data-aos="zoom-in">
            <img src={tiktok} id="socialimg"/>
          </div>
        </div>

        <div className="col-md-2 col-xs-12 col-sm12">
          <div id="social"  data-aos="zoom-in">
            <img src={amazon} id="socialimg"/>
          </div>
        </div>

   

      </div>
    </div>
    </div>
    )
}
/*

      */

      
export default DashBoard;