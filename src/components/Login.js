import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import {Consumer} from './Context'



class Login extends React.Component{
   
    
      state = {
          password:undefined,
          email:undefined,
          islogin:false
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
            ({user ,login})=>(

                user.uid ? <Redirect to="/view" />:
                <section className="uk-flex uk-flex-center uk-height-1-1 my-border" uk-height-viewport="true"  >
                 <div className="uk-height-meduim uk-width-1-2@l uk-width-1-1@s uk-margin" style={{background:'white'}}>
                     <h1 className="uk-padding">Login</h1>
                     
    
                  <form className="uk-form-stacked" onSubmit={(e)=>{
                    e.preventDefault()
                    this.setState(()=>({
                        islogin:true
                    }))
                    const data = {password:this.state.password,email:this.state.email.trim()}
                    login(data)
                  
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
                   
                   {this.state.islogin ? <div className="lds-css ng-scope uk-margin-bottom"><div style={{width:"100%" ,height:"100%"}} className="lds-ellipsis"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div> : <button className="uk-button uk-button-large uk-width-1-2" disabled={this.state.disabled} style={{background:'#12252A'}}>Login</button> }
                   
                   </div>
                   <div className=" uk-padding-small uk-flex uk-flex-around uk-width-1-1">
                
                   <span><Link to="/forgot">Forgot Password?</Link></span>
                   <span><Link to="/register">Or Register</Link></span>
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

export default Login