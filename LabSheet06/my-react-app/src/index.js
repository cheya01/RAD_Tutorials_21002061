import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './toDo';
import CardList from './cardList';
import Form from './form';
import reportWebVitals from './reportWebVitals';

const sampleArray = [
  'Learn React',
  'Build a project',
  'Go for a walk',
  'Do some exercises',
  'Join a music class',
  'Read a novel'
];
const sampleArray2 = [
  { title: 'Card 1', content: 'This is the content of Card 1' },
  { title: 'Card 2', content: 'This is the content of Card 2' },
  { title: 'Card 3', content: 'This is the content of Card 3' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList todoList={sampleArray}/>
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList cardList={sampleArray2}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
