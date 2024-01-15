import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <section className="header-section-cust">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-12 d-flex flex-column justify-content-center align-items-start">
                            <div className="text-back">
                                Digital Marketing
                            </div>
                            <h1>Приведите свой бизнес к новым высотам с нашей компанией!</h1>
                            <p>Надежные решения для вашего успеха.</p>
                            <button>Бесплатная Консультация</button>
                        </div>
                        <div className="col-xl-1 col-0"></div>
                        <div className="col-xl-5 col-12">
                            <div className="main-image"><img className="w-100" src="/assets/images/retangle2.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;