import React, { Component } from 'react';

class Accordion extends Component {
    render() {
        const { array } = this.props;

        return (
            <div className="row my-5">
                {array.map((item, index) => (
                    <div key={index} className="col-xl-6 mb-3">
                        <div className="accordion" id={`accordion-${index}`}>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse-${index}`}
                                        aria-expanded={index === 0 ? 'true' : 'false'}
                                        aria-controls={`collapse-${index}`}
                                    >
                                        {item.title}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse-${index}`}
                                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                    data-bs-parent={`#accordion-${index}`}
                                >
                                    <div className="accordion-body">{item.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Accordion;
