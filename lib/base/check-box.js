var Field = require('../acrobat/field');

function CheckBox (spec) {
    CheckBox.superclass.call(this, spec);
}

module.exports = Field.extend(CheckBox,/** @lends CheckBox# */{
    fieldType: 'checkbox'
});
