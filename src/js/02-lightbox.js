import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageCardContainer = document.querySelector(".gallery");
const cardsMarcup = createImageCardMarkup(galleryItems);
imageCardContainer.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageCardMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionsData: 'alt'
 });
console.log(lightbox);
