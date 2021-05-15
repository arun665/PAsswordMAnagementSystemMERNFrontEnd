
import './sass/review.scss';
import c1 from './sass/c1.jpg';
import c2 from './sass/c2.jpg';
import c3 from './sass/c3.jpg';
import c4 from './sass/c4.jpg';


function review(){
    return (
        <div id="review">
            

<div class="review_section">
        <h2> Our Customer Reviews </h2>
       <br></br>
      <div className="row">
    <div className="col-sm-12 col-xs-12 col-md-6">
                   <div class="blog-card" data-aos="zoom-out" >
            <div class="meta">
              <img class="photo" src={c1}></img>
            </div>
            <div class="description">
              <h1>Great App!!</h1>
              <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
              <br/>
              <h2> John Diesel</h2>
<p>  Wonderful application for storing password and very easy to use , Recommended for everyone </p>
            </div>
          </div>
          </div>


          <div className="col-sm-12 col-xs-12 col-md-6">
                   <div class="blog-card" data-aos="zoom-out">
            <div class="meta">
              <img class="photo" src={c2}></img>
            </div>
            <div class="description">
              <h1>Good 👍</h1>
              <span class="fa fa-star checked"></span>
<span class="fa fa-star checked" ></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
              <br/>
              <h2>Katlina </h2>
              <p> This app is good , cant say it is best but it works fine , Login is quite slow , Can be made more better </p>

            </div>
          </div>
          </div>


          <div className="col-sm-12 col-xs-12 col-md-6">
                   <div class="blog-card" data-aos="zoom-out">
            <div class="meta">
              <img class="photo" src={c3}></img>
            </div>
            <div class="description">
              <h1>Average!!</h1>
              <span class="fa fa-star checked" style={{"color":"red"}}></span>
<span class="fa fa-star checked" style={{"color":"red"}}></span>
<span class="fa fa-star " ></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
              <br/>
              <h2> Ginni </h2>
              <p> Good App , But if you see than you will find that the loading process is slow try to improve it, else all is fine</p>

            </div>
          </div>
          </div>


          <div className="col-sm-12 col-xs-12 col-md-6">
                   <div class="blog-card" data-aos="zoom-out">
            <div class="meta">
              <img class="photo" src={c4}></img>
            </div>
            <div class="description">
              <h1>Amazing!!</h1>
              <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
              <br/>
              <h2> Stephinie </h2>
              <p> This app is good , cant say it is best but it works fine , Login is quite slow , Can be made more better </p>

            </div>
          </div>
          </div>




</div>
      <br/>
          
        </div>

</div>
    )
}


export default review;