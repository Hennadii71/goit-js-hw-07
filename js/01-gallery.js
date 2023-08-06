import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', getModal);


const markup = galleryItems.map(({ preview, original, description }) => { 
 return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`}).join('');

galleryContainer.insertAdjacentHTML('beforeend', markup);

const instance = basicLightbox.create(
    `
  <img width="1280" height="auto" src="">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  
  function getModal(event) {
    event.preventDefault();
    const datasetSource = event.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
  }
  
  function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
  }



  


console.log(basicLightbox);
console.log(galleryItems);
