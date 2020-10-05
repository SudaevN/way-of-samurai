import React from "react";
import classes from "./Users.module.css";
import avatarEmpty from "../../../assets/img/no_photo.png";
import User from "./User/User";
import Pagination from "../../common/Pagination/Pagination";

let Users = ({totalUsersCount, pageSize, portionSize, currentPage, onPageChange, ...props}) => {

    return (
        <div className={classes.usersBox}>
            <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} portionSize={portionSize} />
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