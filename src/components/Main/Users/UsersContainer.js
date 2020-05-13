import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {changeFriendStatus, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";


class usersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }


    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    };


    render() {
        return (
            this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                          pageSize={this.props.pageSize}
                                                          currentPage={this.props.currentPage}
                                                          onPageChange={this.onPageChange}
                                                          users={this.props.users}
                                                          changeFriendStatus={this.props.changeFriendStatus}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeFriendStatus: (userId) => {
//             dispatch(changeFriendStatusActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (usersCountAll) => {
//             dispatch(setTotalUsersActionCreator(usersCountAll))
//         },
//         toggleIsFetcing: (isFetching) => {
//             dispatch(toggleIsFetcingActionCreator(isFetching))
//         }
//     }
// };

export default connect(mapStateToProps, {
    changeFriendStatus,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(usersContainer);