
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or disable
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  const toggleMode = ()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743'; 
        showAlert("Dark mode has been enabled", "success");    
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled","success");
      }
  }
  
  return (
   <>
   {/* <Router> */}{/* </Router> */}
      <Navbar title="Insightify" about="about-us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
      </div>
      {/* <Routes> */}
        {/* 
          /users      -----> component 1
          /users/home -----> component 2  (if doesnt uses exact keyword then it will render component 1 as react uses partial matching)
        */}
        {/* <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>}/> */}
      {/* </Routes> */}
      
      
      
    
   </>
  );
}

export default App;
