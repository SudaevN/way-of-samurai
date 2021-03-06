import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCING';

let initialState = {
    posts: [
        {
            postId: "1",
            picUrl: "https://i2.wp.com/www.small-screen.co.uk/wp-content/uploads/2019/11/anakin-skywalker.jpg",
            title: "remembered youth",
            text: "I cleaned my droid yesterday and found this photo. Pretty boy...",
            date: "05.03.2020"
        },
        {
            postId: "2",
            picUrl: "https://img3.badfon.ru/wallpaper/big/3/e4/darth-vader-star-wars-laser.jpg",
            title: "Who am I?",
            text: "Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led the Empire’s eradication of the Jedi Order. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the fledgling Rebel Alliance. But there was still good in him…",
            date: "06.03.2020"
        }
    ],
    profile: null,
    status: '',
    isFetching: false
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let text = action.newPostText;
            if (text !== '') {
                let date = new Date();
                let postDate = date.toLocaleDateString();
                let newPost = {
                    postId: state.posts.length + 1,
                    picUrl: "https://vignette.wikia.nocookie.net/starwars/images/2/2a/SkywalkerFlagship-TU.png/revision/latest?cb=20150409051518",
                    title: "Without title",
                    text: text,
                    date: postDate
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost]
                }
            }
            break;
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getProfile = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const response = await profileAPI.getProfile(userId);
        dispatch(toggleIsFetching(false));
        dispatch(setUserProfile(response.data));
    }
};

export const getStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
};

export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
};


export default profileReducer;