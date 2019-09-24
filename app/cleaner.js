function cleaner(
    cliArgs,
    fileCleaner,
    fileFinder,
    userPrompts
) {

    function cleanPath(path) {
        const fileNames = fileFinder.getFileList(path);

        userPrompts
            .selectFiles(fileNames)
            .then(data => {
                fileCleaner.cleanFiles(path, data.selectedFiles);
            });
    }

    function clean() {
        const pathSpecified = typeof cliArgs.path === 'string';

        console.log('\n*** The Cleaner ***\n');

        if (pathSpecified) {
            cleanPath(cliArgs.path);
        } else {
            console.log('Hey, no path was specified. That\'s alright, we\'ll walk you through it.');
            console.log('To skip this step next time, try "cleaner --path ./path/to/folder"');
            console.log('');

            userPrompts
                .getStartPath()
                .then(data => cleanPath(data.startPath));
        }
    }

    return {
        clean
    };
}

module.exports = cleaner;