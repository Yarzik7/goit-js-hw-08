import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const KEY = 'feedback-form-state'; // Ключ для збереження даних в локальне сховище

loadingPage(); // Завантаження сторінки

/**
 * Функція при завантаженні сторінки перевіряє чи були збережені відповідні дані раніше. Якщо так то завантажує дані у відповідні поля
 * @returns {undefined || void}
 */
function loadingPage() {
  const savedData = localStorage.getItem(KEY); // Отримує збережені дані за ключем

  if (!savedData) return; // Якщо збережені дані відсутні припиняє виконання функції і залишає відповідні поля пустими

  try {
    const putData = JSON.parse(savedData); // Перетворює JSON рядок в об'єкт JS

    // Заповнення відповідних полей збереженими даними
    email.value = putData.email;
    message.value = putData.message;
  } catch (error) {
    console.log(`${error.name}: `, error.message); // Повідомлення про помилку в блоці try
  }
}

/**
 * Функція оновлює дані в локальному сховищі при введенні
 */
const onInputFormFields = () => {
  const newFormData = { email: email.value, message: message.value }; // Записує введені дані в об'єкт

  try {
    localStorage.setItem(KEY, JSON.stringify(newFormData)); // Зберігає дані у вигляді JSON
  } catch (error) {
    console.log(`${error.name}: `, error.message); // Повідомлення про помилку в блоці try
  }
};

/**
 *
 * @param {event} Об'єкт події "submit"
 */
const onSubmitForm = event => {
  event.preventDefault(); // Скасовує поведінку за замовчуванням

  try {
    const savedFormData = JSON.parse(localStorage.getItem(KEY)); // Отримує збережені дані за ключем

    console.log(savedFormData); // Виводить збережені дані у вигляді об'єкта
    localStorage.removeItem(KEY); // Видаляє збережені дані за ключем
    form.reset(); // Очищення полів форми
  } catch (error) {
    console.log(`${error.name}: `, error.message); // Повідомлення про помилку в блоці try
  }
};

form.addEventListener('input', throttle(onInputFormFields, 500)); // Оновлення локального сховища раз на 0.5 секунди
form.addEventListener('submit', onSubmitForm);
