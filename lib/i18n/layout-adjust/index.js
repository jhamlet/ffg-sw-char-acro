/*globals swCharLocale*/
var Accessible = require('../../util/accessible-object'),
    _ = require('underscore'),
    // log = require('../../ext/console').log,
    Adjustments;

Adjustments = Accessible.extend(
    function Adjustments (obj) {
        Adjustments.superclass.call(this, obj);
    },
    /** @lends Adjustments# */
    {
        get: function (path) {
            var value = Adjustments.superproto.get.call(this, path);
            return typeof value !== 'undefined' ? value : {};
        },

        apply: function (path, obj) {
            var adjust = this.get(path);

            return _.
                keys(adjust).
                reduce(function (acc, key) {
                    var val = adjust[key];

                    if (typeof val === 'number') {
                        acc[key] = (acc[key] || 0) + val;
                    }

                    return acc;
                }, obj);
        },

        extend: function (path) {
            return this.apply(
                path,
                _.extend.apply(_, _.rest(arguments, 1))
            );
        }
    }
);

module.exports = new Adjustments(require('./' + swCharLocale));

require('./de');
