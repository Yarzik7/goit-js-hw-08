import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe); // Ініціалізація плеєра
const KEY = 'videoplayer-current-time';

player.setCurrentTime(Number(localStorage.getItem(KEY)) || 0); // Встановлює попердньо збережений таймкод відтворення відео. Значення 0 секунд за замовчуванням

/**
 * Функція зберігає в локальне сховище поточний таймкод відтворення відео 
 * @param {event} Об'єкт події "timeupdate"
 */
const saveCurrentTime = event => {
  localStorage.setItem(KEY, event.seconds); // Зберігає значення таймкоду в секундах в локальне сховище
};

player.on('timeupdate', throttle(saveCurrentTime, 1000)); // Обробник події оновлення часу відтворення відео. Викликає функцію для збереження таймкоду раз на 1 секунду
