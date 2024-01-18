import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Priority from "./components/Priority";
import Bottom from "./components/Bottom";
import Form from "./components/Form";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
    accordionArray = [
        {
        title: 'Какие результаты я могу ожидать от ваших услуг?',
        description: 'Результаты от услуг зависят от ваших целей и выбранного тарифного плана, но обычно это повышение узнаваемости бренда, увеличение трафика на сайт и улучшение вовлеченности аудитории.'
    },
        {
        title: 'Каковы стоимость и структура вашего тарифного плана?',
        description: 'Результаты от услуг зависят от ваших целей и выбранного тарифного плана, но обычно это повышение узнаваемости бренда, увеличение трафика на сайт и улучшение вовлеченности аудитории.'
    },
        {
        title: 'How does encryption protect data?',
        description: 'Результаты от услуг зависят от ваших целей и выбранного тарифного плана, но обычно это повышение узнаваемости бренда, увеличение трафика на сайт и улучшение вовлеченности аудитории.'
    },
        {
        title: 'Сколько времени займет достижение желаемых результатов? ',
        description: 'Результаты от услуг зависят от ваших целей и выбранного тарифного плана, но обычно это повышение узнаваемости бренда, увеличение трафика на сайт и улучшение вовлеченности аудитории.'
    },
        {
            title: 'Предоставляете ли вы гарантии качества выполненной работы?',
            description: 'Результаты от услуг зависят от ваших целей и выбранного тарифного плана, но обычно это повышение узнаваемости бренда, увеличение трафика на сайт и улучшение вовлеченности аудитории.'
        }
    ]

    render() {
        AOS.init();
        return (
            <>
                <Navbar/>
                <Header/>
                <Portfolio/>
                <Service/>
                <Priority/>
                <Bottom/>
                <Form/>
                <FAQ array={this.accordionArray}/>
                <Footer/>
            </>
        );
    }
}

export default App;