import React from 'react'
import { useState } from 'react';
import pic from "../Static/pic.svg";

const Form = () => {
    const [formdata, setformdata] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault(); ////It prevents the default form submission behavior to avoid page refresh.
  
      // Create a new object to store form data
      const newFormData = { name, email, pass };
  
      // Update the state array with the new form data
      setformdata([...formdata, newFormData]);
  
      // Clear input fields of our form
      setName("");
      setEmail("");
      setpass("");
    };
  
    return (
      <>
  
      <div style={{display:"flex", justifyContent:"center"}}>
  
      <div
          className="main"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
            <div className="heading">
              <h3 className="h3">Sign Up to Discover Startup Features</h3>
            </div>
  
            <div className="table">
              <form onSubmit={handleSubmit} className="form" action="">
                <div>
                  <label>NAME</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
  
                <br />
                <div>
                  <label>EMAIL</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <br />
                <div>
                  <label>PASSWORD</label>
                  <input
                    value={pass}
                    id="pass"
                    onChange={(e) => setpass(e.target.value)}
                    type="password"
                    placeholder="Your Password"
                    required
                  />
                </div>
  
                <div className="hello">
                  <div>
                    <button className="submit" type="submit">
                      SIGN UP
                    </button>
                  </div>
  
                  <div className="hello2">
                    <p>By signing up you agree to Our Terms and Privacy Policy</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
  
          <div className="pic">
            <img src={pic} />
          </div>
  
  
          
        </div>
  
  
  
  
  
      </div>
                      
  
        <div className="table2">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {formdata.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.pass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
   
      </>
    );
  };


export default Form