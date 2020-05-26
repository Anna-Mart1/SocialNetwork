import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setTotalUserscountAC, setUsersAC, unfollowAC, updatePageNumberAC} from '../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        usersCount: state.usersPage.usersCount,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => dispatch(followAC(userId)),
        onUnfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        onChangePage: (pageNumber) => dispatch(updatePageNumberAC(pageNumber)),
        setTotalUserscount: (count) => dispatch(setTotalUserscountAC(count))
    }
};


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


