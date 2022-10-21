import img1 from './images/gallery_1.jpg';
import img2 from './images/gallery_2.jpg';
import img3 from './images/gallery_3.jpg';
import img4 from './images/gallery_4.jpg';
import img5 from './images/gallery_5.jpg';
import img6 from './images/gallery_6.jpg';
import img7 from './images/gallery_7.jpg';
import img8 from './images/gallery_8.jpg';
import img9 from './images/gallery_9.jpg';
import img10 from './images/gallery_10.jpg';

export default function loadGalleryPage() {
    const galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery-page');

    const galleryGrid = document.createElement('div');
    galleryGrid.classList.add('gallery-grid');

    galleryGrid.appendChild(addImageToGallery(img1));
    galleryGrid.appendChild(addImageToGallery(img2));
    galleryGrid.appendChild(addImageToGallery(img3));
    galleryGrid.appendChild(addImageToGallery(img4));
    galleryGrid.appendChild(addImageToGallery(img7));
    galleryGrid.appendChild(addImageToGallery(img8));
    galleryGrid.appendChild(addImageToGallery(img6));
    galleryGrid.appendChild(addImageToGallery(img10));
    galleryGrid.appendChild(addImageToGallery(img9));

    galleryDiv.appendChild(galleryGrid);


    return galleryDiv;
}

function addImageToGallery(sourcePath){
    const image = document.createElement('img');
    image.src = sourcePath;
    image.alt = 'gallery image';
    image.classList.add('gallery-image');

    return image;
}
