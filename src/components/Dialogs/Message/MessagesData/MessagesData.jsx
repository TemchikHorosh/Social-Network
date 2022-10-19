import React from 'react';
import Message from "../Message";
import s from "../../Dialogs.module.css";

const MessagesData = (props) => {
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.messages}>
            { messagesElements }
        </div>
    )
}

export default MessagesData;
