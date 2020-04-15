import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapApp">
                <Header/>
                <Navigation/>
                <Main state={props.state} dispatch={props.dispatch}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;