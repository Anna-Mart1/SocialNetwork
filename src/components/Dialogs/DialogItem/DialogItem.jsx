import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src='http://mythemestore.com/friend-finder/images/users/user-4.jpg' alt=''/>
            <NavLink to={`/dialogs/${props.id}`}
                     activeClassName={s.active}>{props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;