import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Danil'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Denis nature'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map ( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}


export default Dialogs;
