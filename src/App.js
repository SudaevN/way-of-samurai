import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="wrapApp">
                <HeaderContainer/>
                <Navigation/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);