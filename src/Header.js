import React from 'react';
import './header.css'
// import {Route,NavLink} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom'

class About extends React.Component {
    render() {
       return (
  
        <div>
          <header>
          <nav className="navbar navbar navbar-expand-lg navbar-expand-lg navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href ='/'>Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href='/about'>About</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href='/register'>Register</a>
                </li>

                <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Employees
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          
          <a class="dropdown-item" href ='/employees'>Employees List</a>
          <a class="dropdown-item" href='/contact-us'>Add Employee</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
              </ul>
              
              <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </div>
          </nav>

          </header>
          
    
        </div>

       )
    }
 }
 export default About;