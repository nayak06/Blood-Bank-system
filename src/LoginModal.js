import React, { Component } from 'react'
import './App.css'

class LoginModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            valu: true
        }

    }

    render() {
        var login = <div id="login1" className="modal-body" ref={this.login}>
            <form method="POST" action="#">
                <div className="form-group">
                    <input type="text" className="form-control" name="your-email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="your-pass" placeholder="Your Password" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-danger">Log In</button>
                </div>
            </form>
        </div>;
        var logup = <div id="logup" ref={this.logup} className="modal-body ">
            <form method="POST" action="#">
                <div className="form-group">
                    <input type="email" className="form-control" name="your-email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="your-pass" placeholder="Your Password" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="your-confirm-pass"
                        placeholder="Your Confirm Password" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="your-name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" name="your-mob" placeholder="Your mob" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="your-city" placeholder="Your City" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="your-state" placeholder="Your State" />
                </div>
                <div className="form-group">
                    <select id="ticket-type" name="ticket-type" className="form-control">
                        <option value="">-- Select Blood Group --</option>
                        <option value="Apos">A+</option>
                        <option value="Aneg">A-</option>
                        <option value="Bpos">B+</option>
                        <option value="Bneg">B-</option>
                        <option value="Oneg">O-</option>
                        <option value="Opos">O+</option>
                        <option value="ABpos">AB+</option>
                        <option value="ABneg">AB-</option>
                    </select>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-danger">Register</button>
                </div>
            </form>
        </div>;

        return (
            <div>
                <div id="login-ticket-modal" className="modal fade">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <h4 onClick={() => this.setState({valu: true})} id="loginbtn" className="modal-title ">Login</h4>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h4 onClick={() => this.setState({valu: false})} id="logupbtn" className="modal-title ">Register</h4>
                                    </div>
                                </div>

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            {this.state.valu? login: logup}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModal
