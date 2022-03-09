import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"> {props.title} </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link" href="./About">About us </a>
                            </li>
                        </ul>
                        <div className={`custom-control custom-switch text-${props.mode === 'light'?'dark':'light'}`}>
                            <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
                            <label className="custom-control-label mx-3" htmlFor="customSwitch1">Change mode</label>
                        </div>       
                    </div>
                </div>
            </nav>

        </>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutTitle: PropTypes.string
}
//isrequired also helpful when you forget to pass the value of props it gave an error 
//Navbar.propTypes = { title: PropTypes.string.isRequired, aboutTitle: PropTypes.string }

//Default propsTypes
/*
 Default works when you forget to pass the value of props and set the default value automatically  
 */
// Navbar.defaultProps = {
//     title: 'TxtUtils',
//     aboutTitle: 'About us'
// Dollar sign and underscores are actually an identifiers in React js is used to identify some sort of
// variable, functions, properties, events, and objects.}