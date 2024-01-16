import React, {Component} from 'react';

class Bottom extends Component {
    render() {
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24">
  <path
      d="M7.8284 13.0001L13.1924 18.3641L11.7782 19.7783L4 12.0001L11.7782 4.222L13.1924 5.6362L7.8284 11.0001L20 11.0001L20 13.0001L7.8284 13.0001Z"
      fill="#E43767"/>
</svg>
                            </span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card pb-4">
                                <div className="card-header bg-white border-0 text-center p-4">
                                    <img src="/assets/images/quote.png" alt=""/>
                                </div>
                                <div className="card-body">
                                    <p>
                                        For athletes, high altitude produces two contradictory effects on performance.
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
                                        For athletes, high altitude produces two contradictory effects on performance.
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
                    </div>
                </div>
            </section>
        );
    }
}

export default Bottom;