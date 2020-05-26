import React from 'react';
import s from './../Users.module.css';
import * as axios from 'axios';
import userPhotoDefault from '../../images/userPhoto.jpg'

export class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCount}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserscount(response.data.totalCount)
        })
    }

    setUsersCurrentPage = (pageNumber) => {
        this.props.onChangePage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersCount}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalCount/this.props.usersCount);

        let pages = [];

        for (let i = this.props.currentPage; i <= this.props.currentPage+10; i++) {
            pages.push( i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={`${this.props.currentPage === p && s.pageNumberActive} ${s.pageNumbers}`}
                                 key={p}
                    onClick={() => {this.setUsersCurrentPage(p)}}>{p}</span>
                })}
            </div>
            {this.props.users.map(u => {
                return (
                    <div key={u.id} className={s.user}>
                        <div className={s.usersPhotoAndButton}>
                            <div><img src={u.photos.small != null
                                ? u.photos.small : userPhotoDefault}
                                      className={s.usersPhoto}/></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.onUnfollow(u.id)}> Unfollow</button>
                                    : <button onClick={() => this.props.onFollow(u.id)}> Follow</button>}

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

}

const OldUsers = (props) => {


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
                        <div><img src={u.photos.small != null ? u.photos.small : userPhotoDefault}
                                  className={s.usersPhoto}/></div>
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






