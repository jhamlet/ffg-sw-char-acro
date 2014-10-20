var Field = require('../acrobat/field'),
    colors = require('../acrobat/colors');

function TextField (spec) {
    TextField.superclass.call(this, spec);
}

module.exports = Field.extend(TextField,/** @lends TextField# */{
    fieldType: 'text',
    defaults: {
        type:       'text',
        width:      72,
        height:     16,
        font:       font.Helv,
        color:      colors.cmyk(0, 0, 0, 70),
        size:       9,
        alignment:  'left',
        multiline:  false,
        rich:       false,
        noscroll:   true,
        nospell:    true
    }
});
