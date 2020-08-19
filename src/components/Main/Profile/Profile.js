import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength5 = maxLengthCreator(5);

const Profile = (props) => {

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <AddNewPostReduxForm onSubmit={addNewPost} />
            <Posts postsElements={props.postsElements}/>
        </div>
    )
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={"newPostText"} component={Textarea} rows="5" validate={[required, maxLength5]} />
            <button>+ Add post</button>
        </form>
    )
};

const AddNewPostReduxForm = reduxForm({
    form: "addPost"
})(AddNewPostForm);



export default Profile;