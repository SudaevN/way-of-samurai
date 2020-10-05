import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersData.users
};

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
});

export const getTotalUsersCount = (state) => {
    return state.usersData.totalUsersCount;
};

export const getPageSize = (state) => {
    return state.usersData.pageSize
};

export const getPortionSize = (state) => {
    return state.usersData.portionSize
};

export const getCurrentPage = (state) => {
    return state.usersData.currentPage;
};

export const getFetchingStatus = (state) => {
    return state.usersData.isFetching;
};

export const getFollowingStatus = (state) => {
    return state.usersData.followingInProgress;
};