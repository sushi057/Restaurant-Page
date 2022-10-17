const header = document.createElement('header');

const content = document.querySelector('#content');

//Left Section with logo
const logoSection = document.createElement('div');

const logoImage = document.createElement('img');
logoImage.src = '../src/images/logo.jpg';
logoImage.alt = 'npp logo';
logoImage.classList.add('logo-img');
logoSection.appendChild(logoImage);

const logoText = document.createElement('h2');
logoText.textContent = 'NPP BURGER HOUSE';
logoText.classList.add('logo-text');
logoSection.appendChild(logoText);

header.appendChild(logoSection);

//Nav bar
const navList = document.createElement('ul');
navList.classList.add('nav-list');

function createList(listName) {
    const listItem = document.createElement('li');
    listItem.textContent = listName;
    listItem.classList.add('list-item');

    return listItem;
}

navList.appendChild(createList('Home'));
navList.appendChild(createList('Menu'));
navList.appendChild(createList('Gallery'));
navList.appendChild(createList('Contact'));

header.appendChild(navList);


document.body.appendChild(header);

console.log('wtf is ogin gon');