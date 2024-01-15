import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Header/>
                <Portfolio/>
                <Service/>
            </>
        );
    }
}

export default App;