const navBar = document.createElement('nav');
const navLinks= document.createElement('div');
const logo = document.createElement('img');
const links = ['freelancers', 'projects', 'collaborate', 'boards', 'escrow' ];
const main = document.querySelector('.main');
const signin = document.createElement('button');
const searchDiv = document.createElement('div');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
const searchIcon = document.createElement('i');

logo.setAttribute('src', '../assets/logo.png');
navBar.classList.add('navbar');
logo.classList.add('navImg');
navLinks.classList.add('links');
signin.classList.add('signbutton');
searchDiv.classList.add('search');
searchInput.classList.add('searchTerm');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'search..........');
searchButton.setAttribute('type', 'submit');
searchIcon.classList.add('fa', 'fa-search');
searchButton.classList.add('searchButton');

links.forEach(link => {
    const add = document.createElement('a');
    add.innerText = link.toUpperCase();
    add.setAttribute('href', `./${link}.html`);

    navLinks.appendChild(add);
})

searchButton.appendChild(searchIcon);
searchDiv.appendChild(searchButton);
searchDiv.appendChild(searchInput);

signin.innerText = 'Get Started';
navBar.appendChild(logo);
navBar.appendChild(searchDiv);
navBar.appendChild(navLinks);
navLinks.appendChild(signin);

main.appendChild(navBar);