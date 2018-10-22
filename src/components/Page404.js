import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Page404.css'



const Page404 = () => (
    <section className="uk-flex uk-flex-center uk-height-1-1 my-border" uk-height-viewport="true" >
                          <div className="uk-height-meduim uk-width-1-2@l uk-width-1-1@s uk-margin uk-padding" style={{background:'white'}}>
                          <h1 className="my-fourofour" style={{color:'#BB745C'}}>404</h1>
                           <h3>Oooops are you sure you want to be here ?</h3>
                           <p>Please,Lets get back to the Home page</p>
                           <Link to="/"  className=" uk-button uk-button-large uk-width-1-1" style={{background:'#12252A', color:'white'}}>Home</Link> 
                          </div>
        </section>
)

export default Page404