import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
  



// Clean App
function App() {
    
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message , type)=>{
        setAlert({
            message: message,
            type: type
        });
        setTimeout(()=>{
            setAlert(null)
        },1500);
    };

    const toggleMode = ()=>{
        if (mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = 'gray';
            showAlert("Dark Mode has Been enabled" , "success");
            document.title = "Text Utils - Dark Mode";
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has Been enabled" , "success");
            document.title = "Text Utils - Light Mode";
        }
    }

    const nightmareMode = ()=>{


        if (mode === 'light' || mode === 'dark'){
            setMode('red');
            document.body.style.backgroundColor = 'gray';
            showAlert("NightMare Mode enabled" , "success");
            
        }
        
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has Been enabled" , "success");
        
        }
    }
    
    return (
        <>

        {/* Exact Route vs w/o it
        
            /users --> comp1
            /users/home --> comp2
            they will be same w/o exact
         */}
        <Router>
            {/* Passing Props */}
            <Navbar logo="TextUtils" aboutName="About TU" mode={mode} toggleMode = {toggleMode} nightmareMode={nightmareMode}/>
            <Alert alert={alert}/>

            <div className="container my-5">
                <Switch>
                    <Route exact path="/about">
                        <About mode={mode} />
                    </Route>
                    <Route exact path="/">
                        <TextForm showAlert={showAlert} heading="Try Text Utils - Word counter , Character counter , remove extra spaces , copy , LowerCase , UpperCase" mode={mode}/>
                    </Route>
                </Switch>
            

            </div>      
        </Router>
        </> 
    );
}

export default App;
