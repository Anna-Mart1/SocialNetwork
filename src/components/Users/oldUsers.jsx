import React from 'react';
import s from './../Users.module.css';
import * as axios from 'axios';
import userPhotoDefault from '../../images/userPhoto.jpg'

export const OldUsers = (props) => {

    let info = [
        {
            id: 1,
            photoUrl: 'https://im0-tub-ru.yandex.net/i?id=8b01ebe2d1dc6e4d84b91a6d45423273&n=13',
            follow: true,
            firstName: 'firstName1',
            lastName: 'lastName1',
            status: 'status1',
            location: {cityName: 'cityName1', countryName: 'countryName1'}
        },

        {
            id: 2,
            photoUrl: 'https://im0-tub-ru.yandex.net/i?id=8b01ebe2d1dc6e4d84b91a6d45423273&n=13',
            follow: false,
            firstName: 'firstName2',
            lastName: 'lastName2',
            status: 'status2',
            location: {cityName: 'cityName2', countryName: 'countryName2'}
        },

        {
            id: 3,
            photoUrl: 'https://im0-tub-ru.yandex.net/i?id=8b01ebe2d1dc6e4d84b91a6d45423273&n=13',
            follow: true,
            firstName: 'firstName3',
            lastName: 'lastName3',
            status: 'status3',
            location: {cityName: 'cityName3', countryName: 'countryName3'}
        },
    ];

    if (props.users.length === 0) {

       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
          props.setUsers(response.data.items)
       })
    }

    return <div>
        {props.users.map(u => {
            return (
                <div key={u.id} className={s.user}>
                    <div className={s.usersPhotoAndButton}>
                        <div><img src={u.photos.small!=null?u.photos.small:userPhotoDefault} className={s.usersPhoto}/></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.onUnfollow(u.id)}> Unfollow</button>
                                : <button onClick={() => props.onFollow(u.id)}> Follow</button>}

                        </div>

                    </div>
                    <div className={s.userInfo}>
                        <div className={s.fullName_status}>
                            <div className={s.fullName}>
                                {u.name} <br/>
                                {'u.lastName'}</div>
                            <div className={s.status}>{u.status}</div>

                        </div>
                        <div>
                            {'u.location.cityName'} <br/>
                            {'u.location.countryName'}
                        </div>
                    </div>
                </div>)
        })
        }
    </div>
}






