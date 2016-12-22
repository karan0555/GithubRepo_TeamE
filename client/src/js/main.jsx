
import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../includes/css/styles.css';
var {browserHistory, hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.jsx'
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import NavbarComponent from './components/NavbarComponent.jsx';
import FavouriteNewsComponent from './components/FavouriteNewsComponent.jsx';
import Register from './components/Register.jsx';

class MainComponent extends React.Component{

render(){

return (
<div id="main">
<NavbarComponent/>
<br/><br/>
<h1 className="text-center">Github Repo Manager</h1>
    {this.props.children}
<hr size="30"/>
<Footer/>
</div>
)
}
}
ReactDOM.render(
<Router history={browserHistory}>
             <Route path="/" component={MainComponent} >
             	<IndexRoute component={Login} />
                <Route path="/login" component={Login} />
             	<Route path="/favNews" component={FavouriteNewsComponent} />
             	<Route path="/home" component={Home}/>
             	<Route path="/about" component={About}/>
             	<Route path="/contact" component={Contact}/>
                <Route path="/register" component={Register}/>
             </Route>


</Router>,document.getElementById('content'));