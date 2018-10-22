
import React from 'react';
import {Route,Router,Switch  } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Signin from './components/Signin'
import Login from './components/Login'
import History from './components/HistoryProps'
import Context from './components/Context'
import Header from './components/View'
import Book from './components/Book'
import Page404 from './components/Page404'
import  RouterSecured from './components/RouteRender'




const AppRouter  = () => (
   
    <Router history={History}>
   
    <Context>

    <Switch>
    <Route path="/" component={LandingPage} exact />
    <Route path="/register" component={Signin} />
    <Route path="/login"  component={Login}  />
    <Route  path="/view"  component={Header}  />
    <RouterSecured  path="/book" component={Book}/>
    <Route  component={Page404}  />   
    </Switch>
    </Context>
    </Router> 

)

export default AppRouter