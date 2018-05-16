module.exports = function (file) {
    return {
        'name': 'PHPCBF',
        'command': 'phpcbf --standard=PSR2 ' + file
    }
}