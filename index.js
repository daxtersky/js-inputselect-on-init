// Import stylesheets
import './style.css';

document.addEventListener('DOMContentLoaded', function() {
  console.log('domcontenttloaded')
})

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
const buttonBox = document.getElementById('button-box');

buttonBox.addEventListener('click', (e) => {
  console.log('click');
  const inputClick = document.getElementById('inputClick');
  inputClick.focus();
  inputClick.select();
})

setTimeout(() => {
  console.log('setTimeout')
  const inputSetTimeout = document.getElementById('inputSetTimeout');
  inputSetTimeout.focus();
  inputSetTimeout.select();
},500);