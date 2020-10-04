import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {BrowserRouter, withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

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

const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const StarnetApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
};


export default StarnetApp;