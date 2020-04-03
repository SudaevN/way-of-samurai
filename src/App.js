import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="wrapApp">
            <Header/>
            <Navigation/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;