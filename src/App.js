import React, { Component } from 'react';
import Profile from './profile/Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carrousol from './profile/Carrousol';

class App extends Component {

  state = {

    data : [

    {fullName:'bouthouri Med elarbi',bio:"blablablabla",profession:"web devoleper", id:1},

    
  ]
}

  // I don't know why the alert display twice !!!??
  handleName = () => {
    // alert(`Hello ${this.state.data[0].fullName} and welcome`)
   
  }

  render() {

    return (
      <div className="App" style={{border:'1px solid black'}}>
        <h1> ABout me </h1>                                                                         
        <Profile fullName="Mariam DHIFALLAH" bio="ADVANCED TECHNOLOGIES ENGINEER" profession="Junior consultant" handleName={this.handleName()} >
          <img src='/Mariam.jpg' alt="Mariam" style={{borderRadius:'10px'}}/>
        </Profile>

        <Carrousol/>
      </div>
    );
  }
}

export default App;
