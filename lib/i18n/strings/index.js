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

    get: function (path) {
        var name = this._currentLanguage || 'en',
            container = require('lib/i18n/strings/' + name);

        return container.get(path);
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

