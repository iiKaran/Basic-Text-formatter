import React from 'react'
export default function Navbar(props) {
  return (
   <>
   <ul class="nav nav-pills">
   <li class="nav-item">
     <a class="nav-link active" aria-current="page" href="/">
      {props.head}
     </a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="/">
       {props.about}
     </a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="/">
       Uses
     </a>
   </li>
 </ul>
   </>
  )
}
Navbar.defaultProps ={
 head : "Deafault", 
 about: "Deafault "
}; 
// Navbar.prototype = {
//  head:prototype.String
// }
