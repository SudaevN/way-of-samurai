const SET_USERS = 'SET_USERS';
const FRIEND_STATUS_CHANGE = 'FRIEND_STATUS_CHANGE';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCING';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, totalUsersCount: action.usersCount};
        case SET_USERS:
            return {...state, users: action.users};
        case SET_PAGE:
            return {...state, currentPage: action.currentPage};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
};

export const changeFriendStatus = (userId) => ({type: FRIEND_STATUS_CHANGE, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const setCurrentPage = (currentPage) => ({type: SET_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export default usersReduser;