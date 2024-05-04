const express = require("express");
const app = express();
const fs = require("fs");

// Зчитування даних про міста з JSON-файлу
const citiesData = JSON.parse(fs.readFileSync("cities.json"));

// Маршрут для головної сторінки з меню міст
app.get('/', (req, res) => {
    // Формуємо список міст для меню
    const cityLinks = citiesData.map(city => `<li><a href="/weather/${city.name}">${city.name}</a></li>`).join('');

    // Відправляємо відповідь з html-шаблоном та меню міст
    res.send(`
        <h1>Ласкавимо просимо!</h1>
        <h1>Тут можна побачити яка погода у місці</h1>
        <ul>${cityLinks}</ul>
    `);
});

// Маршрут для отримання даних про погоду за містом
app.get('/weather/:city', (req, res) => {
    const cityName = req.params.city;
    const city = citiesData.find(city => city.name.toLowerCase() === cityName.toLowerCase());
    if (!city) {
        res.status(404).send('City not found');
        return;
    }
    const weatherInfo = `
        <h1>Weather information for ${city.name}</h1>
        <p>Тиск: ${city.pressure}</p>
        <p>Вологість: ${city.humidity}</p>
        <p>Температура: ${city.temperature}</p>
    `;
    res.send(weatherInfo);
});

// Прослуховування порту 3000
app.listen(3000, () => {
    console.log("Example app listening on port 3000");
});
