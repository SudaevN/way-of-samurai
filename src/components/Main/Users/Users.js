import React from "react";
import classes from "./Users.module.css";
import avatarEmpty from "../../../assets/img/no_photo.png";
import User from "./User/User";
import {followAPI} from "../../../api/api";
import {NavLink} from "react-router-dom";

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
                /*<User key={item.id}
                      id={item.id}
                      userPhoto={(item.photos.small != null) ? item.photos.small : avatarEmpty}
                      name={item.name} status={item.status}
                      homePlanet={'item.homePlanet'}
                      onClick={() => {
                          debugger
                          if (item.followed) {
                              props.toggleFollowingProgress(true);
                              followAPI.unfollow(item.id).then(resultCode => {
                                  if (resultCode == 0) {
                                      props.changeFriendStatus(item.id);
                                  }
                                  props.toggleFollowingProgress(false);
                              });
                          } else {
                              props.toggleFollowingProgress(true);
                              followAPI.follow(item.id).then(resultCode => {
                                  if (resultCode == 0) {
                                      props.changeFriendStatus(item.id);
                                  }
                                  props.toggleFollowingProgress(false);
                              });
                          }

                      }}
                      buttonText={(item.followed) ? 'Remove from friends' : 'Add to friends'}
                />*/

                <div className={classes.userBox} key={item.id}>
                    <NavLink to={"/profile/" + item.id}>
                        <img className={classes.userAva} alt="" src={(item.photos.small != null) ? item.photos.small : avatarEmpty}/>
                    </NavLink>
                    <div className={classes.rightSide}>
                        <div className={classes.aboutUser}>
                            <span className={classes.name}>{item.name}</span>
                            <span className={classes.status}>{item.status}</span>
                        </div>
                        {item.followed
                            ? <button disabled={props.followingInProgress.some(id => id == item.id)} className={classes.friendBtn} onClick={() => {
                                props.toggleFollowingProgress(true, item.id);
                                followAPI.unfollow(item.id).then(resultCode => {
                                    if (resultCode == 0) {
                                        props.unfollow(item.id);
                                    }
                                    props.toggleFollowingProgress(false, item.id)
                                });
                            }}>Remove from friends</button>
                            : <button disabled={props.followingInProgress.some(id => id == item.id)} className={classes.friendBtn} onClick={() => {
                                props.toggleFollowingProgress(true, item.id);
                                followAPI.follow(item.id).then(resultCode => {
                                    if (resultCode == 0) {
                                        props.follow(item.id)
                                    }
                                    props.toggleFollowingProgress(false, item.id)
                                })
                            }}>Add to friends</button>}
                    </div>
                </div>
            )}
        </div>
    )
};

export default Users;