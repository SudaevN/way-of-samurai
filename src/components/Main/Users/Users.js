import React from "react";
import classes from "./Users.module.css";
import avatarEmpty from "../../../assets/img/no_photo.png";
import User from "./User/User";
import * as axios from "axios";

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
                      onClick={() => {
                          if (item.followed) {
                              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
                                  withCredentials: true,
                                  headers: {
                                      "API-KEY": "968ee89b-e4be-47cf-9e8c-efade8706065"
                                  }
                              }).then(response => {
                                  if (response.data.resultCode == 0) {
                                      props.changeFriendStatus(item.id);
                                  }
                              });

                          } else {
                              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {}, {
                                  withCredentials: true,
                                  headers: {
                                      "API-KEY": "968ee89b-e4be-47cf-9e8c-efade8706065"
                                  }
                              }).then(response => {
                                  if (response.data.resultCode == 0) {
                                      props.changeFriendStatus(item.id);
                                  }
                              });

                          }
                      }}
                      buttonText={(item.followed) ? 'Remove from friends' : 'Add to friends'}
                />)}
        </div>
    )
};

export default Users;