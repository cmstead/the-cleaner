function userPrompts(
    inquirer
) {
    function selectFiles(fileNames) {
        return inquirer
            .prompt([
                {
                    type: 'checkbox',
                    message: 'Which files do you want to delete?',
                    name: 'selectedFiles',
                    choices: fileNames
                }
            ]);
    }

    function getStartPath() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'startPath',
                    message: 'Which directory do you want to clean?',
                    default: './'
                }
            ]);
    }

    return {
        selectFiles,
        getStartPath
    };
}

module.exports = userPrompts;