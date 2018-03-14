import React, { Component } from 'react';

class LandingPageBody extends Component {
    render() {
        return (
            <div class="main main-raised">
                <div class="container">
                    <div class="section text-center">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto">
                                <h2 class="title">Let&apos;s talk product</h2>
                                <h5 class="description">A social networking site designed specifically for the business community. The goal of the site is to allow registered members to establish connections with people they know and trust professionally. Members can invite anyone to become a connection.</h5>
                            </div>
                        </div>
                        <div class="features">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="info">
                                        <div class="icon icon-info">
                                            <i class="material-icons">account_circle</i>
                                        </div>
                                        <h4 class="info-title">Let Your Profile Speak up</h4>
                                        <p>Add profile photo to help others recognize you.Mention your Skills and update other details</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="info">
                                        <div class="icon icon-success">
                                            <i class="material-icons">verified_user</i>
                                        </div>
                                        <h4 class="info-title">Verified Users</h4>
                                        <p>Assures that the users registered on the site and jobs posted are legal.</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="info">
                                        <div class="icon icon-danger">
                                            <i class="material-icons">group_add</i>
                                        </div>
                                        <h4 class="info-title">Build Your Network</h4>
                                        <p>More connections mean you’re more likely to hear about new opportunities - aim for 30 to start.</p>
                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section section-contacts">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto">
                                <h2 class="text-center title">Work with us</h2>
                                <h4 class="text-center description">Wanna take the opportunity of working with us, contact us about any further collaboration. We will get back to you.</h4>
                                <form class="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Your Name</label>
                                                <input type="email" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Your Email</label>
                                                <input type="email" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleMessage" class="bmd-label-floating">Your Message</label>
                                        <textarea type="email" class="form-control" rows="4" id="exampleMessage"></textarea>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 ml-auto mr-auto text-center">
                                           
                                        <button class="btn btn-primary waves-effect waves-light" type="submit" name="action">Submit
                                            <i class="material-icons right">send</i>
                                        </button>
        
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPageBody;
