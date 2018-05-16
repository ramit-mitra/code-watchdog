module.exports = function (file) {
    return {
        'name': 'STYLELINT',
        'command': 'stylelint "' + file + '" --fix'
    }
}