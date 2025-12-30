// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const inputEl = document.getElementById("input");
console.log(inputEl);
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", () => {
    btnEl.textContent = input.value;
})
console.log(btnEl);

// ================================================================================================

// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const imgEl = document.querySelector(".img");
imgEl.src = "https://artside.com.ua/tmp/cache/images/40/d89/747646759-630x398-r.jpg"
console.log(imgEl);

// =================================================================================================

// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const linkEl = document.querySelector(".tg");
linkEl.href = "https://www.instagram.com/";
console.log(linkEl);
const fotoEl = document.querySelector(".foto");
fotoEl.alt = "New foto";
console.log(fotoEl);

// =================================================================================================

// Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const listEl = document.querySelector(".list");
const childEl = listEl.firstElementChild;
childEl.textContent = "new text1"
console.log(childEl);