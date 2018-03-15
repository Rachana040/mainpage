import React, { Component } from 'react';
import './navbar.css';
class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
                <div className="container">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="../index.html">AAVVIS</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            
                        </button>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="dropdown nav-item">
                                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                    <i className="material-icons">apps</i> Sign in options
                        </a>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="" target="_blank" >
                                    Learn
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="" target="_blank">
                                    Write Reviews
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="" target="_blank">
                                <i className="material-icons">add</i>Post Jobs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
