import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <div className="wrapApp">
            <HeaderContainer />
            <Navigation />
            <Main />
            <Footer />
        </div>
    );
};

export default App;