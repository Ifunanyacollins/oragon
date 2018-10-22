import React , {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'uikit/dist/css/uikit.min.css';
import '../styles/Book.css'
import History from './HistoryProps';
import {Consumer} from './Context'





class Book extends Component{

  
        state = {
           name:undefined,
           destination:undefined,
           seats:0,
           time:0,
           startDate:undefined,
           endDate:undefined,
           oneway:undefined,
           errorname:undefined,
           errorseats:undefined,
           errordestination:undefined,
           errortime:undefined,
           checktrip:false,
           disabled:true,
           isbook:false

        }
       
  


    handleChangeStart = (date) => {
      this.setState(()=>({
          startDate:date
      }))
    }
  
   handleChangeEnd = (date) => {

    this.setState(()=>({
        endDate:date

    }))
   
   
   }

   handleChangeName = (e) => {
    let name = e.target.value
    if(name){
        this.setState(()=>({
            errorname:undefined,
            name
        }))
    }else{
        this.setState(()=>({
            errorname:'Hey! I need your FullName'
        }))
    }
   }

   handleChangeSeat = (e) => {
       const seats = e.target.value
       
       if(seats){
           this.setState(()=>({
               errorseats:undefined,
               seats
           }))
       }else{
           this.setState(()=>({
               errorseats:'How many Seats do you really want'
           }))
       }
   }

   handleChangeDestination = (e) =>{
     const destination = e.target.value
     if(destination){
         this.setState(()=>({
             destination,
             errordestination:undefined
         }))
     }else{
         this.setState(()=>({
             errordestination:'Where do you want to go'
         }))
     }
   }

   handleChangeTimeOfDay = (e) => {
       const time = e.target.value
       if(time){
          this.setState(()=>({
              errortime:undefined,
              time
          }))
       }else{
           this.setState(()=>({
               errortime:'When would you like to travel'
           }))
       }
   }

   handleChangeTrip = (e) => {
       const oneway =  e.target.value
       if(oneway === 'no'){
         this.setState(()=>({
             checktrip:true,
             oneway,
             disabled:false
         }))
       }else{
           this.setState(()=>({
               checktrip:false,
               oneway,
               disabled:false
           }))
       }
   }

   handleSubmit = (e) => {
   
   }
    render(){
     
        return(
          
            <Consumer>
             {
                 ({save})=>(
                     
                    
            <section className="uk-flex uk-flex-center uk-height-1-1 my-border uk-padding" uk-height-viewport="true" >
             <div className="uk-height-meduim uk-width-1-2@l uk-width-1-1@s uk-margin" style={{background:'#f9f7f7'}}>
                 <div className="uk-heading-hero uk-animation-slide-left uk-margin-small-left" >
                 <h1>Travel with <span style={{color:'#BB745C'}}>Oragon</span></h1>
                 </div>

              <form className="uk-form-stacked" onSubmit={(e)=>{
                   
                e.preventDefault()
                this.setState(()=>({
                    isbook:true
                }))
                if(this.state.name && this.state.destination  
                    && this.state.seats && 
                    this.state.time  
                    && this.state.oneway){

                        if(this.state.startDate && this.state.endDate){
                            const book = {
                                name:this.state.name,
                                destination:this.state.destination,
                                seats:this.state.seats,
                                time:this.state.time,
                                startDate:this.state.startDate.valueOf(),
                                endDate:this.state.endDate.valueOf(),
                                oneway:this.state.oneway,
                             }
                             save(book)
                        }else{
                           
                            const book = {
                                name:this.state.name,
                                destination:this.state.destination,
                                seats:this.state.seats,
                                time:this.state.time,
                                startDate:undefined,
                                endDate:undefined,
                                oneway:this.state.oneway,
                             }
                            
                             save(book)
                        }
                 
                     
                    
                   }else{
                       console.log('error') 
                   }


              }}>

                <div className="uk-margin-small uk-padding">
                <label className="uk-form-label my-label-text" htmlFor="form-stacked-text">Full Name</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="form-stacked-text" type="text" placeholder="FullName..."
                     onChange={this.handleChangeName}
                    />
                    <span style={{color:'red'}}>{this.state.errorname}</span>
                </div> 
                </div>
                  

                <div className="uk-margin-small uk-padding">
                <label className="uk-form-label my-label-text" htmlFor="form-stacked-numbe">Number Of Seat</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="form-stacked-number" type="number" placeholder="Number Of Seat..."
                     onChange={this.handleChangeSeat}
                    />
                    <span style={{color:'red'}}>{this.state.errorseats}</span>
                </div> 
                </div>

                <div className="uk-margin-small uk-padding">
                <label className="uk-form-label my-label-text" htmlFor="form-stacked-select">Destination</label>
                <div className="uk-form-controls">
                    <select className="uk-select" id="form-stacked-select" value={this.state.destination} 
                    onChange={this.handleChangeDestination}
                    >
                    <option>Select Your Preferred Destination</option>
                    <option>Zara</option>
                    <option>Iogo</option>
                    <option>Pnoix</option>
                    <option>Frankies</option>
                    <option>Lagnes</option>
                    <option>Bakers</option>
                  </select>
                </div> 
                </div>
                 
                <div className="uk-margin-small uk-padding">
                <label className="uk-form-label my-label-text" htmlFor="form-stacked-select-time">Time Of Day</label>
                <div className="uk-form-controls">
                    <select className="uk-select" id="form-stacked-select-time"
                    value={this.state.time}  
                    onChange={this.handleChangeTimeOfDay}
                    >
                    <option>Morning ,Afternoon or Night Bus ?</option>
                    <option>Morning Bus - 8Am - 12pm</option>
                    <option>Afternoon Bus - 1Pm - 5Pm</option>
                    <option>Afternoon Bus - 6Pm - 12Am</option>
                  </select>
                </div> 
                </div>

                <div className="uk-margin-small uk-padding">
                <label className="uk-form-label my-label-text" htmlFor="form-stacked-select-time">One Way Trip</label>
                <div className="uk-form-controls">
                <label className="my-label-text "><input className="uk-radio" type="radio" name="radio1" value="yes"
                 onChange={this.handleChangeTrip}
                /><span className="uk-margin-left">Yes</span></label><br/>
                <label className="my-label-text"><input className="uk-radio" type="radio" name="radio1" value="no"
                onChange={this.handleChangeTrip}
                /><span className="uk-margin-left">No</span></label>
                </div> 
                </div>

              { this.state.checktrip && <div className="uk-margin-small uk-padding">
                <label className="uk-form-label my-label-text" htmlFor="form-stacked-select-time">Pick Date</label>
                <div className="uk-form-controls uk-flex uk-flex-around">
                 
           
                <DatePicker
                selected={this.state.startDate}
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleChangeStart}
                className="uk-input"
                placeholderText={'Start Date'}
                withPortal
                />
                
              
                <DatePicker
                selected={this.state.endDate}
                selectsEnd
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleChangeEnd}
                className="uk-input"
                placeholderText={'Return Date'}
                withPortal
                />


                </div> 
                </div> }
               <div className="uk-flex uk-flex-center uk-padding">
               {this.state.isbook ? <div className="lds-css ng-scope uk-margin-bottom"><div style={{width:"100%" ,height:"100%"}} className="lds-ellipsis"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div> : <button className="uk-button uk-button-large uk-width-1-2" disabled={this.state.disabled} style={{background:'#12252A'}}>Book</button> }
               </div>
              </form>
             </div>
            </section>
                 )
             }
            </Consumer>

        )

    }
}

export  default Book