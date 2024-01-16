import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Priority from "./components/Priority";
import Backdrop from "bootstrap/js/src/util/backdrop";
import Bottom from "./components/Bottom";
import Form from "./components/Form";

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Header/>
                <Portfolio/>
                <Service/>
                <Priority/>
                <Bottom/>
                <Form/>
            </>
        );
    }
}

export default App;