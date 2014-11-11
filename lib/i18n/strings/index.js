var Accessible = require('../../util/accessible-object'),
    _ = require('underscore');

function Strings (name, root) {
    Strings.superclass.call(this, root);
    this.name = name;
    this.base = root.base;
}
//------------------------------------------------------------------------------
// Static
//------------------------------------------------------------------------------
_.extend(Strings, {
    setLocale: function (name) {
        this._currentLanguage = name;
    },

    language: function (name) {
        name = name || 'en';
        return require('lib/i18n/strings/' + name + '.js');
    },

    get: function (path) {
        return Strings.language().get(path);
    },

    bind: function (path) {
        return Strings.language().bind(path);
    }
});
//------------------------------------------------------------------------------
// Instance
//------------------------------------------------------------------------------
module.exports = Accessible.extend(Strings, {
    get: function (path) {
        var value = Strings.superproto.get.call(this, path),
            base = this.base && require('./' + this.base);

        if (typeof value === 'undefined' && base) {
            value = base.get(value);
        }

        value = typeof value === 'undefined' ? '' : value;

        return value;
    }
});

