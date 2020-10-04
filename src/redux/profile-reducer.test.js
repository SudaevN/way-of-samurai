import React from "react";
import profileReducer, {addPost} from "./profile-reducer";


let state = {
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
    ]
};

it('Added post with testText appear in state', () => {
    // 1. test data
    let action = addPost("testPost");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].text).toBe("testPost");
});