import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout( () =>{
            setAlert(null);
        },1500

        );
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
      setInterval(()=>{
          document.title = 'Install TextUtils Now';
      },1000 );
      setInterval(()=>{
          document.title = 'TextUtils is Great';
      },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return ( 
    <>
    <Router> 
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} textHome="Home2" textAbout="About Us" textContact="Contact Us"/>
    <Alert alert={alert}/>
    
    <div className="container my-3" >
     
      <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>

        <Route exact path="/textform">
        <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>
        </Route>
      </Switch>

     
    
    </div> 
    </Router>
    </>
  );
}

export default App;
