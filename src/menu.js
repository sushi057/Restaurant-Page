console.log('menu page');

export default function loadMenuPage() {
    const menuPage = document.createElement('div');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'These are the variety of items we provide:';
    menuTitle.classList.add('menu-title');
    menuPage.appendChild(menuTitle);

    //Menu Grid
    const momoMenu = document.createElement('div');

    const momoImage = document.createElement('img');
    momoImage.src = '../src/images/momo.jpg';
    momoImage.alt = 'momo iamge';
    momoImage.classList.add('menu-img');
    momoMenu.appendChild(momoImage);

    //momo list
    momoItems = ['Chicken Momo', 'Buff Momo', 'Veg Momo', 'C. Momo'];
    const momoList = document.createElement('ul');

    for (item in momoItems){
        momoList.appendChild(createListItem(item));
    }

    momoMenu.appendChild(momoList);

    //Burger List
    const burgerMenu = document.createElement('div');

    const burgerImage = document.createElement('img');
    burgerImage.src = '../src/images/burger.jpg';
    burgerImage.alt = 'burger iamge';
    burgerImage.classList.add('menu-img');
    burgerMenu.appendChild(burgerImage);

    burgerItems = ['Chicken Burger', 'Grilled Burger', 'Veg Burger', 'Cheese Burger'];
    const burgerList = document.createElement('ul');

    for (item in burgerItems){
        burgerList.appendChild(createListItem(item));
    }

    burgerMenu.appendChild(burgerList);

    //Stick Food List
    const stickMenu = document.createElement('div');

    const stickImage = document.createElement('img');
    stickImage.src = '../src/images/sausage.jpg';
    stickImage.alt = 'sausage iamge';
    stickImage.classList.add('menu-img');
    stickMenu.appendChild(stickImage);

    stickItems = ['Chicken Sausage', 'Aaloo Stick', 'Buff Sausage', 'Veg Sausage'];
    const stickList = document.createElement('ul');

    for (item in stickItems){
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
    
    return listItem;
}


