import React, { Component } from 'react'
import Slider from './Slider'
import SearchDonor from './SearchDonor'


export class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <SearchDonor/>
            </div>
        )
    }
}

export default Home
