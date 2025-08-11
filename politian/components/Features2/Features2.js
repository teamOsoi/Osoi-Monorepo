import React from "react";
import Link from 'next/link'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Features2 = (props) => {
    return (
        <div className="wpo-features-s2  section-padding pb-0">
            <div className="container">
                <div className="features-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="feature-item">
                                <div className="features-wrapper">
                                    <div className="icon">
                                        <div className="features-dot">
                                            <div className="dots"></div>
                                        </div>
                                        <i className="fi flaticon-charity"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} href="/team">Make Donation</Link></h2>
                                        <p>Support Patrick Osoi's Vision: Donate Today to Shape Kenya's Future! PAMOJA ITAWEZEKANA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="feature-item">
                                <div className="features-wrapper">
                                    <div className="icon">
                                        <div className="features-dot">
                                            <div className="dots"></div>
                                        </div>
                                        <i className="fi flaticon-conference-1"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} href="/campaign">Campaign Events</Link></h2>
                                        <p>Discover the Power of Collective Action: Be a Part of Patrick Osoi's Campaign Events</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="feature-item">
                                <div className="features-wrapper">
                                    <div className="icon">
                                        <div className="features-dot">
                                            <div className="dots"></div>
                                        </div>
                                        <i className="fi flaticon-community"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} href="/volunteer">Join Volunteer</Link></h2>
                                        <p>Unleash Your Potential: Join Our Volunteer Team and Make a Lasting Impact on Kenya's Future.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features2;