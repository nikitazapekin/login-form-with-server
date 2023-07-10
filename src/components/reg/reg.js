


import React from 'react';
import { useRef } from 'react';
import "./reg.css"
import { useState } from 'react';
const Reg = () => {
 const [mail, setMail]=useState(false)
 const [stat, setStat]=useState()
 const [finishRegistration, setFinishRegistration]=useState(false)
 const inputRef=useRef(null)
 const inputRef1=useRef(null)
 const inputRef2=useRef(null)
 const inputRef3=useRef(null)
 const st={
    display: mail ? "none" : "block"
 }
 const st1={
    display: finishRegistration ? "none" : "block"
 }


 const st2={
    display: !finishRegistration ? "none" : "block"
 }





 const url = 'http://localhost:5004'; // Update with your server URL

const postData = async () => {
  const data = {
 //   author: 'John Doe',
 author: inputRef.current.value,
    title: inputRef1.current.value,
    content: inputRef2.current.value,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Server response:', result);
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}; 

//postData(); 


//const url = 'http://localhost:5004'; // Update with your server URL

const postVerifyData = async () => {
  const data = {
 //   author: 'John Doe',

    verify: inputRef3.current.value
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Server response:', result);
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    setStat(error)
    if(JSON.stringify(error).includes("yes")){
setFinishRegistration(true)
console.log("yesssss")
    }
    console.error('Error:', JSON.stringify(error));
  }
}; 
const [name, setName]=useState("")



  return (
    <div className="regForm">
        <div style={st}>
      <h1 className="titleOfReg">Registration</h1>
    
        <input ref={inputRef} type="text" className="usernameLogin" placeholder="type username..." onChange={()=> {
            setName(inputRef.current.value)
        }} />
        <input  ref={inputRef1} type="text" className="typeEmail" placeholder="type email..." />
        <input  ref={inputRef2} type="password" className="usernamePassword" placeholder="type password..." />
        <button className="loginBtn" type="submit" onClick={()=> {
            setMail(true)
            postData(); 
          //  console.log("rr"+inputRef.current.value)
        }}>Continue</button>
</div>
        <div className="typeMesage" style={st1}>
            <h1 className="verify">Verify email</h1>
            <input ref={inputRef3} type="text" className='typeMailMessage' placeholder='type code from email'/>
            <br />
            <button className='loginBtn' onClick={()=> {
                postVerifyData()
                console.log(stat)
                if(String(stat).includes("yes")){
                    setFinishRegistration(true)
                    console.log("This is true")
                }
            }}>Check</button>
       
        </div>
   <div style={st2} className="successRegistration">
    <h1 className="successRegistrationTitle">Contragulation! Welcome to our team {name}</h1>
    <button className="loginBtn">Yes!</button>
   </div>

  
    </div>
  );
};

export { Reg };
/*

{
  "name": "gotm",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.4.0",
    "express": "^4.18.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
    "type": "module",
      "dev": "nodemon server.js"
  },
  "scripts": {
    "start": "react-scripts start node server.js",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC"
}


*/