// ; <!-- Шосте завдання 
    // ; Напишіть інтерфейс, щоб створити список.
    // ; Для кожного пункту:
    // ; Запитуйте вміст у користувача за допомогою prompt. Створюйте пункт і додайте його до UL.
    // ; Процес припиняється, коли користувач натискає ESC.
    // ; Усі елементи мають створюватися динамічно. -->

    // ;  <!-- <h1>Створення списку</h1> -->

const title = document.querySelector("h1");

const list = document.createElement("ul");

let message = prompt("Enter text");

while (message) {
    const item = document.createElement("li");
    item.textContent = message;
    list.appendChild(item); 
    message = prompt("Enter text");
}

title.after(list);
