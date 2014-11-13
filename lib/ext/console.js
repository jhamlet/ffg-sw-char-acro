/*globals alert, prompt, confirm*/
var console = typeof console !== 'undefined' ? console : {},
    _ = require('underscore');

if (!console.log) {
    console.log = console.println ?
        _.bind(console.println, console) :
        (typeof alert === 'function' ? alert : function () {});

    console.log('Console extensions loaded');
}

module.exports = console;
