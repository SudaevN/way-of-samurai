import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import Post from "./Posts/Post/Post";
import {addPost, refreshPostText, setUserProfile, toggleIsFetching} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import {authAPI, profileAPI} from "../../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        let userId = this.props.match.params.userId ? this.props.match.params.userId : 8071;

        profileAPI.getProfile(userId).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUserProfile(data);
        });
    }

    render() {
        return (
            this.props.isFetching ? <Preloader/> : <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.usersData.isFetching,
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

export default connect(mapStateToProps, {refreshPostText, addPost, setUserProfile, toggleIsFetching})(profileUrlContainer);