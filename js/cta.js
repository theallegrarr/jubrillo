const ctaContainer = document.createElement('div');
const ctaTextArea = document.createElement('div');
const ctaHead = document.createElement('h1');
const ctaWrite = document.createElement('p');
const ctaImage = document.createElement('img');
const buttonsArea = document.createElement('div');
const faqButton = document.createElement('button');
const gsButton = document.createElement('button');

ctaContainer.classList.add('cta-container');
ctaTextArea.classList.add('cta-text');
ctaImage.setAttribute('src', './assets/cta_main.png');
ctaHead.innerText = 'The future of online work is decentralized';
ctaWrite.innerText = 'Join the blockchain phase of freelancing online, jubrillo is designed to guarantee a fast, secure, and affordable means of transacting for employers and freelancers.'
buttonsArea.classList.add('cta-buttons');
gsButton.classList.add('gs-button');
faqButton.classList.add('faq-button');

gsButton.innerText = 'SIGN UP!';
faqButton.innerText = 'FAQ';

ctaTextArea.appendChild(ctaHead);
ctaTextArea.appendChild(ctaWrite);
buttonsArea.appendChild(faqButton);
buttonsArea.appendChild(gsButton);
ctaTextArea.appendChild(buttonsArea);

ctaContainer.appendChild(ctaTextArea);
ctaContainer.appendChild(ctaImage);

main.appendChild(ctaContainer);