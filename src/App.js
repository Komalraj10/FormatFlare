// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setalert]=useState(null);  
  const showalert=(message ,type)=>{
     setalert({
       msg:message,
       type:type 
     })
     setTimeout(() => {
       setalert(null)
     }, 1500);
  }
  const togglemode=()=>{
   if(mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor='#042743';
     showalert('Dark mode has been enabled','success ')
   }
   else{
     setMode('light');
     document.body.style.backgroundColor='white';
     showalert('Light mode has been enabled','success ')
   }
  }

  const router=createBrowserRouter([
    { path:"/",
      element:<><Navbar title="FormatFlare" aboutText="About Us" mode={mode} togglemode={togglemode} /> <Textform showalert={showalert} heading="Enter  the text to analyze below" mode={mode}
      /> </>
    },
    {
      path:"/About",
      element:<><Navbar title="FormatFlare" aboutText="About Us" mode={mode} togglemode={togglemode} />
      <About/></>
    },
 ])

   
  return (
   <>
  
    <RouterProvider router={router}/>
    <Alert alert={alert}/>

    
    </>
    );
  }

    export default App;