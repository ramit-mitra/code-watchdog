module.exports = function (file) {
    return {
        'name': 'ESLINT',
        'command': 'eslint "' + file + '" --fix'
    }
}