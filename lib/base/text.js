var Field = require('../acrobat/field'),
    colors = require('../acrobat/colors');

function TextField (spec) {
    TextField.superclass.call(this, spec);
}

module.exports = Field.extend(TextField,/** @lends TextField# */{
    fieldType: 'text',
    defaults: {
        type:       'text',
        alignment:  'left',
        multiline:  false,
        rich:       false,
        noscroll:   true,
        nospell:    true
    }
});
