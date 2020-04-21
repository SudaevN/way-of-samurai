const ADD_POST = 'ADD-POST';
const REFRESH_POST_TEXT = 'REFRESH-POST-TEXT';

let initialState = {
    dart: [
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
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let text = state.newPostText;
            if (text !== '') {
                let date = new Date();
                let postDate = date.toLocaleDateString();
                let newPost = {
                    postId: state.dart.length + 1,
                    picUrl: "https://vignette.wikia.nocookie.net/starwars/images/2/2a/SkywalkerFlagship-TU.png/revision/latest?cb=20150409051518",
                    title: "Without title",
                    text: state.newPostText,
                    date: postDate
                };
                state.dart.push(newPost);
                state.newPostText = '';
            }
            return state;
        case REFRESH_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const refreshPostActionCreator = (newPostText) => ({type: REFRESH_POST_TEXT, text: newPostText});
export default profileReducer;