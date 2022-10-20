import React from 'react';
import s from './Dialogs.module.css';

import DialogsElements from './DialogElements/DialogElements';
import MessagesElements from './Message/MessageElements/MessagesElements';


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogsElements dialogs={props.dialogs}/>
            <MessagesElements messages={props.messages}/>
        </div>
    );
}


export default Dialogs;
