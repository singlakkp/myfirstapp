import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './customcss.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
//import FooterPage from './FooterPage';
import Expertise from './Expertise';
import {Switch, Route, Redirect} from 'react-router-dom'; 


const App = () =>{
  return (
  	<>	
  		<Navbar/>
  		<Switch>
  		<Route exact path='/' component={Home} />
  		<Route exact path='/about' component={Aboutus} />
  		<Route exact path='/portfolio' component={Portfolio} />
  		<Route exact path='/expertise' component={Expertise} />
  		<Route exact path='/contact' component={Contact} />
  		<Redirect to='/' />
  		</Switch>
  		
  	</>
  );
}

export default App;
