import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Bottom extends Component {
    render() {

        function SampleNextArrow(props) {
            const {className, style, onClick} = props;
            return (
                <div
                    className={className}
                    style={{...style, background: "transparent", top: '-92px', right: '12px',padding: '24px',color: '#E43767', borderRadius: '100%'}}
                    onClick={onClick}
                />
            );
        }

        function SamplePrevArrow(props) {
            const {className, style, onClick} = props;
            return (
                <div
                    className={className}
                    style={{...style, background: "transparent",position: 'absolute', top: "-92px", left
                            : '1196px', padding: '24px',color: '#E43767', borderRadius: '100%',display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    onClick={onClick}
                />
            );
        }

        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoPlay: true,
            speed: 500,
            autoplaySpeed: 1000,
            cssEase: "linear",
            dots: false,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <section className="bottom-section-cust">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-5">
                            <h1>Что говорят о нас наши клиенты ?</h1>
                        </div>
                        <div className="col-5"></div>

                        <div className="col-2 d-flex align-items-center gap-3 justify-content-end">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24">
  <path
      d="M7.8284 13.0001L13.1924 18.3641L11.7782 19.7783L4 12.0001L11.7782 4.222L13.1924 5.6362L7.8284 11.0001L20 11.0001L20 13.0001L7.8284 13.0001Z"
      fill="#E43767"/>
</svg>
                            </span>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
  <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
      fill="#E43767"/>
</svg>
                            </span>
                        </div>
                    </div>

                    <div className="row">
                        <Slider {...settings}>
                            <div className="col-xl-4">
                                <div className="card pb-4">
                                    <div className="card-header bg-white border-0 text-center p-4">
                                        <img className="text-center" src="/assets/images/quote.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            For athletes, high altitude produces two contradictory effects on
                                            performance.
                                            For explosive events
                                        </p>
                                    </div>
                                    <div className="card-footer gap-3">
                                        <img src="/assets/images/avatar1.png" alt=""/>
                                        <div>
                                            <h6>Marvin McKinney</h6>
                                            <p className="p-0 m-0">Happy User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card pb-4">
                                    <div className="card-header bg-white border-0 text-center p-4">
                                        <img src="/assets/images/quote.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Great movie podcasts add to the conversation around a film and avoid mere
                                            self-indulgence - here’s a breakdown of the best.
                                        </p>
                                    </div>
                                    <div className="card-footer gap-3">
                                        <img src="/assets/images/avatar1.png" alt=""/>
                                        <div>
                                            <h6>Marvin McKinney</h6>
                                            <p className="p-0 m-0">Happy User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card pb-4">
                                    <div className="card-header bg-white border-0 text-center p-4">
                                        <img src="/assets/images/quote.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            For athletes, high altitude produces two contradictory effects on
                                            performance.
                                            For explosive events
                                        </p>
                                    </div>
                                    <div className="card-footer gap-3">
                                        <img src="/assets/images/avatar1.png" alt=""/>
                                        <div>
                                            <h6>Marvin McKinney</h6>
                                            <p className="p-0 m-0">Happy User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card pb-4">
                                    <div className="card-header bg-white border-0 text-center p-4">
                                        <img src="/assets/images/quote.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Great movie podcasts add to the conversation around a film and avoid mere
                                            self-indulgence - here’s a breakdown of the best.
                                        </p>
                                    </div>
                                    <div className="card-footer gap-3">
                                        <img src="/assets/images/avatar1.png" alt=""/>
                                        <div>
                                            <h6>Marvin McKinney</h6>
                                            <p className="p-0 m-0">Happy User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card pb-4">
                                    <div className="card-header bg-white border-0 text-center p-4">
                                        <img src="/assets/images/quote.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            For athletes, high altitude produces two contradictory effects on
                                            performance.
                                            For explosive events
                                        </p>
                                    </div>
                                    <div className="card-footer gap-3">
                                        <img src="/assets/images/avatar1.png" alt=""/>
                                        <div>
                                            <h6>Marvin McKinney</h6>
                                            <p className="p-0 m-0">Happy User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Bottom;