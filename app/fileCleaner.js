function fileCleaner (
    path,
    process,
    rimraf
) {
    
    function deleteEachFile(basePath, fileNames, callback) {
        if(fileNames.length > 0) {
            const fileName = fileNames.shift();
            const filePath = path.join(basePath, fileName);
            const callNext = () => deleteEachFile(basePath, fileNames, callback);

            rimraf(filePath, callNext);
        } else {
            callback();
        }
    }

    function cleanFiles(relativePath, fileNames) {
        const basePath = path.join(
            process.cwd(),
            relativePath
        );

        deleteEachFile(basePath, fileNames, () => console.log('Selected files were deleted'));
    }

    return {
        cleanFiles
    };
}

module.exports = fileCleaner;