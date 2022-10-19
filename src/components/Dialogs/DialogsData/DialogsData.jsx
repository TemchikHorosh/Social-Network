import React from 'react';
import DialogItem from './../DialogItem/DialogItem';
import s from "../Dialogs.module.css";

const DialogsData = (props) => {

    let dialogs = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Danil'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Sasha'},
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );

    return (
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
    );
}


export default DialogsData;
