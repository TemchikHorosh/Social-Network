import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileHeader}>
                <div className={s.profileCoverImg}>
                    <img src="" alt=""/>
                    <div className={s.profileHeaderAva}></div>
                    <ProfileAvatar/>
                </div>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    );
}


export default ProfileInfo;