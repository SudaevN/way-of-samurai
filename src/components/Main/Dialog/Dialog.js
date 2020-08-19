import React from "react";
import classes from "./Dialog.module.css";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilities/validators/validators";


const Dialog = (props) => {

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessage)
    };

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
        <div className={classes.dialogWrap}>
            <div className={classes.dialogWindow}>
                {props.messagesItems}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newMessage"} placeholder={"Enter your message"} validate={[required, maxLength100]} />
            <button>send message</button>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({
    form: 'addMessage'
})(AddMessageForm);

export default Dialog;