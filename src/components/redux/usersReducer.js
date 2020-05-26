const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const UPDATE_PAGE_NUMBER = 'UPDATE_PAGE_NUMBER';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [/*
        {id: 1,
        photoUrl:'https://im0-tub-ru.yandex.net/i?id=8b01ebe2d1dc6e4d84b91a6d45423273&n=13',
        follow: true,
        firstName: 'firstName1',
        lastName: 'lastName1',
        status: 'status1',
        location: {cityName:'cityName1', countryName: 'countryName1'}
        },

        {id: 2,
        photoUrl:'https://im0-tub-ru.yandex.net/i?id=8b01ebe2d1dc6e4d84b91a6d45423273&n=13',
        follow: false,
        firstName: 'firstName2',
        lastName: 'lastName2',
        status: 'status2',
        location: {cityName:'cityName2', countryName: 'countryName2'}
        },

        {id: 3,
        photoUrl:'https://im0-tub-ru.yandex.net/i?id=8b01ebe2d1dc6e4d84b91a6d45423273&n=13',
        follow: true,
        firstName: 'firstName3',
        lastName: 'lastName3',
        status: 'status3',
        location: {cityName:'cityName3', countryName: 'countryName3'}
        },*/
    ],
    currentPage: 1,
    totalCount: 0,
    usersCount: 4,

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users:state.users.map ( u => {
                    if (u.id === action.userId)
                        return { ...u, follow: true};
                        return u;
                })
                };

        case UNFOLLOW:
            return {
                ...state, users:state.users.map ( u => {
                    if (u.id === action.userId)
                        return { ...u, follow: false};
                    return u;
                })
            };

        case SET_USERS:
            return {...state, users: action.users

            };
        case UPDATE_PAGE_NUMBER:
            return {...state, currentPage: action.pageNumber

            };
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.count

            };




        default:
            return state;
    }
};


export const followAC = (userId) => {
    return {type: FOLLOW, userId}
};
export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
};
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
};

export const updatePageNumberAC = (pageNumber) => {
    return { type: UPDATE_PAGE_NUMBER, pageNumber}
};

export const setTotalUserscountAC = (count) => {
    return { type: SET_TOTAL_USERS_COUNT, count

    }
}

export default usersReducer;