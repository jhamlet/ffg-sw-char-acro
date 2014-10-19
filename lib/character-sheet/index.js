require('../acrobat/polyfills');

var protean = require('protean');
/**
 * @class CharacterSheet
 * @param {external:acrobat.Doc} doc
 * @param {Object} spec
 */
function CharacterSheet (doc, spec) {
    this.doc = doc;
    this.spec = spec;
}

CharacterSheet.Field = require('../acrobat/field');

CharacterSheet.create = function () {
    var c = protean.instantiate(CharacterSheet, arguments);
    c.generate();
    return c;
};

protean.classify(CharacterSheet, /** @lends CharacterSheet# */{
    generate: function () {
        var spec = this.spec,
            doc = this.doc,
            name = spec.name,
            layout = spec.layout,
            len = layout.length,
            page = 0,
            pageSpec,
            type,
            itemSpec,
            item;

        for (; page < len; page++) {
            pageSpec = layout[page];
            for (type in pageSpec) {
                itemSpec = pageSpec[type];
                itemSpec.name = name + '.' + itemSpec.name,
                item = new CharacterSheet[type](doc, itemSpec);
            }
        }
    }
});

module.exports = CharacterSheet;
