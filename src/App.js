import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import AddEmployee from './AddEmployee';
import EmployeeDetail from './employeeDetail';
import Home from './home';
// import logo from './logo.svg';
// import Animal from './Animal/Animal'
// import Person from './Person/Person'
import './App.css';
import SimpleForm from './simpleForm';
import About from './About';
import Header from'./Header';



class App extends Component {

  buttonHandler = () => {
    console.log("clicked")

  };
  state={
    persons: [

      {name:'Obaid' , age:26},
      {name:'Obaid' , age:26},
      {name:'Obaid' , age:26}
   
    ],
    animals: [
      {name:'Dog' , color:'brown'},
      {name:'cat' , color:'grey'}
    ]
  }

  
  
  render() {
    return (
      

      <div>

          
          
          
          <Header/>
         
          <BrowserRouter>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact render={()=> <About/>}/>
          <Route path='/employees' exact component={EmployeeDetail}/>
          <Route path="/contact-us" exact component={AddEmployee}/>

          <Route path='/register' exact component = {SimpleForm}/>
          </BrowserRouter>
          
          
          {/* <button className="btn btn-primary" onClick={() => alert('click')}> Click me </button> */}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Animal name={this.state.animals[0].name} color={this.state.animals[0].color}/> */}
      </div>
    );
  }
}

export default App;








