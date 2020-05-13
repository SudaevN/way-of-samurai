import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import Post from "./Posts/Post/Post";
import {addPost, refreshPostText, setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile,
        postsElements: state.profileData.posts.map(post =>
            <Post key={post.postId} picUrl={post.picUrl} title={post.title} date={post.date} text={post.text}/>).reverse(),

    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         refreshPostText: (newText) => {
//             dispatch(refreshPostActionCreator(newText));
//         },
//         addPost: () => {
//             dispatch(addPost());
//         }
//     }
// };

let profileUrlContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {refreshPostText, addPost, setUserProfile})(profileUrlContainer);