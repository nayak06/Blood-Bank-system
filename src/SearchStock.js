import React, { Component } from 'react'
import image2 from './images/gallery/g1.jpg'
import './App.css'

class SearchStock extends Component {
    render() {
        return (
            <div>
                <section id="process" className="donation-care">
                    <div className="container">
                        <div className="row session-title">
                            <h2>Blood Stock at Blood Bank</h2>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3 col-sm-6 vd">
                                <div className="bkjiu">
                                    <img src={image2} alt />
                                    <h4><b>Blood group: </b>A+</h4>
                                    <p><b>Availability: </b>21 units</p>
                                    <p><b>Location: </b>Blood Bank</p>
                                    <p><b>Contact: </b>9631045873</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SearchStock
