import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function onElementsCreate(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
 </a></li>`;
    })
    .join("");
}

const galleryElements = onElementsCreate(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryElements);

let lightbox = new SimpleLightbox(".gallery a", {
  sourceAttr: "href",
  captionsData: "alt",
  captionDelay: 250,
});
