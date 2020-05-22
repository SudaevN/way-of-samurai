import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../../api/api";


class usersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }


    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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
                                                          toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(usersContainer);