export default function loadHomePage(){
    const homePage = document.createElement('div');

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "Welcoem to NPP Burger House";
    pageTitle.classList.add('heading');
    homePage.appendChild(pageTitle);

    const subText = document.createElement('p');
    subText.textContent = "100% Fresh";
    pageTitle.appendChild(subText);

    const pageDetail = document.createElement('p');
    pageDetail.textContent = 'Visit the NPP Burger House in the heart of Mangal bazar near Krishna Mandir and experience "da best burger in the da Town". Our custom made burger is prepared with fresh ingredients daily. Not in the mood for a burger? Choose what you want to have from our menu. Why not give us a try when youre looking to either grab a quick bite, or hang around for "Burgers and Beers" with the guys... or ladies... of course!!!';
    pageDetail.classList.add('detail');
    homePage.appendChild(pageDetail);

    const mapLocation = document.createElement('iframe');
    mapLocation.src = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.6766269777637!2d85.32568609613541!3d27.673626978363703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c5a8aa00a9%3A0x48df69ebc853dbba!2sNPP%20Burger%20House!5e0!3m2!1sen!2snp!4v1666017631413!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    mapLocation.alt = 'NPP map';
    mapLocation.classList.add('map');
    homePage.appendChild(mapLocation);

    return homePage;
}

console.log('homepage');