'use strict';

(function() {
  const btnBox = document.querySelector('.github-header__btn-box');
  const form = document.querySelector('.github-search');

  const img = document.querySelector('.github__img');
  const heading = document.querySelector('.github-profile__heading');
  const userName = document.querySelector('.github-profile__username');
  const date = document.querySelector('.github-profile__date--data');
  const description = document.querySelector('.github__description');
  const repos = document.querySelector('.github-info__repos-num');
  const followers = document.querySelector('.github-info__foll-num');
  const following = document.querySelector('.github-info__following-num');
  const state = document.querySelector('.github-info-2__state--data');
  const twitter = document.querySelector('.github-info-2__twitter--data');
  const blog = document.querySelector('.github-info-2__link--data');
  const city = document.querySelector('.github-info-2__city--data');

  const input = document.querySelector('.github-search__input');

  // Date:
  const local = navigator.language; 
  const optionsDate = {
    month: 'long',
    day:'2-digit',
    year: 'numeric'
  }

  // === RENDER:
  const renderInfo = function(data) {
    img.src = data.img,
    heading.textContent = data.fullName;
    userName.textContent = data.userName;
    
    // Convert Date:
    const newDate = new Date(data.creatingDate);
    const displayDate = Intl.DateTimeFormat(local, optionsDate).format(newDate);
    date.textContent = displayDate.replace(',', ''); 

    description.textContent = data.bio;
    // Check for description:
    if(description.textContent.includes('This profile has no bio')) description.classList.add('github__description--no-bio');
    
    repos.textContent = data.repos;
    followers.textContent = data.followers;
    following.textContent = data.following;
    // Separate State and City:
    const location = data.location.split(',');
    state.textContent = location[1] || 'Not Available';
    city.textContent = location[0] || 'Not Available';

    twitter.textContent = data.twitter;
    blog.textContent = data.blog;

    // Check if inputs have 'Not Available':
    const arrayInf = [state, city, twitter, blog];
    arrayInf.forEach((e) => {
      if (e.textContent.includes('Not Available')) e.classList.add('github-info-2__link--data--not-available');
    });
  };

  const renderErrInput = function(input) {
    input.value = 'No results';
    input.classList.add('error-input');
  }

  // GET USER DATA:
  const getUserData = async (userName) => {
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();

      if(data.message === 'Not Found') throw new Error('User name don\'t exist! 💥💥💥');

      const dataForRend = {
        img: data.avatar_url || "https://avatars.githubusercontent.com/u/583231?v=4",
        fullName: data.name,
        userName: data.login,
        creatingDate: data.created_at,
        bio: data.bio || 'This profile has no bio',
        repos: data.public_repos || 'N/A',
        followers: data.followers || 'N/A',
        following: data.following || 'N/A',
        location: data.location || 'Not Available', 
        twitter: data.twitter_username || 'Not Available',
        blog: data.blog || 'Not Available',
      }

      renderInfo(dataForRend);
      
    } catch(err) {
      console.error(err.message);
      renderErrInput(input);
    };
  };

  // === EVENT LISTENERS:
  // FORM:
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = form.querySelector('.github-search__input');
    const userName = input.value;

    if(!userName) return; 

    getUserData(userName.trim());
    input.value = '';
  });

  // Toglle Dark/Light Mode:
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

  // Reset input on click:
  input.addEventListener('click', (e) => {
    input.classList.remove('error-input');
    input.value = '';
  });
})();
















