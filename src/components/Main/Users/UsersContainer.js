import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {changeFriendStatusActionCreator, setUsersActionCreator} from "../../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users
        // quantityToShow: state.quantityToShow
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeFriendStatus: (userId) => {
            dispatch(changeFriendStatusActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;