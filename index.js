/* 
 *  A simple filesystem watcher that allows you to hook custom actions on modified files
 *  Ramit Mitra
 *  Copyright (c) 2018 Ramit Mitra
 */

/* loading framework dependencies */
const watch = require('node-watch');
const path = require('path');
const shell = require('shelljs');
const fs = require('fs');

/* loading configuration */
const config = require('./config/config');

/* validate loaded configuration */
require('./validator/config')(config.dir);

/* welcome message */
require('./module/welcome')(config.dir);

/* load dependency validators */
const depValidator = './validator/dependency/';

/* 
 * VALIDATE DEPENDENCIES ARE PRESENT
 * ATTEMPT TO SETUP MISSING DEPENDENCIES
 */
fs.readdir(depValidator, (err, files) => {
    files.forEach(file => {
        // load file
        var validator = require('./validator/dependency/' + file);
        // validate
        if (!shell.which(validator.try)) {
            shell.echo('\x1b[31m' + validator.fail);
            if(validator.fallback) {
                shell.echo('\x1b[32m' + validator.fallback-message);
                if (shell.exec(validator.fallback).code !== 0) {
                    shell.echo('\x1b[31mError: ' + validator.fallback-fail);
                    shell.exit(1);
                } else {
                    shell.echo('\x1b[32m' + validator.fallback-pass);
                }
            } else {
                shell.exit(1);
            }
        } else {
            shell.echo('\x1b[32m' + validator.pass);
        }
    });
    // finally
    shell.echo('\033[1;32m✓ ALL DEPENDENCIES ARE PRESENT\x1b[37m\n');
});

/* INITIATE WATCHDOG */
watch(config.dir, {
    recursive: true,
    delay: 555
}, function (event, name) {
    if (event == 'update') {
        /* triggered on create or modification of files */
        /* notify about filechange */
        console.log('\033[0;93m✚ File \033[1;32m%s \033[0;93mchanged\033[0;37m', name);

        //a. check if a hook is present for this modified file filetype
        if (fs.existsSync('./hook/' + path.extname(name) + '.js')) {
            //b. hook available, proceed to execution
            var act = require('./hook/' + path.extname(name))(name);
            console.log('\033[1;35m ☁ Running ' + act.name + ' to fix possible syntactical issues\033[0;37m');
            shell.exec(act.command);
            //c. finally
            console.log('\033[0;93m✔ File Validated\033[0;37m\n');
        }
    } else if (event == 'remove') {
        /* triggered on removal of the file */
        console.log('\033[0;91m✖ File \033[0;95m%s \033[0;91mremoved\033[0;37m\n', name);
    }
});