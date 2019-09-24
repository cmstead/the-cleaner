function cliArgs (
    commandLineArgs
) {
    const cliOptions = [
        { name: 'use-fire', type: Boolean},
        { name: 'path', type: String}
    ];

    return commandLineArgs(cliOptions);
}

module.exports = cliArgs;