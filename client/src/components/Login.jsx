import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(){
    const payload = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('/api/user/signup', payload)
      .then(function(response){
        console.log(response);
      })
      .catch(function(err){
        console.log('something went wrong');
      })
  }

  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
   return( 
     <div>
      <div>Username:</div>
      <input name="username" onChange={this.onChangeHandler}/>
      <div>Password:</div>
      <input name="password" onChange={this.onChangeHandler}/>
      <button onClick={this.onSubmitHandler}>Sign Up</button>
    </div>
   )}
}

export default Login;