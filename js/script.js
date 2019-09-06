const navBar = document.createElement('nav');
const navLinks= document.createElement('div');
const logo = document.createElement('img');
const links = ['hire', 'sell', 'teams', 'boards', 'join us' ];
const main = document.querySelector('.main');

logo.setAttribute('src', '../assets/logo.png');
navBar.style.backgroundColor = 'white';
navBar.classList.add('navbar');
logo.classList.add('navImg');
navLinks.classList.add('links');

links.forEach(link => {
    const add = document.createElement('a');
    add.innerText = link.toUpperCase();
    add.setAttribute('href', `./${link}.html`);

    navLinks.appendChild(add);
})

navBar.appendChild(logo);
navBar.appendChild(navLinks);

main.appendChild(navBar);