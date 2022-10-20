export default function loadGalleryPage() {
    const galleryDiv = document.createElement('div');
  
    const galleryTitle = document.createElement('h1');
    galleryTitle.textContent = "Gallery";
    galleryTitle.classList.add('gallery-title');
    galleryDiv.appendChild(galleryTitle);

    const galleryGrid = document.createElement('div');
    galleryGrid.classList.add('gallery-grid');


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
