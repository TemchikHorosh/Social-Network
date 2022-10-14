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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Artem'} id={'1'}/>
                <DialogItem name={'Dima'} id={'2'}/>
                <DialogItem name={'Vlad'} id={'3'}/>
                <DialogItem name={'Danil'} id={'4'}/>
                <DialogItem name={'Ivan'} id={'5'}/>
                <DialogItem name={'Sasha'} id={'6'}/>
                <DialogItem name={'Denis nature'} id={'7'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your is-kamasutra'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
}


export default Dialogs;