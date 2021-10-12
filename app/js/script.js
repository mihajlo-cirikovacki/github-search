// import "core-js/stable";
// import "regenerator-runtime/runtime";
// https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined
'use strict';

//const through2 = require("through2");

const btnBox = document.querySelector('.github-header__btn-box');
const form = document.querySelector('.github-search');


// const getUserData = async (userName) => {
//   try {
//     const res = await fetch(`https://api.github.com/users/${userName}`);
//     const data = await res.json();
//     console.log(data);
//   } catch(err) {
//     console.error(err);
//   };
// };


// form.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   const input = form.querySelector('.github-search__input');
//   const userName = input.value;

//   if(!userName) return; 

//   getUserData(userName);


//   input.value = '';
//   console.log(userName);
// });



// EVENT LISTENER:
btnBox.addEventListener('click', (e) => {
  document.documentElement.classList.toggle('dark-mode');

  const img = btnBox.querySelector('.github-header__toggle-img');
  const imgSrc = img.getAttribute('src');
  const imgMoon = '/assets/icon-moon.svg';
  const imgSun = '/assets/icon-sun.svg';
  const toggleBtn = btnBox.querySelector('.github-header__toggle');

  img.src = imgSrc === imgMoon ? imgSun : imgMoon;
  
  if(toggleBtn.textContent === 'Light') toggleBtn.textContent = 'Dark';
    else toggleBtn.textContent = 'Light';
});






















