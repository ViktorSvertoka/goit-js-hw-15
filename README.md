# Домашня робота Тема 15. Події

## Критерії приймання

- Створено репозиторій `goit-js-hw-15`.
- Домашня робота містить два посилання: на вихідні файли і робочу сторінку на
  `GitHub Pages`.
- Завдання виконані у точній відповідності до ТЗ (забороняється змінювати
  вихідний HTML завдання).
- В консолі відсутні помилки і попередження під час відкриття живої сторінки
  завдання.
- Імена змінних і функцій - зрозумілі та описові.
- Код відформатований за допомогою `Prettier`.

## Стартові файли

У [папці src](./src) знайдеш стартові файли з готовою розміткою і підключеними
файлами скриптів для кожного завдання. Скопіюй їх собі у проект. Для цього
завантаж цей репозиторій як архів або використовуй
[сервіс DownGit](https://downgit.github.io/) для завантаження окремої папки з
репозиторія.

## Завдання 1

Напиши скрипт, який під час втрати фокусу на інпуті (подія `blur`), перевіряє
його вміст щодо правильної кількості введених символів.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

- Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті
  `data-length`.
- Якщо введена правильна кількість символів, то `border` інпуту стає зеленим,
  якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи `valid` і `invalid`, які ми вже
додали у вихідні файли завдання.

```css
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

## Завдання 2

Напиши скрипт, який реагує на зміну значення `input#font-size-control` (подія
`input`) і змінює інлайн-стиль `span#text`, оновлюючи властивість `font-size`. В
результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

## Завдання 3

Напиши скрипт управління формою логіна.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

1. Обробка відправлення форми `form.login-form` повинна відбуватися відповідно
   до події `submit`.
2. Під час відправлення форми сторінка не повинна перезавантажуватися.
3. Якщо у формі є незаповнені поля, виводь `alert` з попередженням про те, що
   всі поля повинні бути заповнені.
4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в
   об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням
   властивості. Для доступу до елементів форми використовуй властивість
   `elements`.
5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми
   методом `reset`.

## Завдання 4

Напиши скрипт, який змінює кольори фону елемента `<body>` через інлайн-стиль по
кліку на `button.change-color` і виводить значення кольору в `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Для генерування випадкового кольору використовуй функцію `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Завдання 5

Напиши скрипт створення і очищення колекції елементів. Користувач вводить
кількість елементів в `input` і натискає кнопку `Створити`, після чого
рендериться колекція. Натисненням на кнопку `Очистити`, колекція елементів
очищається.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Створи функцію `createBoxes(amount)`, яка приймає один параметр - число. Функція
створює стільки `<div>`, скільки вказано в `amount` і додає їх у `div#boxes`.

1. Розміри найпершого `<div>` - 30px на 30px.
2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на
   10px.
3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй
   готову функцію `getRandomHexColor` для отримання кольору.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

Створи функцію `destroyBoxes()`, яка очищає вміст `div#boxes`, у такий спосіб
видаляючи всі створені елементи.
