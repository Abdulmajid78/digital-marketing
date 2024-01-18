import React, {Component} from 'react';
import Accordion from "./Accordion";

class Faq extends Component {
    render() {
        const {array} = this.props
        return (
            <section className="faq-section-cust" id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                Часто задаваемые вопросы (FAQ)
                            </h1>
                        </div>
                    </div>

                </div>
                <div className="container">
                                <Accordion array={array}/>
                </div>
            </section>
        );
    }
}

export default Faq;