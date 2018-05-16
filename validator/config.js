const fs = require('fs');

module.exports = function (DIR) {    
    if (!fs.existsSync(DIR)) {
        /* directory parameter in config file points to a directory that's not present */
        console.log('\033[1;31mDirectory mentioned in config file doesnot exist !!!');
        console.log('\033[1;31mEnsure the directory(dir) parameter is set to a valid directory');
        shell.exit(1);
    }
}