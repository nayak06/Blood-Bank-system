import React, { Component } from 'react'
import './design/App.css'

export class AdminPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email:null,
            pass:'',
            con_pass:'',
            name:'',
            mob:'',
            city:'',
            state:'',
            type:''
        }
    }
    
    


    inputHandeler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log(this.email+" "+this.pass)
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-lg-4 col-md-4  text-center">
                        <h2>Add a User</h2>
                        <form method="POST" action="#">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={this.inputHandeler} value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="pass" placeholder="Your Password"  onChange={this.inputHandeler} value={this.state.pass}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="con-pass"
                                    placeholder="Your Confirm Password" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" name="mob" placeholder="Your mob" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="city" placeholder="Your City" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="state" placeholder="Your State" />
                            </div>
                            <div className="form-group">
                                <select id="ticket-type" name="type" className="form-control">
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
                                <button type="submit" className="btn btn-danger">Add a user</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4 col-md-4  text-center">
                        <h2>Delete a User</h2>
                        <form method="POST" action="#">
                            <div className="form-group">
                                <input type="email" className="form-control" name="your-email" placeholder="Email" />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-danger">Delete a User</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center">
                        <h2>Update a Stock</h2>
                        <form method="POST" action="#">
                            <div className="form-group">
                                <select id="ticket-type" name="group" className="form-control">
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
                            <div className="form-group">
                                <input type="number" className="form-control" name="availability" placeholder="Availability" />
                            </div>
                            <div className="form-group disabled">
                                <input type="text" className="form-control disable" name="loc" value="Blood Bank" />
                            </div>
                            <div className="form-group disabled">
                                <input type="tel" className="form-control disabled" name="contact" value="06535267" />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-danger">Update to Stock</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPage
