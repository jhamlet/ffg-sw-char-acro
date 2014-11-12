var protean = require('protean'),
    _ = require('underscore');
/**
 * Wrap an object so it can be accessed through paths.
 * @class AccessibleObject
 * @param {Object} [obj={}] The object to make accessible
 * @param {Array<String>} [path=[]] A root path to start all requests at
 */
function AccessibleObject (obj, path) {
    if (!obj || _.isArray(obj)) {
        path = obj;
        obj = {};
    }

    this.root = obj;
    this.path = path || [];
}

module.exports = protean.classify(AccessibleObject,
    /** @lends AccessibleObject# */{
    _normalizePath: function (path) {
        path = _.isArray(path) ? path : path.split('.');
        return this.path.concat(path);
    },
    /**
     * Get a copy of this instance with its paths prepended with the supplied
     * path.
     * @param {String[]} path
     * @returns {AccessibleObject}
     */
    bind: function (path) {
        var copy = Object.create(this);
        copy.path = this.path.concat(path);
        return copy;
    },
    /**
     * @private
     */
    _get: function (path, populate) {
        var ctx = this.root,
            len = path.length,
            i = 0;

        for (; i < len; i++) {
            ctx = typeof ctx[path[i]] === 'undefined' ?
                (populate ? ctx[path[i]] = {} : ctx[path[i]]) :
                ctx[path[i]];

            if (typeof ctx === 'undefined' && !populate) {
                break;
            }
        }

        return ctx;
    },
    /**
     * Get the value at the specified path
     * @param {String|String[]} path
     * @returns {Mixed} the value found at the end of the path
     */
    get: function (path) {
        return this._get(this._normalizePath(path));
    },
    /**
     * @param {String|String[]} path
     * @param {Mixed} value
     */
    set: function (path, value) {
        path = this._normalizePath(path);
        this._get(path.slice(0, path.length - 1))[path.pop()] = value;
    }
});
