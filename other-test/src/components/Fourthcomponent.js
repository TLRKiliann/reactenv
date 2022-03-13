import React from 'react'
//import { useState } from 'react'
//import { useEffect } from 'react'

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

//import { findDOMNode } from 'react-dom'
//import $ from 'jquery'

export default class Fourthcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      showPassword: false,
    };
  };
  
  handleClickShowPassword = () => {
    this.setState(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword 
    }));
  };
  
  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  handlePasswordChange = (prop) => (event) => {
    this.setState(prevState => ({
      ...prevState,
      [prop]: event.target.value 
    }));
  };

  render() {
    return (
      <div
        style={{
          padding: "30px 0px",
          margin: "0px 400px",
          border: "1px dotted white",
        }}
      >
        <h3>How to show and hide password in ReactJS?</h3>
        <InputLabel
          htmlFor="standard-adornment-password"
          style={{color: 'cyan', fontSize: '1.0rem'}}>
            Enter your Password
        </InputLabel>
        <Input
          type={this.state.showPassword ? "text" : "password"}
          onChange={this.handlePasswordChange("password")}
          value={this.state.password}
          style={{color: 'cyan'}}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
    );
  }
};
