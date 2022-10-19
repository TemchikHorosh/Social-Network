import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsData from "./DialogsData/DialogsData";
import MessagesData from "./Message/MessagesData/MessagesData";


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
                <DialogsData />
                <MessagesData />
        </div>
    );
}


export default Dialogs;
