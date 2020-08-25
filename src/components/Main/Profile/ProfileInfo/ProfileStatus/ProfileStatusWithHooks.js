import React, {useState} from "react";
import classes from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {

        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    let [status, setStatus] = useState(props.status);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <>
            {!editMode &&
            <div>
                <span className={classes.profileStatus}
                      onDoubleClick={activateEditMode}>{props.status || 'empty'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={ onStatusChange } value={ status } />
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;