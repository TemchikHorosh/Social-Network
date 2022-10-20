import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'it\'s my first post', likesCount: 11},
    {id: 2, message: 'Blabla', likesCount: 11},
    {id: 2, message: 'Dada', likesCount: 11},
]

let dialogs = [
    {id: 1, name: 'Artem'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Vlad'},
    {id: 4, name: 'Danil'},
    {id: 5, name: 'Ivan'},
    {id: 6, name: 'Sasha'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your IT?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
