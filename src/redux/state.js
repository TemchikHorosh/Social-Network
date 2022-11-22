import {rerenderEntireTree} from '../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'it\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your IT?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Vlad'},
            {id: 4, name: 'Danil'},
            {id: 5, name: 'Ivan'},
            {id: 6, name: 'Sasha'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Vlad'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Sasha'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;