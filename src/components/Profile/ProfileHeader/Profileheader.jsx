import React from 'react';
import s from './Profile.module.css'
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";


const ProfileHeader = (props) => {
    return (
        <div className={s.profileHeader}>
            <div className={s.profileCoverImg}>
                <img src="" alt=""/>
                <div className={s.profileHeaderAva}>
                </div>
                    <ProfileAvatar />
                </div>
            </div>

    );
}


export default ProfileHeader;