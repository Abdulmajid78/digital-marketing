import React, {Component} from 'react';

class Service extends Component {
    serviceArray = [
        {
            title: 'СММ (социальные медиа маркетинг)',
            description: 'Продвижение и управление вашим брендом в социальных сетях, создание контента, анализ эффективности кампаний.'
        },
        {
            title: 'Платные рекламы',
            description: "Размещение рекламных материалов на платформах, таких как Facebook Ads, Google Ads, Яндекс.Директ, социальные сети, для привлечения целевой аудитории."
        },
        {
            title: 'Брендинг',
            description: 'Разработка уникального стиля бренда, логотипа, фирменного стиля, а также стратегии его продвижения на рынке.'
        },
        {
            title: 'Веб-сайт',
            description: 'Создание и разработка сайтов с учетом индивидуальных потребностей клиента, оптимизация для поисковых систем, поддержка и обновление контента.'
        },
    ]

    render() {
        return (
            <>
                <section className="service-section-cust" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="title col-7 mx-auto">
                                <h1 data-aos="fade-right" data-aos-duration='1200'>Услуги и Тарифы</h1>
                                <p data-aos='fade-left' data-aos-duration='1200'>
                                    Наши услуги нацелены на максимальное удовлетворение потребностей клиентов. От
                                    разработки
                                    креативных концепций до стратегического маркетинга — выбирайте из наших тарифов и
                                    получайте результаты, которые превзойдут ваши ожидания.
                                </p>
                            </div>
                        </div>
                        <div className="cards row">
                            {this.serviceArray.map((item, index) => (
                                <div key={index} data-aos="flip-left" data-aos-duration="900"
                                     className="col-xl-3 col-12">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <img src="/assets/images/service.png" alt=""/>
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="middle-section-cust">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6"
                                 data-aos="zoom-in-left" data-aos-duration="1200"
                                 data-aos-offset="10" data-aos-delay="200"
                                 data-aos-easing="linear">
                                <img src="/assets/images/phone1.png" alt=""/>
                            </div>

                            <div className="col-xl-6"
                                 data-aos="zoom-in-right" data-aos-duration="1200"
                                 data-aos-offset="10" data-aos-delay="200"
                                 data-aos-easing="linear">
                                <h2>3 преимущество <br/> работы с нами</h2>

                                <div className="background gap-3 mb-3">
                                    <div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                 viewBox="0 0 22 22">  <path
                                                d="M2.75 11H6.41667V19.25H2.75V11ZM15.5833 7.33334H19.25V19.25H15.5833V7.33334ZM9.16667 1.83334H12.8333V19.25H9.16667V1.83334Z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h1>Инновации в каждом проекте</h1>
                                        <p>"Мы предоставляем передовые технологии и инновационные решения, чтобы ваш
                                            проект всегда выделялся."</p>
                                    </div>
                                </div>
                                <div className="background gap-3 mb-3">
                                    <div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                 viewBox="0 0 22 22" fill="none">
  <path
      d="M17.7639 13.8469C19.182 10.4885 17.9092 6.5214 14.6705 4.65157C12.3302 3.30037 9.5546 3.38579 7.36498 4.63425L6.45531 3.04217C9.19233 1.48164 12.6617 1.37485 15.5872 3.06386C19.7037 5.44048 21.2794 10.5277 19.3616 14.7692L20.5915 15.4794L16.7735 17.509L16.6223 13.1877L17.7639 13.8469ZM4.24381 8.15798C2.82574 11.5164 4.09856 15.4834 7.33719 17.3532C9.67752 18.7045 12.453 18.6191 14.6426 17.3707L15.5523 18.9627C12.8153 20.5232 9.34597 20.6299 6.42052 18.941C2.3041 16.5643 0.72835 11.4771 2.64616 7.23558L1.41618 6.52545L5.23416 4.49586L5.38546 8.81711L4.24381 8.15798ZM7.79553 12.8357H12.8372C13.0904 12.8357 13.2955 12.6306 13.2955 12.3774C13.2955 12.1243 13.0904 11.919 12.8372 11.919H9.17052C7.90487 11.919 6.87886 10.8931 6.87886 9.62738C6.87886 8.36177 7.90487 7.33576 9.17052 7.33576H10.0872V6.4191H11.9205V7.33576H14.2122V9.16905H9.17052C8.9174 9.16905 8.71219 9.37429 8.71219 9.62738C8.71219 9.88057 8.9174 10.0857 9.17052 10.0857H12.8372C14.1028 10.0857 15.1288 11.1117 15.1288 12.3774C15.1288 13.6431 14.1028 14.669 12.8372 14.669H11.9205V15.5857H10.0872V14.669H7.79553V12.8357Z"
      fill="#E43767"/>
</svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h1>Step 2</h1>
                                        <p>"Мы предоставляем передовые технологии и инновационные решения, чтобы ваш
                                            проект всегда выделялся."</p>
                                    </div>
                                </div>
                                <div className="background gap-3">
                                    <div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                 viewBox="0 0 22 22" fill="none">
  <path
      d="M15.4 17.4167L12.8333 20.625L10.2667 17.4167H5.5C4.99374 17.4167 4.58333 17.0063 4.58333 16.5V6.51068C4.58333 6.00442 4.99374 5.59401 5.5 5.59401H20.1667C20.6729 5.59401 21.0833 6.00442 21.0833 6.51068V16.5C21.0833 17.0063 20.6729 17.4167 20.1667 17.4167H15.4ZM1.83333 1.83333H17.4167V3.66667H2.75V13.75H0.916668V2.75C0.916668 2.24374 1.32708 1.83333 1.83333 1.83333Z"
      fill="#E43767"/>
</svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h1>Step 3</h1>
                                        <p>"Мы предоставляем передовые технологии и инновационные решения, чтобы ваш
                                            проект всегда выделялся."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Service;