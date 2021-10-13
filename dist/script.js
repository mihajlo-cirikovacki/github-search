"use strict";const btnBox=document.querySelector(".github-header__btn-box"),form=document.querySelector(".github-search"),img=document.querySelector(".github__img"),heading=document.querySelector(".github-profile__heading"),userName=document.querySelector(".github-profile__username"),date=document.querySelector(".github-profile__date--data"),description=document.querySelector(".github__description"),repos=document.querySelector(".github-info__repos-num"),followers=document.querySelector(".github-info__foll-num"),following=document.querySelector(".github-info__following-num"),state=document.querySelector(".github-info-2__state--data"),twitter=document.querySelector(".github-info-2__twitter--data"),blog=document.querySelector(".github-info-2__link--data"),city=document.querySelector(".github-info-2__city--data"),input=document.querySelector(".github-search__input"),local=navigator.language,optionsDate={month:"long",day:"2-digit",year:"numeric"},renderInfo=function(t){img.src=t.img,heading.textContent=t.fullName,userName.textContent=t.userName;const e=new Date(t.creatingDate),o=Intl.DateTimeFormat(local,optionsDate).format(e);date.textContent=o.replace(",",""),description.textContent=t.bio,description.textContent.includes("This profile has no bio")&&description.classList.add("github__description--no-bio"),repos.textContent=t.repos,followers.textContent=t.followers,following.textContent=t.following;const n=t.location.split(",");state.textContent=n[1],city.textContent=n[0],twitter.textContent=t.twitter,blog.textContent=t.blog;[state,city,twitter,blog].forEach((t=>{t.textContent.includes("Not Available")&&t.classList.add("github-info-2__link--data--not-available")}))},renderErrInput=function(t){t.value="No results",t.classList.add("error-input")},getUserData=async t=>{try{const e=await fetch("https://api.github.com/users/"+t),o=await e.json();if("Not Found"===o.message)throw new Error("User name don't exist! 💥💥💥");const n={img:o.avatar_url||"https://avatars.githubusercontent.com/u/583231?v=4",fullName:o.name,userName:o.login,creatingDate:o.created_at,bio:o.bio||"This profile has no bio",repos:o.public_repos||"N/A",followers:o.followers||"N/A",following:o.following||"N/A",location:o.location||"Not Available",twitter:o.twitter_username||"Not Available",blog:o.blog||"Not Available"};renderInfo(n)}catch(t){console.error(t.message),renderErrInput(input)}};form.addEventListener("submit",(t=>{t.preventDefault();const e=form.querySelector(".github-search__input"),o=e.value;o&&(getUserData(o.trim()),e.value="")})),btnBox.addEventListener("click",(t=>{document.documentElement.classList.toggle("dark-mode");const e=btnBox.querySelector(".github-header__toggle-img"),o=e.getAttribute("src"),n="/assets/icon-moon.svg",i=btnBox.querySelector(".github-header__toggle");e.src=o===n?"/assets/icon-sun.svg":n,"Light"===i.textContent?i.textContent="Dark":i.textContent="Light"})),input.addEventListener("click",(t=>{input.classList.remove("error-input"),input.value=""}));
//# sourceMappingURL=script.js.map