import React, { Component } from 'react';
import bg_image from '../../img/kit/bg_image.png'
class LandingPageHeader extends Component {
    render() {
        const pageHeaderBgImg = {
            backgroundImage: `url(${bg_image})`
        }
        return (
            <div className="page-header header-filter" data-parallax="true" style={pageHeaderBgImg}>
                <div className="container">
                    <div className="row">
                        <div className = "col-md-6">
                        </div>
                        <div className="col-md-6">
                            <h1 className="title">Turning Your Dreams into Reality.</h1>
                            <h4>Looking for a job that suits you ,you&apos;re at the right place then.Come connect with people having similar vision of yours.</h4>
                            <br />
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPageHeader;
