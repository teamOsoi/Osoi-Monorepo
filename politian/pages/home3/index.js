import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero3 from '../../components/hero3/hero3';
import Features2 from '../../components/Features2/Features2';
import About from '../../components/about/about';
import CampaignSection from '../../components/CampaignSection/CampaignSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import FunFact from '../../components/FunFact/FunFact';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import Donors from '../../components/Donors/Donors';
import Footer from '../../components/footer/Footer';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import abimg from '/public/images/aboutA.jpg'
import ServiceSection from '../../components/ServiceSection/ServiceSection';

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s3'} Logo={'images/logo2.png'}/>
            <Hero3/>
            <Features2/>
            <About abimg={abimg}/>
            <FunFactS2 fnTpClass={'funfact-wrap-sec'} fnClass={'wpo-fun-fact-section-s3'}/>
            <ServiceSection/>
            <CampaignSection/>
            <Testimonial/>
            <FunFact/>
            <TeamSection/>
            <Donors/>
            <BlogSection/>
            <InstagramSection/>
            <PartnerSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;
