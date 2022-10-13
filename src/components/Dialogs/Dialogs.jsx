import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1' >Artem</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' >Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' >Vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' >Danil</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' >Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6' >Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/7' >Denis nature</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your is-kamasutra</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    );
}


export default Dialogs;