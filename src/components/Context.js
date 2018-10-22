import React from 'react'
import moment from 'moment'
import { auth,database } from '../firebase/firebase'
import UIkit from 'uikit/dist/js/uikit.min.js'
import History from './HistoryProps'


export const  {Provider,Consumer} = React.createContext({})

class Context extends React.Component{

    constructor(props){
        super(props)
this.state = {
            user:{
                email:'Anonymous',
                uid:undefined
            },

            content:[],
            buses:[],
            filtered:[]
        
        }




         
         

    } //end of my constructor 

     componentDidMount(){
        
        auth.onAuthStateChanged((user)=> {

            if (user) {

             this.changestate(user)
        
        database.ref(`reserves/${this.state.user.uid}/reserve`).on('value',(snapshot)=>{
                    const data = []
                    if(snapshot){
                        snapshot.forEach((childSnapshot)=>{data.push({id:childSnapshot.key,...childSnapshot.val()})})
                        const len = data.length-1
                        this.setState(()=>({content:data[len]}))
                    }  });
        }else { this.setState(()=>({user:{uid:undefined,email:'unkown user'}})) }


          });

          database.ref('Buses').once('value').then((snapshot)=>{
               const data = []
              snapshot.forEach((snap)=>{
                 data.push({
                     terminal:snap.key,
                     ...snap.val()
                 })
              })

              this.setState(()=>({
                buses:[...data],
                filtered:[...data]
            }))

        
          })

     }
  
   changestate = ({uid,email}) =>(this.setState(()=>({user:{uid,email}})))

   
   filterByText = (text) =>{
    
       const data = this.state.buses.filter((bus)=>{
          
           return bus.terminal.toLowerCase().includes(text.toLowerCase())
       })

  
      
        this.setState(()=>({
            filtered:[...data]
        }))
   }

   sortByDate = (date) => {
    
    const data = this.state.buses.filter((bus)=>{
        if(date){
            if(moment(date).isSame(bus.depTime)){
                return bus
            }
        }else{
            return true
        }
      
    })

   
   
     this.setState(()=>({
         filtered:[...data]
     }))

   }

   handleLogin = ({email, password})=>{

    auth.signInWithEmailAndPassword(email, password)
    .then(function(e){
        console.log('hello')
       History.push('/book')
    })
    .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        UIkit.notification({message: errorMessage, pos: 'top-center',status:'danger'})
 
      });

   }


   handleSingin = ({email, password}) => {
     
    auth.createUserAndRetrieveDataWithEmailAndPassword(email, password).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        UIkit.notification({message: errorMessage, pos: 'top-center',status:'danger'})
})



   }


   handleLogout = () => {

    auth.signOut()
        .then(()=>History.push('/'))
        .catch((error)=>(UIkit.notification({message: error, pos: 'top-center',status:'danger'})));
   }
   
   handleSaveData = (data) => {
    const {name,destination,seats,time,startDate = 0,endDate = 0,oneway} = data 
    const raw = {name,destination,seats,time,startDate,endDate,oneway}
   database.ref(`reserves/${this.state.user.uid}/reserve`).push(raw).then(()=>{
       History.push('/view')
   }).catch((error)=>{
       const errorMessage = error.message
       UIkit.notification({message: errorMessage, pos: 'top-center',status:'danger'})
   }) }


   
    render(){
        return(
            <Provider value={{
                user:this.state.user,
                content:this.state.content,
                login:this.handleLogin,
                logout:this.handleLogout,
                signin:this.handleSingin,
                save:this.handleSaveData,
                buses:this.state.filtered,
                filterByText:this.filterByText,
                sortByDate:this.sortByDate
            }}>
            {this.props.children}
            </Provider>
        )
    }
}








export default  Context