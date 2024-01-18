import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <section className="form-section-cust">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-12">
                            <h1>
                                Начните новый этап развития с нами
                            </h1>
                            <p>Remember, when you invest your capital is at risk.</p>
                        </div>
                        <div className="col-xl-7 col-12">
                            <form>
                                <div className="row gap-3">
                                <div className="col-xl-5 col-12">
                                    <input placeholder="Имя" name="name" className="form-control me-4" type="text"/>
                                </div>
                                <div className="col-xl-5 col-12">
                                    <input placeholder="номер телефона" name="phone" className="form-control"
                                           type="text"/>
                                </div>
                                    <div className="col-xl-5 col-12">
                                        <input placeholder="название компании" name="company"
                                               className="form-control me-4" type="text"/>
                                    </div>
                                    <div className="col-xl-5 col-12">
                                        <button type="submit">Отправить</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;