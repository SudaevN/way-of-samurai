import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import avatarEmpty from "../../../assets/img/no_photo.png";
import User from "./User/User";

class Users extends React.Component {
    render() {
        return (
            <div className={classes.usersBox}>
                <button onClick={this.downloadUsers} className={classes.downloaddBtn}>Download users</button>
                {this.props.users.map(item =>
                    <User key={item.id} userPhoto={(item.photos.small != null) ? item.photos.small : avatarEmpty} name={item.name} status={item.status} homePlanet={'item.homePlanet'} onClick={() => {
                        this.props.changeFriendStatus(item.id)
                    }} buttonText={(item.followed) ? 'Remove from friends' : 'Add to friends'}/>)}
            </div>
        )
    }
    downloadUsers = () => {
        if (this.props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    };
}

export default Users;