import {reranderEntireTree} from "../render";

let state = {
    postsData: [
        {postId:"001", picUrl:"https://img3.badfon.ru/wallpaper/big/3/e4/darth-vader-star-wars-laser.jpg", title:"Who am I?", text:"Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led the Empire’s eradication of the Jedi Order. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the fledgling Rebel Alliance. But there was still good in him…", date:"06.03.2020"},
        {postId:"002", picUrl:"https://i2.wp.com/www.small-screen.co.uk/wp-content/uploads/2019/11/anakin-skywalker.jpg?fit=1050%2C450&ssl=1https://i2.wp.com/www.small-screen.co.uk/wp-content/uploads/2019/11/anakin-skywalker.jpg?fit=1050%2C450&ssl=1", title:"remembered youth", text:"I cleaned my droid yesterday and found this photo. Pretty boy...", date:"05.03.2020"}
    ],
    contactsData: [
        {id:6, name:"Luke Skywalker", status:"my son. however fighting against me", picUrl:"data:image/jpeg;base64,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"},
        {id:5, name:"DARTH SIDIOUS (EMPEROR PALPATINE)", status:"Because of him, I became who I am.", picUrl:"https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1sxioat_e7a611ad.jpeg"},
        {id:4, name:"Padmé Amidala", status:"she betrayed me and brought Obivan to kill me", picUrl:"https://lumiere-a.akamaihd.net/v1/images/image_8e7dccb7.jpeg"},
        {id:3, name:"Yoda", status:"he thinks the smartest. Well, let's see ...", picUrl:"https://www.liveabout.com/thmb/bvFJJVBtWIHqZvYGHCJjRiRs4pE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yoda-56a8f97a3df78cf772a263b4.jpg"},
        {id:2, name:"Obi-Wan Kenobi", status:"He was my teacher", picUrl:"https://www.liveabout.com/thmb/e7xfNfn3-pkH28FJvf7WJef6TFA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg"},
        {id:1, name:"Sebulba", status:"he thought he was faster than me. Ha-ha-ha!", picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3KwLsVDVGQQIEOTcGhVrDhXLXtRoBr6c2jNJtJSiVp2Fy4YBu&usqp=CAU"}
    ],
    chatsData: [
        {chatId:1, picUrl:"https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1sxioat_e7a611ad.jpeg", message:"GO CS?! I created ))"},
        {chatId:2, picUrl:"data:image/jpeg;base64,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", message:"NO!!!"},
        {chatId:3, picUrl:"https://lumiere-a.akamaihd.net/v1/images/image_8e7dccb7.jpeg", message:"it's not my fault! Obi-Wan himself came on the bord"},
        {chatId:4, picUrl:"https://www.liveabout.com/thmb/bvFJJVBtWIHqZvYGHCJjRiRs4pE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yoda-56a8f97a3df78cf772a263b4.jpg", message:"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering."},
        {chatId:5, picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3KwLsVDVGQQIEOTcGhVrDhXLXtRoBr6c2jNJtJSiVp2Fy4YBu&usqp=CAU", message:"You won't walk away from this one, Skywalker. You slave scum."}
    ],
    dialogsData: {
        luke: [
            {id:1, right: true, authorAva:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2jv29amhL_Fikcw4cIv1QB9FRcDOiO2DsU8q2t1Z1wCBYMFWK&usqp=CAU", message: "Luke, I'm your father."},
            {id:2, right: false, authorAva: "data:image/jpeg;base64,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", message: "NO!!!"},
            {id:3, right: false, authorAva: "data:image/jpeg;base64,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", message: "It's impossible!!!"}
        ]
    }
};

export let addMessage = (message) => {
    if (message != '') {
        let newMessage = {
            id: 4,
            right: true,
            authorAva: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2jv29amhL_Fikcw4cIv1QB9FRcDOiO2DsU8q2t1Z1wCBYMFWK&usqp=CAU",
            message: message
        };
        state.dialogsData.luke.push(newMessage);
        reranderEntireTree(state);
    }
};

export default state;