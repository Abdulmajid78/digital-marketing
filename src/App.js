import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Priority from "./components/Priority";

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Header/>
                <Portfolio/>
                <Service/>
                <Priority/>
            </>
        );
    }
}

export default App;