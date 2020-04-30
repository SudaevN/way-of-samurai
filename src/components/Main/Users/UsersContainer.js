import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    changeFriendStatusActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    setTotalUsersActionCreator
} from "../../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeFriendStatus: (userId) => {
            dispatch(changeFriendStatusActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (usersCountAll) => {
            dispatch(setTotalUsersActionCreator(usersCountAll))
        }
    }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;