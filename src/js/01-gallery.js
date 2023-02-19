import { galleryItems } from "./gallery-items.js";

// Change code below this line

const imageCardContainer = document.querySelector(".gallery");
const cardsMarcup = createImageCardMarkup(galleryItems);
imageCardContainer.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageCardMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`;
    })
    .join("");
}

const linkEl = document.querySelectorAll(".gallery__link")
createLightboxes(linkEl);

function createLightboxes(items) {
  items.forEach((item) => {
    let isOpen = false;
    
    const instance = basicLightbox.create(
        `<img width="1400" height="900" src="${item.href}">`
      );

    item.addEventListener('click', e => {
      e.preventDefault();

      instance.show();
      isOpen = true;
    });

    item.addEventListener('keydown', e => {
      e.preventDefault();
      if (e.code === "Escape" && isOpen) {
        console.log('Keydown Esc');
        
        instance.close();
        isOpen = false;
      }
    });
  });
}