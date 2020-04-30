import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import avatarEmpty from "../../../assets/img/no_photo.png";
import User from "./User/User";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };



    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className={classes.usersBox}>
                <div className={classes.paginatorWrap}>
                    {pages.map(n => {
                        return <span className={this.props.currentPage === n && classes.selectedPage} onClick={(e) => { this.onPageChange(n) }}>{n}</span>
                    })}
                </div>
                {this.props.users.map(item =>
                    <User key={item.id} userPhoto={(item.photos.small != null) ? item.photos.small : avatarEmpty} name={item.name} status={item.status} homePlanet={'item.homePlanet'} onClick={() => {
                        this.props.changeFriendStatus(item.id)
                    }} buttonText={(item.followed) ? 'Remove from friends' : 'Add to friends'}/>)}
            </div>
        )
    }
}

export default Users;