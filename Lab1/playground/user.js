const fs = require('fs');

const addLanguage = (title, level) => {
    const languages = loadLanguages();

    const duplicateLanguage = languages.find((language) => language.title === title);

    if (!duplicateLanguage) {
        languages.push({
            title: title,
            level: level
        });
        saveLanguages(languages);
        console.log('Language added successfully');
    } else {
        console.log('Language title taken!');
    }
};

const removeLanguage = (title) => {
    const languages = loadLanguages();

    const languagesToKeep = languages.filter((language) => language.title !== title);

    if (languages.length > languagesToKeep.length) {
        console.log('Language removed successfully');
        saveLanguages(languagesToKeep);
    } else {
        console.log('No language found');
    }
};

const listLanguages = () => {
    const languages = loadLanguages();

    console.log('--- Your Languages ---');
    languages.forEach((language) => {
        console.log(language.title + ': ' + language.level);
    });
};

const readLanguage = (title) => {
    const languages = loadLanguages();

    const language = languages.find((language) => language.title === title);

    if (language) {
        console.log(language.title + ': ' + language.level);
    } else {
        console.log('Language not found');
    }
};

const loadLanguages = () => {
    try {
        const dataBuffer = fs.readFileSync('languages.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveLanguages = (languages) => {
    const dataJSON = JSON.stringify(languages);
    fs.writeFileSync('languages.json', dataJSON);
};

module.exports = {
    addLanguage: addLanguage,
    removeLanguage: removeLanguage,
    listLanguages: listLanguages,
    readLanguage: readLanguage
};
