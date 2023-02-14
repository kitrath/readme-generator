const { mkdir, writeFile } = require("node:fs/promises");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Briefly describe your project: ',
    },
    {
        name: 'license',
        type: 'input',
        message: 'What is your license?',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the installation instructions for your project?',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What are the usage instructions for your project?',
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'How can others contribute to your project?',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'How can users test your project?',
    },
    {
        name: 'questions',
        type: 'input',
        message: 'What should users do if they have questions about your project?'
    }
];

async function createBuildDir() {
    try {
        // mkdir rejects if ./build/ exists when (default) { recursive: false }
        const createDir = await mkdir('./build/', { recursive: true });
        console.log(`created ${createDir}`);
        return createDir;
    } catch (err) {
        console.error(err.message);
    }
}

async function writeToFile(fileName, data) {
    try {
        await writeFile(fileName, data);
    } catch (err) {
        console.error(err.message);
    }
}

async function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            createBuildDir()
                .then(() => {
                    writeToFile(`./build/README.md`, generateMarkdown(answers));
                });
        }) 
        .catch((err) => {
            if (err) throw err;
        })
}

init();
