import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadGalleryPage from "./gallery";
import loadContactPage from "./contact";
import './style.css';


const header = document.createElement('header');
const content = document.createElement('content');
content.classList.add('content');



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
document.body.appendChild(header);
console.log('wtfs is going on man?');


//Tab Mechanism
const homeTab = document.querySelector('.Home');
homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadHomePage());
});

const menuTab = document.querySelector('.Menu');
menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadMenuPage());
})

const galleryTab = document.querySelector('.Gallery');
galleryTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadGalleryPage());
})

const contactTab = document.querySelector('.Contact');
contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadContactPage());
})


document.body.appendChild(content);