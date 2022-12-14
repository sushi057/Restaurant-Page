console.log('contact page');

export default function loadContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-page');

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Info';
    contactDiv.appendChild(contactTitle);

    const address = document.createElement('p');
    address.textContent = "  Lalitpur, Patan Mangal Bazar 44700 Patan, Nepal"
    contactDiv.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = '984-9483013';
    contactDiv.appendChild(phone);

    const mail = document.createElement('p');
    mail.textContent = ' nppburgerhouse2018@gmail.com';
    contactDiv.appendChild(mail);

    const links = document.createElement('div');
    links.classList.add('links');

    const facebook = document.createElement('a');
    facebook.textContent = "F";
    facebook.href = 'facebook.com';
    contactDiv.appendChild(facebook);

    const instagram = document.createElement('a');
    instagram.textContent = "I";
    instagram.href = 'instagram.com';
    contactDiv.appendChild(instagram);

    const twitter = document.createElement('a');
    twitter.textContent = "T";
    twitter.href = 'twitter.com';
    contactDiv.appendChild(twitter);

    links.appendChild(facebook);
    links.appendChild(instagram);
    links.appendChild(twitter);

    contactDiv.appendChild(links);

    return contactDiv;
}