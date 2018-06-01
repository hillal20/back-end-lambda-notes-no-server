import React, { Component } from "react";
import { fetchingUsersActionCreator } from './FetchingNotes';
import { connect } from 'react-redux';
import axios from 'axios';
import { sendingRegistrationActionCreator } from './FetchingNotes';
import { Link } from 'react-router-dom';
class User extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      username: "",
      password: "",
      loginUsername: "",
      loginPassword: ""
    }
  }



  componentWillMount = () => {
    this.props.fetchingUsersActionCreator()
  }

  usersInfoHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  sendingLogins = (obj) => {

    const promise = axios.post('https://hilal-lambda-notes.herokuapp.com/login', obj)
    promise
      .then(response => {
        console.log('res3', response.data.token)
        localStorage.setItem("token1", response.data.token);
        this.props.history.push("/app");

      })
  }


  fn = (obj) => {
    this.sendingLogins(obj)


  }


  render() {
    const obj = {
      username: this.state.username,
      password: this.state.password
    }


    const obj2 = {
      username: this.state.loginUsername,
      password: this.state.loginPassword,


    }


    return (
      <div className="User">
        <div>
          <h3> ## Welcome To Lambda Notes##</h3>
        </div>
        <div className="Registration">

          <div className="Login">
            <h4> Login</h4>

            <div>
              <input className="LoginInput !important"
                type="text"
                placeholder="enter loginUsername"
                name="loginUsername"
                value={this.state.loginUsername}
                onChange={this.usersInfoHandler}
              />
            </div>
            <div>
              <input className="LoginInput !important"
                type="password"
                placeholder="enter loginPassword"
                name="loginPassword"
                value={this.state.loginPassword}
                onChange={this.usersInfoHandler}
              />
            </div>
            {obj2.loginUsername !== "" && obj2.loginPassword !== "" &&
              <button className="LoginBtn !important" onClick={() => this.fn(obj2)}> Send </button>
            }

          </div>

          <div className="Register">
            <h4>Register</h4>
            <div>
              <input className="RegisterInput !important"
                type="text"
                placeholder="enter your username"
                name="username"
                value={this.state.username}
                onChange={this.usersInfoHandler}
              />
            </div>
            <div>
              <input className="RegisterInput !important"
                type="password"
                placeholder="enter your password"
                name="password"
                value={this.state.password}
                onChange={this.usersInfoHandler}
              />
            </div>
            <button className="RegisterBtn !important" onClick={() => {
              this.props.sendingRegistrationActionCreator(obj);
              this.setState({ username: '', password: '' })
            }}> Send </button>
          </div>
        </div>
        <div >
          <h4>login with :</h4>
          <a className='GoogleImg  !important' href="http://hilal-lambda-notes.herokuapp.com/google"> <img src={require("./pictures/download.jpg")} width="100px" /></a>
          <a className='GoogleImg  !important' href="http://hilal-lambda-notes.herokuapp.com/facebook"> <img src={require("./pictures/go.jpg")} width="100px" height="100px" /></a>
        </div>

        <div >

        </div>


      </div>
    )
  }

}


const mapStateToProps = (state) => {
  console.log('st', state.usersReducer.users)

  return {

  }


};




export default connect(mapStateToProps, { fetchingUsersActionCreator, sendingRegistrationActionCreator })(User)
