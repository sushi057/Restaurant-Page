const header = document.createElement('header');

const content = document.querySelector('#content');


//Left Section with logo
const logoSection = document.createElement('div');

const logoImage = document.createElement('img');
logoImage.src = "Restaurant Page/src/images/logo.jpg";
logoImage.alt = 'npp logo';
logoImage.classList.add('logo-img');
logoSection.appendChild(logoImage);

const logoText = document.createElement('h2');
logoText.textContent = 'NPP BURGER HOUSE';
logoText.classList.add('logo-text');
logoSection.appendChild(logoText);

