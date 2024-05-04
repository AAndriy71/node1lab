const fs = require('fs');

function appendToFile(fileName, text) {
    fs.appendFile(fileName, text, (err) => {
        if (err) {
            console.error("Сталася помилка під час додавання рядка до файлу:", err);
            return;
        }
        console.log("Рядок успішно додано до файлу.");
    });
}

const fileName = 'task02.txt'; // Назва файлу
const textToAppend = 'Доданий рядок\n'; // Рядок, який додаємо до файлу

appendToFile(fileName, textToAppend);
