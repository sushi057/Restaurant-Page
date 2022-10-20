console.log('menu page');
import Momo from './images/momo.jpg';
import Burger from './images/burger.jpg';
import Stick from './images/stick.jpg';


export default function loadMenuPage() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'These are the variety of items we provide:';
    menuTitle.classList.add('menu-title');
    menuPage.appendChild(menuTitle);

    //Menu Grid
    const momoMenu = document.createElement('div');
    momoMenu.classList.add('momo-menu');

    const momoImage = new Image();
    momoImage.src = Momo;
    momoImage.alt = 'momo';
    momoImage.classList.add('menu-img');
    momoMenu.appendChild(momoImage);

    //momo list
    const momoItems = ['Chicken Momo', 'Buff Momo', 'Veg Momo', 'C. Momo'];
    const momoList = document.createElement('ul');

    for (const item of momoItems){
        momoList.appendChild(createListItem(item));
    }

    momoMenu.appendChild(momoList);

    //Burger List
    const burgerMenu = document.createElement('div');
    burgerMenu.classList.add('burger-menu');

    const burgerImage = new Image();
    burgerImage.src = Burger;
    burgerImage.alt = 'burger iamge';
    burgerImage.classList.add('menu-img');
    burgerMenu.appendChild(burgerImage);

    const burgerItems = ['Chicken Burger', 'Grilled Burger', 'Veg Burger', 'Cheese Burger'];
    const burgerList = document.createElement('ul');

    for (const item of burgerItems){
        burgerList.appendChild(createListItem(item));
    }

    burgerMenu.appendChild(burgerList);

    //Stick Food List
    const stickMenu = document.createElement('div');
    stickMenu.classList.add('stick-menu');

    const stickImage = new Image();
    stickImage.src = Stick;
    stickImage.alt = 'sausage iamge';
    stickImage.classList.add('menu-img');
    stickMenu.appendChild(stickImage);

    const stickItems = ['Chicken Sausage', 'Aaloo Stick', 'Buff Sausage', 'Veg Sausage'];
    const stickList = document.createElement('ul');

    for (const item of stickItems){
        stickList.appendChild(createListItem(item));
    }

    stickMenu.appendChild(stickList);


    //Append Menu Items
    menuPage.appendChild(burgerMenu);
    menuPage.appendChild(momoMenu);
    menuPage.appendChild(stickMenu);

    return menuPage;
 
}

function createListItem(name){
    const listItem = document.createElement('li');
    listItem.textContent = name;
    listItem.classList.add('menu-items');
    
    return listItem;
}


