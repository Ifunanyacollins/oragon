import React from 'react'
import {Link} from 'react-router-dom'
import 'uikit/dist/css/uikit.min.css'
import '../styles/LandingPage.css'


const LandingPage = () => (
  
    <section className="uk-height-medium  uk-background-cover uk-light" uk-height-viewport="true" data-src="https://res.cloudinary.com/dus4sijdt/image/upload/b_rgb:040303,o_16/v1539438079/photo-1532939163844-547f958e91b4_ulygxu.jpg" uk-img="true">
     <div className="uk-position-center">

     <div className="uk-flex uk-flex-center uk-flex-middle ">
      <h1 className="uk-heading-hero uk-animation-slide-left" style={{color:'#BB745C'}}>Oragon</h1>
      </div>

     <div className="uk-flex uk-flex-center uk-flex-wrap uk-width-1-1 uk-flex-between my-button-box">
      <Link to="/book" className="uk-button uk-button-large uk-animation-slide-left" style={{background:'#BB745C'}}>Book Seat</Link>
      <Link to="/view" className="uk-button uk-button-large uk-animation-slide-right" style={{background:'#12252A'}}>Available Buses</Link>
     </div>
      
     </div>
    </section>
)

export default LandingPage