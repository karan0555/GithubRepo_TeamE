var React = require('react');
var {Link} = require('react-router');
export default class NavbarComponent extends React.Component{

render() {
 return(
 <div>
   <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/saveRepo">Saved Repos</Link></li>
           <li><Link to="/contact">Contact Us</Link></li>
           <li><Link to="/about">About Us</Link></li>
           <li><Link to="/login">Login</Link></li>
           <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
     </nav>
   </div>
 );
}
}