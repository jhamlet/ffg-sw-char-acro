var Component = require('../acrobat/component'),
    TextComponent = require('./text'),
    DropDown = require('./drop-down'),
    Form = require('../acrobat/form');

exports.format = function (doc, spec) { return Form.create(doc, spec); };
exports.component = function (spec) { return new Component(spec); };
exports.text = function (spec) { return new TextComponent(spec); };
exports.dropdown = function (spec) { return new DropDown(spec); };
