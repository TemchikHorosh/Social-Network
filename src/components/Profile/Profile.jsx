import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return           <div className={s.content}>
        <div>
            <img src="https://html5css.ru/css/img_lights.jpg" alt=""/>
        </div>
        <div>
            Ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;