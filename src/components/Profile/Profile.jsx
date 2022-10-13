import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/Profileheader";

const Profile = () => {
    return (
        <div>
            <ProfileHeader />
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>
    )

}

export default Profile;