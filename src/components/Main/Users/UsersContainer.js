import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, getUsers} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";


class usersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

    };

    render() {
        return (
            this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                          pageSize={this.props.pageSize}
                                                          currentPage={this.props.currentPage}
                                                          onPageChange={this.onPageChange}
                                                          users={this.props.users}
                                                          follow={this.props.follow}
                                                          unfollow={this.props.unfollow}
                                                          followingInProgress={this.props.followingInProgress}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        followingInProgress: state.usersData.followingInProgress
    }
};

export default connect(mapStateToProps, {follow, unfollow, getUsers})(usersContainer);