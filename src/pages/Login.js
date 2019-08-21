import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth'

// import auth from '../services/auth-service';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
    .then( (user) => {
      console.log(user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  

  render() {
    const { username, password } = this.state;
    return (
      <div className="main-login">
        <form onSubmit={this.handleFormSubmit}>
          <label className="datos-login" htmlFor='username' ><h2>Username:</h2></label>
          <input id='username' className="cuadro-login" type='text' name='username' value={username} onChange={this.handleChange}/>
          <label className="datos-login" htmlFor='password'><h2>Password:</h2></label>
          <input id='password' className="cuadro-login" type='password' name='password' value={password} onChange={this.handleChange} />
          <button type='submit' value="login" className="btn-select-search"><h2>Login</h2></button>
        </form>

       
      </div>
    )
  }
}

export default withAuth(Login);