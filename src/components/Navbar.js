import React from "react";
export default function Navbar(props) {
  return (
    <>
      <ul className={`nav nav-pills`}>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==="dark"?"light":"light"}  bg-${props.mode==="dark"?"primary":"dark"}`} aria-current="page" href="/">
            {props.head}
          </a>
        </li>
        <li className="nav-item ">
          <a className={`nav-link  text-${props.mode==="dark"?"light":"dark"}`} href="/">
            {props.about}
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==="dark"?"light":"dark"}`} href="/">
            Uses
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-link">
          <div class="form-check form-switch">
          <span className={`text-${props.mode==="dark"?"light":"dark"}`}>Dark Mode</span>
     <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
</div>
          </div>

        </li>
      </ul>
    </>
  );
}
Navbar.defaultProps = {
  head: "Deafault",
  about: "Deafault ",
};
// Navbar.prototype = {
//  head:prototype.String
// }
