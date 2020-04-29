const SET_USERS = 'SET_USERS';
const FRIEND_STATUS_CHANGE = 'FRIEND_STATUS_CHANGE';
// const SHOW_MORE = 'SHOW_MORE';

let initialState = {
    users: []
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
        // case SHOW_MORE:
        //     return {
        //         ...state,
        //         quantityToShow: state.quantityToShow + 4
        //     };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const changeFriendStatusActionCreator = (userId) => ({type: FRIEND_STATUS_CHANGE, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export default usersReduser;