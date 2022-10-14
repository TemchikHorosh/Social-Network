import React from 'react';
import s from './ProfileAvatar.module.css';


const ProfileAvatar = (props) => {
    return (
        <div className={s.profileAvatar}>
            <div className={s.profileAvatarImg}></div>
        </div>
    )
}

export default ProfileAvatar;

