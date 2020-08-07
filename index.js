// Import stylesheets
import './style.css';

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

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select