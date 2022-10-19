import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadGalleryPage from "./gallery";
import loadContactPage from "./contact";
import './style.css';


const header = document.createElement('header');
const content = document.querySelector('#content');

//Nav bar
const navList = document.createElement('ul');
navList.classList.add('nav-list');

function createList(listName) {
    const listItem = document.createElement('li');
    listItem.textContent = listName;
    listItem.classList.add('list-item');
    listItem.classList.add(listName);

    return listItem;
}

navList.appendChild(createList('Home'));
navList.appendChild(createList('Menu'));
navList.appendChild(createList('Gallery'));
navList.appendChild(createList('Contact'));

header.appendChild(navList);
console.log('wtf is going on?');

//Tab Mechanism

// const homeTab = document.querySelector('')


//Home Page
content.appendChild(loadHomePage());

//Menu Page
content.appendChild(loadMenuPage());
// document.body.insertBefore(header, content);

//Gallery Page
content.appendChild(loadGalleryPage());

//Contact Page
content.appendChild(loadContactPage());


document.body.appendChild(header);
document.body.appendChild(content);