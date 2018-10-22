import React from 'react'
import {NavLink} from 'react-router-dom'
import moment from 'moment'
import DatePicker from 'react-datepicker';

import {Consumer} from './Context'
import '../styles/Header.css'
import '../styles/View.css'


class View extends React.Component{

  state = {
  startDate:undefined
  }



  render(){
    return(
      
      <Consumer>
    {
      ({user,login,logout,content,buses,filterByText,sortByDate}) =>(
        <React.Fragment>
        <header className="uk-position-relative" uk-slideshow="autoplay: true" >

         
            <ul className="uk-slideshow-items my-small-screen-height" >
              <li>
                <img src="https://res.cloudinary.com/dus4sijdt/image/upload/b_rgb:060606,o_55/v1539438198/photo-1535040151833-e4ff86c5684e_bz2vcu.jpg" alt="" uk-cover="true"/>
              </li>
              <li>
                <img src="https://res.cloudinary.com/dus4sijdt/image/upload/b_rgb:0d0d0d,o_41/v1540145128/photo-1516900557549-41557d405adf_cs4lwp.jpg" alt="" uk-cover="true"/>
              </li>
               <li>
                 <img src="https://res.cloudinary.com/dus4sijdt/image/upload/b_rgb:090909,o_39/v1540145029/photo-1528824036966-36325e3140fa_pingfg.jpg" alt="" uk-cover="true"/>
              </li>
            </ul>
       

        <div className="uk-position-top">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <nav className="uk-navbar-container uk-navbar-transparent uk-flex" uk-navabar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
          <li><NavLink to="/" activeClassName="is-active">
           <span style={{color:'#BB745C'}}>Oragon</span>
           </NavLink></li>
          </ul>
        </div>


        <div className="uk-navbar-right">

        <ul className="uk-navbar-nav">
        <li><NavLink to="/book" activeClassName="is-active">Book</NavLink></li>
         {user.uid ? (<li><a   onClick={logout}>Logout</a></li> ):
         (<React.Fragment><li><NavLink to="/login"  activeClassName="is-active" >Login</NavLink></li> <li><NavLink to="/login"  activeClassName="is-active" >Register</NavLink></li></React.Fragment>)}
        </ul>

        </div>
        </nav>
        </div>
        </div>
 
  
        </header>

        <div className="uk-card uk-card-default uk-width-1-2 uk-position-bottom-center my-card-margin">
        <div className="uk-card-header"><h3 className="uk-card-title">Your Recent Travel Plan</h3></div>
        <div className="uk-card-body">
          
        <ul uk-accordion="true">

        <li className="uk-open">
        <a className="uk-accordion-title" href="#">Full-Name</a>
        <div className="uk-accordion-content"><p className="my-text" style={{textTransform:"uppercase"}}>{content.name}</p></div>
        </li>

        <li >
        <a className="uk-accordion-title" href="#">Destination</a>
        <div className="uk-accordion-content"><p className="my-text"  style={{textTransform:"uppercase"}}>{content.destination}</p></div>
        </li>

        <li >
        <a className="uk-accordion-title" href="#">Time</a>
        <div className="uk-accordion-content"><p className="my-text">{content.time}</p></div>
        </li>

        <li >
        <a className="uk-accordion-title" href="#"> No Seats</a>
        <div className="uk-accordion-content"><p className="my-text">{content.seats}</p></div>
        </li>

        <li >
        <a className="uk-accordion-title" href="#">One-Way Travel</a>
        <div className="uk-accordion-content"><p className="my-text" style={{textTransform:"uppercase"}}>{content.oneway}</p></div>
        </li>

        {content.startDate &&   <li>
        <a className="uk-accordion-title" href="#">Travel Start Date</a>
        <div className="uk-accordion-content">  <React.Fragment>
               <p className="my-text">{moment(content.startDate).format("dddd, MMMM Do YYYY")}</p> </React.Fragment> </div>
        </li>}

        {content.endDate &&   <li>
          <a className="uk-accordion-title" href="#">Return Date</a>
          <div className="uk-accordion-content">  <React.Fragment>
                 <p className="my-text">{moment(content.endDate).format("dddd, MMMM Do YYYY")}</p> </React.Fragment> </div>
          </li>}

       

        </ul>
        
        </div>
        <div className="uk-card-footer">
       <p> Thank You for traveling with Orangon </p>
        </div>
        </div>


        <section className="my-margin-top uk-width-1-1@s my-padding-right uk-postion-center">
          <h1>Buses & Terminals</h1>
            <hr className="uk-divider-icon" />
            <div className="uk-flex uk-flex-center">
              <div className="uk-inline uk-margin uk-margin-large">
                <span className="uk-form-icon" uk-icon="icon: search"></span>
                <input className="uk-input" type="text"  placeholder="Search Terminal" onChange={(e)=>{
                     filterByText(e.target.value)
                }} />
              </div>

         
              <div>
              <DatePicker
              selected={this.state.startDate}
              onChange={(date)=>{
               
                this.setState(()=>({
                  startDate:date
                }))
              
                date ?   sortByDate(date.valueOf()) : sortByDate('')
                
              }}
            
              
              className="uk-input"
               withPortal
               isClearable={true}
              placeholderText="Sort by date"
          />
              </div>
             
            </div>
              

              <div className="uk-child-width-1-1@s uk-child-width-1-2@m my-margin-left " uk-grid="true" >
             
                  
               {
                 buses.map(({terminal,depTime,destination,Image},index)=>(
                  
                  <div className="my-padding"  key={index}>
                <div className="uk-card uk-card-default uk-child-width-1-2@m uk-child-width-1-1@s" uk-grid="true">
                  <div className=" uk-cover-container">
                    <img src={`${Image}`} alt="" uk-cover="true"/>
                    <canvas width="400" height="400"></canvas>
                  </div>
                  <div>
                    <div className="uk-card-body">
                    <h3 className="uk-card-title">Terminal <span className="my-text">{terminal}</span></h3>
                    <ul>
                    <li>Destination <span className="my-text">{destination}</span></li>
                    <li>Departure Time <span className="my-text">{moment(depTime).format("dddd, MMMM Do YYYY")}</span></li>
                    </ul>          
                    </div>
                  </div>
                 </div>
              </div> 

                  

                 ))
               }

                
            
                </div>
                

        
        </section>
        
        </React.Fragment>
      )
    }
    </Consumer>

    )
  }
  
    
  }

export default View