import React, {Component} from 'react';
import logo from '../logo.svg';





class Header extends Component {
  render() {
    return (
<header>
  <div className="logo">
  <img src={logo} className="App-logo" alt="logo" />
   </div>
   <h1 class="App-header">Search Github</h1>
   <nav>
     <ul>
      <li>
         <a href="/">Home</a>
      </li>
      <li>
          <a href="/search">Search</a>
      </li>
      <li>
          <a href="/mine">Mine</a>
      </li>
      </ul>
      </nav>    
  
</header>  
);
    }}
export default Header;