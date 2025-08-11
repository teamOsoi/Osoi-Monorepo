import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import VideoModal from '../ModalVideo/VideoModal';

const FunFact = (props) => {

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    return (
        <section className="wpo-fun-fact-section content">
            <div className="right-bg">
                <VideoModal/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-6">
                        <div className="wpo-fun-fact-wrap">
                            <div className="wpo-fun-fact-grids clearfix">
                                <div className="grid">
                                    <div className="info">
                                        <h3><span><CountUp end={3} enableScrollSpy /></span>K</h3>
                                        <p>Local Charities</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="info">
                                        <h3><span><CountUp end={1} enableScrollSpy /></span>C</h3>
                                        <p>Farmer Training Centers Established</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="info">
                                        <h3><span><CountUp end={6} enableScrollSpy /></span>%</h3>
                                        <p>Schools Renovated</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="info">
                                        <h3><span><CountUp end={8} enableScrollSpy /></span>C</h3>
                                        <p>Mobile Health Clinics Established</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFact;
