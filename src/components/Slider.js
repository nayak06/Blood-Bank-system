import React from 'react'
import image from '../images/slider/slide-02.jpg' 
import './design/App.css'


function Slider() {
    return (
        <div>

            <div className="slider-detail">

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={image} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className=" bounceInDown">Donate Blood & Save a Life</h5>
                                <p className=" bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo
                    neque, <br />
                                            aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br />
                                                sed sagittis at, sagittis quis neque. Praesent.</p>


                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Slider
