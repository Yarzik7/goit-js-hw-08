import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')) || 0); // Встановлює попердньо збережений таймкод відтворення відео. Значення 0 секунд за замовчуванням

/**
 * Функція зберігає в локальне сховище поточний таймкод відтворення відео 
 * @param {event} Об'єкт події "timeupdate"
 */
const saveCurrentTime = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(saveCurrentTime, 1000)); // Обробник події оновлення часу відтворення відео. Викликає функцію для збереження таймкоду з затримкою в 1 секунду
