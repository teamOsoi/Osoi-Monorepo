import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import himg from '/public/images/slider/3.png'
import icon1 from '/public/images/slider/medal.svg'
import icon2 from '/public/images/slider/stick-man.svg'

import cImg1 from '/public/images/slider/client1.png'
import cImg2 from '/public/images/slider/client2.png'
import cImg3 from '/public/images/slider/client3.png'
import cImg4 from '/public/images/slider/client4.png'
import Image from "next/image";

const settings = {
    dots: false,
    arrows: false,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero3 = () => {
    return (
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-content">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Meet <span>Esther Howard,</span> The Next Country Leader</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>We can start by taking small steps and making small changes that can have a big
                                    impact on the world.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">Join The Campaign</Link>
                            </div>
                            <div className="politian-pic">
                                <div className="inner">
                                    <Image src={himg} alt="" />
                                </div>
                                <div className="back-shape"></div>
                                <div className="award">
                                    <div className="icon"><i><Image src={icon1} alt="" /></i></div>
                                    <div className="content">
                                        <h5>Best Leader Award Winner</h5>
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



export default Hero3;