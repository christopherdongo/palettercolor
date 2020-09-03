import React from 'react';
import {Link} from 'react-router-dom'
const Nav =()=>{
    return(
        <nav>
           <div className="nav-center">
             <h4>
             color palette
             </h4>

             <ul className="nav-links">
               <li>
                   <Link to="/">Simple</Link>
               </li>
               <li>
                 <Link to="/hexa">Hexa</Link>
               </li>
             </ul>
           </div>
        </nav>
    )
}

export default Nav
