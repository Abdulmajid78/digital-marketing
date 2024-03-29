import React, {Component} from 'react';

class Priority extends Component {
    render() {
        return (
            <section className="priority-section-cust" id="about">
                <div className="container">
                    <div className="row">
                        <h1 data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                        >Ваш проект всегда в приоритете?</h1>
                        <div data-aos="zoom-in-right" data-aos-duration="1200"  className="col-xl-4">
                            <div className="card h-100">
                                <div className="card-header border-0 p-4 text-center">
                                    <img src="/assets/images/icon1.png" alt=""/>
                                </div>
                                <div className="card-body">
                                    <h4>Инновации в каждом проекте</h4>
                                    <p>
                                        "Мы предоставляем
                                        передовые технологии и инновационные решения, чтобы ваш проект всегда
                                        выделялся."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-duration="1300" className="col-xl-4">
                            <div className="card h-100">
                                <div className="card-header border-0 p-4 text-center">
                                    <img src="/assets/images/icon2.png" alt=""/>
                                </div>
                                <div className="card-body">
                                    <h4>Личный подход</h4>
                                    <p>
                                        "У нас нет шаблонов. Работая с нами,
                                        вы получаете индивидуальное внимание и решения, соответствующие вашим
                                        потребностям."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in-left" data-aos-duration="1200"  className="col-xl-4">
                            <div className="card h-100">
                                <div className="card-header border-0 p-4 text-center">
                                    <img src="/assets/images/icon3.png" alt=""/>
                                </div>
                                <div className="card-body">
                                    <h4>Экспертность без компромиссов</h4>
                                    <p>
                                        "Наша команда опытных профессионалов гарантирует высший уровень профессионализма
                                        в каждом аспекте вашего проекта."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Priority;