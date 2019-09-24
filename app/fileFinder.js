function fileFinder(
    fs,
    path,
    process
) {

    function throwIfMissing(filePath) {
        if (!fs.existsSync(filePath)) {
            throw new Error(`Cannot find file or directory ${filePath}`);
        }
    }

    function isDirectory(filePath) {
        try {
            return fs.lstatSync(filePath).isDirectory();
        } catch (e) {
            return false;
        }
    }

    function captureFileList(filePath) {
        return fs.readdirSync(filePath)
            .filter(path => path !== '.' && path !== '..');
    }

    function buildFilePath(directory) {
        return path.join(
            process.cwd(),
            directory
        );
    }

    function getFileList(directory) {
        const filePath = buildFilePath(directory);

        throwIfMissing(filePath);

        return isDirectory(filePath)
            ? captureFileList(filePath)
            : [filePath]
    }

    return {
        buildFilePath,
        getFileList
    };
}

module.exports = fileFinder;