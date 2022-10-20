import React from 'react';
import s from "../Dialogs.module.css";
import DialogItem from "../DialogItem/DialogItem";



const DialogsElements = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/> );

    return ( <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
    )
}


export default DialogsElements;