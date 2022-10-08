import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                    <Post message={'Hi, how are you?'} countlikes={15}/>
                    <Post message={'it\'s my first post'} countlikes={20}/>
            </div>
        </div>
    )

}

export default MyPosts;