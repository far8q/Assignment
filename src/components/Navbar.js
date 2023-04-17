import React from 'react';
import { Link,NavLink ,useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar =()=>{
  
    return(
        <nav className ='ui raised very padded segment'>
            <a className='ui teal inverted segment'>
                Gloria
            </a>
            <div className =' ui rigth floated header'>
                <button className ='ui button'><Link to="/">Home</Link></button>
                <button className ='ui button'><Link to="/About">About</Link></button>
                <button className ='ui button'><Link to="/contact">contact</Link></button>

            </div>

        </nav>
    )
}
export default Navbar;
