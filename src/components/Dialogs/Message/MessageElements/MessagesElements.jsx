import React from 'react';
import s from "../../Dialogs.module.css";
import Message from "../Message";


const MessagesElements = (props) => {

    let messagesElements = props.messages.map ( m => <Message message={m.message} key={m.id}/>);

    return (
        <div className={s.messages}>
            { messagesElements }
        </div>
    )
}

export default MessagesElements;