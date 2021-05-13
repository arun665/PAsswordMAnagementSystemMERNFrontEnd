import loader from './sass/loading.gif';
import './sass/loader.scss';
import Typed from 'react-typed';

function Loader(){
return(
       <div id="loader">
           <img src={loader}/>

<br></br>

<br></br>
<br></br>
<h1 id="typed">
           
<Typed  strings={['Created By:','Arun Sharma']}
                    typeSpeed={100}
                    backSpeed={20}
  loop/>
    </h1>           
       </div>

)
}


export default Loader;