import React, { Component } from 'react'
import './Profile.css'

export class Profile extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="main-body">
                        <div class="row gutters-sm">
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <div class="mt-3">
                                                <h4>John Doe</h4>
                                                <button data-toggle="modal" data-target="#edit-ticket-modal"
                                                    class="btn btn-primary">Edit Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-8">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Full Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                Kenneth Valdez
                                </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                fip@jukmuh.al
                                </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Mobile</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                (320) 380-4539
                                </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">City</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                Bay Area, San Francisco, CA
                                </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">State</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                Jharkhand
                                </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Blood Group</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                A+
                                </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <br />
                <br />
            </div>
        )
    }
}

export default Profile
