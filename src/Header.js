import React, { Component } from 'react'
import './App.css';
import {Link, Router} from 'react-router-dom'
import Login from './LoginModal'

class Header extends Component {
    render() {
        return (
          <div>
            <header className="header">
              <div className="continer-fluid ">
                <div className="header-top">
                  <div className="container">
                    <div className="row col-det">
                      <div className="col-lg-6 d-none d-lg-block">
                        <ul className="ulleft">
                          <li>
                            <i className="far fa-envelope" />
                            ADMIN
                            <span>|</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <ul className="ulright">
                          <li data-toggle="modal" 
                            data-target="#login-ticket-modal">
                            <i className="fas fa-user" />
                            Login
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu-jk" className="header-bottom">
                  <div className="container">
                    <div className="row nav-row">
                      <div className="col-md-3 logo">
                        <img src="assets/images/logo.jpg" alt="" />
                      </div>
                      <div className="col-md-9 nav-col">
                        <nav className="navbar navbar-expand-lg navbar-light">
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                          </button>
                          <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                              <li className="nav-item active">
                                <a className="nav-link">
                                <Link to="/">Home</Link>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link">
                                <Link to="/stock">Blood Bank</Link></a>
                              </li>
                              <li className="nav-item" id="my_profile">
                                <a className="nav-link" >
                                  <Link to="/profile">My Profile</Link></a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact Us</a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <Login/>
            </div>
          );
    }
}

export default Header
