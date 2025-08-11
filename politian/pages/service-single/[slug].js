import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useRouter } from 'next/router';
import Services from '../../api/service';
import ServiceSidebar from './sidebar';
import Contact from './contact';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';

const ServiceSinglePage = () => {
    const router = useRouter();
    const serviceDetails = Services.find(item => item.slug === router.query.slug);

    if (!serviceDetails) {
        return <p style={{ padding: '20px' }}>Service not found.</p>;
    }

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={serviceDetails.sTitle} pagesub={'Service'} />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                {/* Main image & intro */}
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <Image src={serviceDetails.sImgS} alt={serviceDetails.sTitle} />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>{serviceDetails.sTitle}</h3>
                                    </div>
                                    <p>{serviceDetails.description1}</p>
                                    <p>{serviceDetails.description2}</p>

                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={serviceDetails.ssImg1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={serviceDetails.ssImg2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Capabilities */}
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Capabilities</h3>
                                    </div>
                                    <p>{serviceDetails.capabilitiesIntro}</p>
                                    <ul>
                                        {serviceDetails.capabilities?.map((cap, i) => (
                                            <li key={i}>{cap}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Approach */}
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Approach</h3>
                                    </div>
                                    <p>{serviceDetails.approach}</p>
                                </div>

                                {/* Work Process */}
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        {serviceDetails.workProcess?.map((step, i) => (
                                            <li key={i}>{step}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Related Services */}
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services
                                                .filter(s => s.slug !== serviceDetails.slug)
                                                .slice(0, 3)
                                                .map((service, i) => (
                                                    <div className="col-lg-4 col-md-6 col-12" key={i}>
                                                        <div className="wpo-service-item">
                                                            <i className={`fi ${service.icon}`} ></i>
                                                            <h2>{service.sTitle}</h2>
                                                            <p>{service.shortDescription}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>Have project in mind? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            <Contact />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ServiceSidebar />
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default ServiceSinglePage;
