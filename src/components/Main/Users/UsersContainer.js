import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, requestUsers} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFetchingStatus,
    getFollowingStatus,
    getPageSize,
    getPortionSize,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../../redux/users-selectors";


class usersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChange = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {
        return (
            this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                          pageSize={this.props.pageSize}
                                                          portionSize={this.props.portionSize}
                                                          currentPage={this.props.currentPage}
                                                          onPageChange={this.onPageChange}
                                                          users={this.props.users}
                                                          follow={this.props.follow}
                                                          unfollow={this.props.unfollow}
                                                          followingInProgress={this.props.followingInProgress}/>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        isFetching: getFetchingStatus(state),
        totalUsersCount: getTotalUsersCount(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        portionSize: getPortionSize(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingStatus(state)
    }
};

export default connect(mapStateToProps, {follow, unfollow, requestUsers})(usersContainer);