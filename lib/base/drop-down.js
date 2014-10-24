var TextComponent = require('./text');
/**
 * @class DropDown
 * @extends TextComponent
 * @param {Object} spec
 */
function DropDown (spec) {
    DropDown.superclass.call(this, spec);
}

module.exports = TextComponent.extend(DropDown,/** @lends DropDown# */{
    fieldType: 'listbox',

    attributes: {
    },

    defaults: {
        items: [],
    },

    sync: function () {
        var f = this.field;
        DropDown.superproto.sync.call(this);
        f.setItems(this.items);
        return this;
    }
});
