import React, { Component } from 'react'
import './design/App.css'

class LoginModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            valu: true,
            error:null,
            email:'',
            pass:'',
            con_pass:'',
            name:'',
            mob:'',
            city:'',
            state:'',
            type:'',
            user_details:{}
        }

    }

    

    inputHandeler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
        
    }

    onformSubmission=()=>{
        if (this.state.pass==this.state.con_pass)
        {
            this.setState({
                error: null,
                user_details:{
                    email:this.state.email,
                    pass:this.state.pass,
                    name:this.state.name,
                    mob:this.state.mob,
                    city:this.state.city,
                    state:this.state.state,
                    type:this.state.type
                }
            })
            console.log(this.state.user_details)
            console.log(JSON.stringify(this.state.user_details))
        }
        else
        {

            this.setState({
                error: 'Password don\'t match'
            })
        }
        
    }
    render() {
        var login = <div id="login1" className="modal-body" ref={this.login}>
            
                <div className="form-group">
                    <input type="text" className="form-control" name="your-email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="your-pass" placeholder="Your Password" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-danger">Log In</button>
                </div>
            >
        </div>;
        var logup = <div id="logup" ref={this.logup} className="modal-body ">
            
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={this.inputHandeler} value={this.state.email} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="pass" placeholder="Your Password" onChange={this.inputHandeler} value={this.state.pass}/>
                </div>
                <lable style={{color:'red'}}>{this.state.error}</lable>
                <div className="form-group">
                    <input type="password" className="form-control" name="con_pass"
                        placeholder="Your Confirm Password" onChange={this.inputHandeler} value={this.state.con_pass}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Your Name" onChange={this.inputHandeler} value={this.state.name}/>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" name="mob" placeholder="Your mob" onChange={this.inputHandeler} value={this.state.mob}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="city" placeholder="Your City" onChange={this.inputHandeler} value={this.state.city}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="state" placeholder="Your State" onChange={this.inputHandeler} value={this.state.state}/>
                </div>
                <div className="form-group">
                    <select id="ticket-type" name="type" className="form-control" onChange={this.inputHandeler} value={this.state.type}>
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
                    <button type="submit" className="btn btn-danger" onClick={this.onformSubmission}>Register</button>
                </div>
            
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
