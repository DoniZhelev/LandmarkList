
  import React, { useState } from 'react';
  import PropTypes from 'prop-types';

  
  async function loginUser(credentials) {
    return fetch('http://localhost:5000/api/auth/login',  {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(credentials)
   })
     .then(data => data.json())
  
       
     
     
  }
  
  export default function Login({ setToken }) {
    
     
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email);
      console.log(password);
      const token =  loginUser({
        email,
        password
      });
      setToken(token);
    }
  
    return(
        <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="email" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required=""  />
            <label>Password</label>
          </div>
         <input className="input-show" type="submit" value="submit"/>
        </form>
      </div>
    );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
 
};
