import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const gallery = (image) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItems.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`;
};

const galleryElement = galleryItems.map(gallery).join("");
galleryList.insertAdjacentHTML("beforeend", galleryElement);

galleryList.addEventListener("click", onModalOpen);

function onModalOpen(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const imgLink = document.querySelector(".gallery__link");
  imgLink.href = event.target.dataset.source;

  const modalInstance = basicLightbox.create(`<div class="modal">
        <img class="modal__image" src="${imgLink.href}" height="650"/>
    </div>`);

  modalInstance.show();

  window.addEventListener("keydown", onModalClose);

  function onModalClose(event) {
    if (event.key === "Escape") {
      modalInstance.close();
      window.removeEventListener("keydown", onModalClose);
    }
  }
}
