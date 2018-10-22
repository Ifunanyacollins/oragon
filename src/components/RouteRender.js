import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {Consumer} from './Context'



const  RouterSecured = ({component : Component,...rest}) => (
    
  
        <Consumer>
        {
            ({user})=> (
                <Route {...rest}  render={ (props)=>(
                    user.uid ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/login" />
                    )
                )} />
            )
               
            
        }
        </Consumer> 
   

    )




export default RouterSecured
 