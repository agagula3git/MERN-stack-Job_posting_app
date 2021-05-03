import React from 'react';
import logo from '../logo.svg';
/*import './Header.css'*/
import { Link } from 'react-router-dom'

export default function Header() {
    const styleLink={
        marginRight: '25px',
        fontSize: '14pt'
    }
    return (
        <div className="d-flex flex-row p-2 justify-content-between align-items-center bg-dark">
            <div className="d-flex flex-row">
                <img className="mt-4" src={logo} alt="react-logo" height="80px"/>
                <div className="mt-4">
                    <h2 className="text-info">Job Posting Web App</h2>
                    <h4 className="font-weight-lighter font-italic text-white">React Engineer Assignment</h4>
                </div>
            </div>
            <div style={styleLink}>
                <Link className="mr-5 text-decoration-none" to="/">Home</Link>
                <Link className="text-decoration-none" to="/insertAd">Post a Job</Link>
            </div>
        </div>

    )
}