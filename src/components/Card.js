import React from 'react';
import "./card.css";
let src = "https://imgd.aeplcdn.com/1056x594/n/cw/ec/46749/tvs-jupiter-front-three-quarter25.jpeg?q=75";
export default function Card(props) {
  return (
    <div className='card-card'>
<div className="card">
  <img src={src} className ="card-img-top" alt="/" />
  <div className="card-body">
    <h5 className="card-title">{props.obj.head1}</h5>
    <p className="card-text">{props.obj.text1}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
  <img src={src} className="card-img-top" alt="/" />
  <div className="card-body">
    <h5 className="card-title">{props.obj.head2}</h5>
    <p className="card-text">{props.obj.text2}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
  <img src={src} className="card-img-top" alt="/" />
  <div className="card-body">
    <h5 className="card-title">{props.obj.head3}</h5>
    <p className="card-text">{props.obj.text3}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  
    </div>
  )
}
