import React, { Component } from 'react'
import image from './images/gallery/g1.jpg'
import './App.css'


class SearchDonor extends Component {
    render() {
        return (
            <div>
                <section id="process" className="donation-care">
                    <div className="container">
                        <div className="row session-title">
                            <h2>Search Blood</h2>
                        </div>
                        <form method="GET" action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="your-search" placeholder="Your Search" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <select id="ticket-type" name="ticket-type" className="form-control">
                                            <option value>-- Select Blood Group --</option>
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
                                </div>
                                <div className="col-lg-3">
                                    <button type="submit" className="btn btn-danger" style={{ width: '100%' }}>Search</button>
                                </div>
                            </div>
                        </form>
                        <br />
                        <div className="row">
                            <div className="col-md-3 col-sm-6 vd">
                                <div className="bkjiu">
                                    <img src={image} alt />
                                    <h4>Avi Kumar</h4>
                                    <p><b>Blood group: </b>A+</p>
                                    <p><b>Location: </b>Jamshedpur, Jharkhand</p>
                                    <p><b>Contact: </b>9631045873</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 vd">
                                <div className="bkjiu">
                                    <img src={image} alt />
                                    <h4>Avi Kumar</h4>
                                    <p><b>Blood group: </b>A+</p>
                                    <p><b>Location: </b>Jamshedpur, Jharkhand</p>
                                    <p><b>Contact: </b>9631045873</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 vd">
                                <div className="bkjiu">
                                    <img src={image} alt />
                                    <h4>Avi Kumar</h4>
                                    <p><b>Blood group: </b>A+</p>
                                    <p><b>Location: </b>Jamshedpur, Jharkhand</p>
                                    <p><b>Contact: </b>9631045873</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 vd">
                                <div className="bkjiu">
                                    <img src={image} alt />
                                    <h4>Avi Kumar</h4>
                                    <p><b>Blood group: </b>A+</p>
                                    <p><b>Location: </b>Jamshedpur, Jharkhand</p>
                                    <p><b>Contact: </b>9631045873</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SearchDonor
