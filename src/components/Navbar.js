import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


// taking props
export default function Navbar(props) {

    let navElement;

    if (props.mode === "red"){
        navElement = (
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">
                <Link className="navbar-brand text-danger" to="/">{props.logo}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link  text-danger" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link  text-danger" aria-current="page" to="/about">{props.aboutName}</Link>
                    </li>
                    
                </ul>
                <div className="form-check form-switch d-flex align-items-center gap-3">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/> 
                        <label className={`form-check-label me-5 text-danger`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>

                        {/* NightMare Theme */}
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.nightmareMode}/> 
                        <label className={`form-check-label text-danger`} htmlFor="flexSwitchCheckDefault">Nightmare Mode</label>
                </div>
                
                </div>
            </div>
	    </nav>

        );
    }

    else{
        navElement = (<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.logo}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">{props.aboutName}</Link>
                </li>
                
            </ul>
            <div className="form-check form-switch d-flex align-items-center gap-3">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/> 
                    <label className={`form-check-label me-5 text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>

                    {/* NightMare Theme */}
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.nightmareMode}/> 
                    <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Nightmare Mode</label>
            </div>
            
            </div>
        </div>
    </nav>
);
    }

    return (
        navElement
    ); 
}

// Setting Type Validation

Navbar.propTypes = {
    logo: PropTypes.string.isRequired,
    aboutName: PropTypes.string
};

//default Props

Navbar.defaultProps = {
    logo: "Set Title Here",
    aboutName: "Set About Name"
};