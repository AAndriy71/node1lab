const yargs = require('yargs');
const user = require('./user');

// Додавання мови користувача
yargs.command({
    command: 'add',
    describe: 'Add a new language',
    builder: {
        title: {
            describe: 'Language title',
            demandOption: true,
            type: 'string'
        },
        level: {
            describe: 'Language level',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.addLanguage(argv.title, argv.level);
    }
});

// Видалення мови користувача
yargs.command({
    command: 'remove',
    describe: 'Remove a language',
    builder: {
        title: {
            describe: 'Language title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.removeLanguage(argv.title);
    }
});

// Виведення списку мов користувача
yargs.command({
    command: 'list',
    describe: 'List all languages',
    handler() {
        user.listLanguages();
    }
});

// Перегляд інформації про конкретну мову користувача
yargs.command({
    command: 'read',
    describe: 'Read information about a language',
    builder: {
        title: {
            describe: 'Language title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.readLanguage(argv.title);
    }
});

yargs.parse();
