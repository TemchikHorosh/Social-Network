import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    // console.log(props.message);

    return (
                <div className={s.item}>
                    <img src='https://www.surfsession.com/img/pictures/2021/20210215/thumbnail/2102153641.png' alt=''/>
                    { props.message }
                    <div>
                        <span>like</span> {props.countlikes}
                    </div>
                </div>
    )

}

export default Post;