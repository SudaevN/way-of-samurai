import React from "react";
import classes from "./login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utilities/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={classes.loginPage}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} placeholder={"Email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} type={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={Input} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);