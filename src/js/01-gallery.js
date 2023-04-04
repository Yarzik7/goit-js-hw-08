import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox'; // Підключення SimpleLightbox встановленої через npm
import 'simplelightbox/dist/simple-lightbox.min.css'; // Імпорт стилів для SimpleLightbox

const galleryEl = document.querySelector('.gallery');
const galleryNodes = []; // Масив для зберігання окремих вузлів "li"
console.log('test');
/**
 * Функція створює розмітку елементів галереї
 * @param {{ original, description, preview }} Деструктуризація об'єкту параметрів galleryItems
 * @returns {void}
 */
const createItem = ({ original, description, preview }) => {
  const galleryItem = document.createElement('div'); // Створення окремого елемента "div"
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__item');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.alt = description;

  galleryLink.append(galleryImage);
  galleryItem.append(galleryLink);

  galleryNodes.push(galleryItem);
};

galleryItems.forEach(item => createItem(item)); // Перебір даних з об'єкту galleryItems і створення елементу галереї
galleryEl.append(...galleryNodes); // Додає готові вузли розмітки в контейнер галереї

// Створення і рендер модального вікна за допомогою бібліотеки SimpleLightbox
new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Додає підпис зображення з текстом атрибуту "alt"
  captionDelay: 250, // Затримка показу підпису зображення
});
