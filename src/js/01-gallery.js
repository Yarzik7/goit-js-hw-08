// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from "simplelightbox";

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");
const galleryNodes = []; // Масив для зберігання окремих вузлів "li"

/**
 * Функція створює розмітку елементів галереї
 * @param {{ original, description, preview }} Деструктуризація об'єкту параметрів galleryItems
 * @returns {void}
 */
const createItem = ({ original, description, preview }) => {
  const galleryItem = document.createElement("li"); // Створення окремого елемента "li"
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__item");
  galleryLink.href = original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = preview;
  galleryImage.alt = description;

  galleryLink.append(galleryImage);
  galleryItem.append(galleryLink);

  galleryNodes.push(galleryItem);
};

galleryItems.forEach((item) => createItem(item)); // Перебір даних з об'єкту galleryItems і створення елементу галереї
galleryEl.append(...galleryNodes); // Додає готові вузли розмітки в контейнер галереї
// Change code below this line

console.log(galleryItems);
