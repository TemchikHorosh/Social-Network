import React from "react";
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={nav => nav.isActive ? s.activeLink: s.item}>profile</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to='/dialogs' className={nav => nav.isActive ? s.activeLink: s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={nav=>nav.isActive ? s.activeLink: s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={nav=>nav.isActive ? s.activeLink: s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={nav=>nav.isActive ? s.activeLink: s.item}>Settings</NavLink>
            </div>

        </nav>
    );
}

export default Navbar;