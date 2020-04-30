const SET_USERS = 'SET_USERS';
const FRIEND_STATUS_CHANGE = 'FRIEND_STATUS_CHANGE';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FRIEND_STATUS_CHANGE:
            return {
                ...state,
                users: state.users.map(arr => {
                    if (arr.id === action.userId) {
                        return {...arr, followed: !(arr.followed)}
                    }
                    return arr;
                })
            };
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}
        case SET_USERS:
            return {...state, users: action.users};
        case SET_PAGE:
            return {...state, currentPage: action.currentPage};
        default:
            return state;
    }
};

export const changeFriendStatusActionCreator = (userId) => ({type: FRIEND_STATUS_CHANGE, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setTotalUsersActionCreator = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_PAGE, currentPage})
export default usersReduser;