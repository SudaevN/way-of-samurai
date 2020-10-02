import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import Post from "./Posts/Post/Post";
import {
    getProfile,
    setUserProfile,
    getStatus,
    updateStatus,
    addPost,
    toggleIsFetching
} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authorizedUserId;
        if(!userId) {
            this.props.history.push("/login");
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            this.props.isFetching ? <Preloader/> : <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.usersData.isFetching,
        profile: state.profileData.profile,
        status: state.profileData.status,
        postsElements: state.profileData.posts.map(post =>
            <Post key={post.postId} picUrl={post.picUrl} title={post.title} date={post.date} text={post.text}/>).reverse(),
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {
        addPost,
        setUserProfile,
        toggleIsFetching,
        getProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);