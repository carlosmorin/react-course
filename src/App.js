import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends Component{

  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: ""  
    }
  }

  emailChanges = (email) => {
    this.setState({ email: email })
  }

  passChanges = (password) => {
    this.setState({ password: password })
  }

  submitForm = (e) => {
    console.log(this.state)
  }

  render(){
    let email = this.state.email;
    return (
      <form>
        <input 
          onChange={ (e)=>{ this.emailChanges( e.target.value )} }
          type="email" 
          placeholder="Email" 
          value={email}/>
        <br/>
        <input
          onChange={ (e)=>{ this.passChanges( e.target.value )} }
          type="password" 
          placeholder="Contraseña" 
          value={this.state.password} />
        <br/>
        <button onClick={ this.submitForm } > Enviar </button>
      </form>
    );
  }
}

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
