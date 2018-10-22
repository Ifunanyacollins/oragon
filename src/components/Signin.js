import React from 'react'
import {Link} from 'react-router-dom'
import {Consumer} from './Context'



class Signin extends React.Component{
   
    
      state = {
          password:undefined,
          email:undefined
      }

      handelChangeEmail = (e)=>{
          const email = e.target.value
          this.setState(()=>({
              email
          }))
      }

      handelChangePassword = (e) =>{
          const password = e.target.value
          this.setState(()=>({
              password
          }))
      }

    

    render(){
        return(
            
            <Consumer>
            {
            ({user ,signin})=>(
                <section className="uk-flex uk-flex-center uk-height-1-1 my-border" uk-height-viewport="true" >
                 <div className="uk-height-meduim uk-width-1-2@l uk-width-1-1@s uk-margin" style={{background:'white'}}>
                 
                 <h1 className="uk-padding">Register</h1>
    
                  <form className="uk-form-stacked" onSubmit={(e)=>{
                    e.preventDefault()
                    const data = {password:this.state.password,email:this.state.email.trim()}
                    signin(data)
                  
                  }}>
    
                    <div className="uk-margin-small uk-padding">
                    <label className="uk-form-label my-label-text" htmlFor="form-stacked-email">Email</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="form-stacked-Email" type="text" placeholder="Email..."
                        onChange={this.handelChangeEmail}
                        />
                        <span style={{color:'red'}}></span>
                    </div> 
                    </div>
                      
    
                    <div className="uk-margin-small uk-padding">
                    <label className="uk-form-label my-label-text" htmlFor="form-stacked-password">Password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="form-stacked-password" type="password" placeholder="Password..."
                       onChange={this.handelChangePassword}
                        />
                        <span style={{color:'red'}}></span>
                    </div> 
                    </div>
    
                   <div className="uk-flex uk-flex-center uk-padding">
                   <button className="uk-button uk-button-large uk-width-1-2"  style={{background:'#12252A', color:'white'}}>Register</button>
                   </div>
                   <div className=" uk-padding-small uk-flex uk-flex-around uk-width-1-1">
                   <span><Link to="/login">Already have an account?</Link></span>
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

export default Signin