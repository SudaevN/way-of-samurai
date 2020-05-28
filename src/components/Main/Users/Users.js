import React from "react";
import classes from "./Users.module.css";
import avatarEmpty from "../../../assets/img/no_photo.png";
import User from "./User/User";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.usersBox}>
            <div className={classes.paginatorWrap}>
                {pages.map(n => {
                    return (props.currentPage - 3 <= n && n <= props.currentPage + 3) ?
                        <span key={n} className={props.currentPage === n ? classes.selectedPage : undefined} onClick={(e) => {
                            props.onPageChange(n)
                        }}>{n}</span> : null
                })}
            </div>
            {props.users.map((item) =>
                <User key={item.id}
                      id={item.id}
                      userPhoto={(item.photos.small != null) ? item.photos.small : avatarEmpty}
                      name={item.name} status={item.status}
                      homePlanet={'item.homePlanet'}
                      onClick={() => {item.followed ? props.unfollow(item.id) : props.follow(item.id)}}
                      disabled={props.followingInProgress.some(id => id === item.id)}
                      buttonText={(item.followed) ? 'Remove from friends' : 'Add to friends'}
                />
            )}
        </div>
    )
};

export default Users;