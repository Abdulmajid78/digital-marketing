import React, {Component} from 'react';

class Footer extends Component {

    render() {


        return (
            <section className="footer-section-custom">
                <div className="container">
                    <footer className="pt-5">
                        <div className="row pb-5 text-white">
                            <div className="col-6 col-md-3 mb-3">
                                <h3>Digital Marketing</h3>
                                <ul className="nav flex-column ">
                                    <li className="nav-item mb-2">
                                        <a href="#"
                                           className="nav-link p-0 ">Tools for the world’s most <br/>
                                            customer-centric businesses
                                        </a>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h5>Pages</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="#"
                                           className="nav-link p-0">Портфолио</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#"
                                           className="nav-link p-0 ">Услуги и Тарифы</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#"
                                           className="nav-link p-0 ">О Компании</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#"
                                           className="nav-link p-0 ">FAQs</a>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h5>Info</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="#"
                                           className="nav-link p-0 ">Legal</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#"
                                           className="nav-link p-0 ">Privacy and policy</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#"
                                           className="nav-link p-0 ">Terms of use</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h5>Get in touch</h5>
                                <h6><a href="#"
                                       className="nav-link p-0 ">
                                    Hello@digitalmarketing.co
                                </a></h6>
                            </div>

                            <div className="col-md-3 mb-3">
                                <form>
                                    <h5>Newsletter</h5>
                                    <p>Sign upfor the latest news, company insights, and Whirl updates.</p>
                                    <div className="d-flex flex-column flex-sm-row w-100 gap-1">
                                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="text" className="form-control"
                                               placeholder="Email address"/>
                                        <button className="btn btn-light" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M1.62192 7.76304C1.18647 7.61789 1.18304 7.3837 1.63088 7.23442L17.5361 1.93269C17.9764 1.78589 18.229 2.0324 18.1057 2.4643L13.5613 18.3695C13.4355 18.8099 13.1816 18.8252 12.9955 18.4065L10.0002 11.6669L15.0002 5.00023L8.3335 10.0003L1.62192 7.76304Z"
                                                    fill="#1F1F1F"/>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center py-4 mt-4 text-white border-top">
                            <p>© 2023 Company, Inc. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </section>
        );
    }
}

export default Footer;