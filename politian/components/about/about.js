import React from 'react'
import sign from '/public/images/signeture.png'
import Image from 'next/image';

const About = (props) => {
    return (
        <section className={`wpo-about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <Image src={props.abimg} alt="" />
                                <div className="wpo-about-img-text">
                                    <h4>Kenya</h4>

                                    <div className="rotate-text">
                                        <span>W</span>
                                        <span>e</span>
                                        <span>A</span>
                                        <span>r</span>
                                        <span>e</span>
                                        <span>W</span>
                                        <span>o</span>
                                        <span>r</span>
                                        <span>k</span>
                                        <span>i</span>
                                        <span>n</span>
                                        <span>g</span>
                                        <span>F</span>
                                        <span>o</span>
                                        <span>r</span>
                                        <span>A</span>
                                        <span> </span>
                                        <span>B</span>
                                        <span>e</span>
                                        <span>t</span>
                                        <span>t</span>
                                        <span>e</span>
                                        <span>r</span>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="border-shape-1"></div>
                                    <div className="border-shape-2"></div>
                                    <div className="border-shape-3"></div>
                                </div>
                                <div className="about-shape">
                                    <div className="shape-1"></div>
                                    <div className="shape-2"></div>
                                    <div className="shape-3"></div>
                                    <div className="shape-4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>About Politian</span>
                                    <h2>Engage, Connect, and Shape the Future of our Country</h2>
                                </div>
                                <p>TEAM OSOI believes in the ability to listen to all across the political divide, age, social status and position in life. Kenya is a one people.</p>
                                <p>For all the issues affecting our beautiful motherland Kenya, we will come up with viable and permanent solutions that will see to it that all of us lead meaningful lives and make Kenya a wonderful place.</p>
                                <div className="quote">
                                    <p>“We believe in collectiveness, we believe in bringing together our minds to achieve the best and undeniably great dream. A dream that can't be broken easily.”</p>
                                </div>
                                <div className="wpo-about-left-info">
                                    <div className="wpo-about-left-inner">
                                        <div className="wpo-about-left-text">
                                            <h5>Patrick Osoi</h5>
                                            <span>Founder of PatrickOsoi Campaign</span>
                                        </div>
                                    </div>
                                    <div className="signeture">
                                        <Image src={sign} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;