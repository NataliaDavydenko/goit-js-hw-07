import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function onElementsCreate(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
 </a>`;
    })
    .join("");
}

const galleryElements = onElementsCreate(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryElements);

galleryList.addEventListener("click", openImgEl);

function openImgEl(event) {
  event.preventDefault();
}

let lightbox = new SimpleLightbox(".gallery a", {
  sourceAttr: "href",
  captionsData: "alt",
  captionDelay: 250,
});
