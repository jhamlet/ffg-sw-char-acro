require('../acrobat/polyfills');

var protean = require('protean'),
    _ = require('underscore');
/**
 * An component represents a form section, or general area in the PDF document. It
 * can have child components that are more concrete components (i.e. form fields)
 * that actually have a physical representation in the document.
 *
 * @class Component
 * @param {Object} spec
 * @param {String} spec.name
 * @param {String} spec.type
 * @param {Number} spec.page
 * @param {Rect} [spec.rect]
 * @param {Unit} [spec.x]
 * @param {Unit} [spec.y]
 * @param {Unit} [spec.width]
 * @param {Unit} [spec.height]
 * @param {Array<Component>} [spec.children]
 */
function Component (spec) {
    _.extend(this, this.defaults, spec);

    this.name = this.name || protean.guid();
    this.children = this.children || [];

    _.each(this.children, function (c) {
        c.parent = this;
        c.page = typeof c.page !== 'number' ? this.page : c.page;
    }, this);
}

Component.extended = function (subclass) {
    var uber = this,
        uberproto = uber.prototype,
        subproto = subclass.prototype,
        uberdefaults = uberproto.defaults,
        subdefaults = subproto.defaults;

    subproto.defaults = _.extend({}, uberdefaults, subdefaults || {});
};

module.exports = protean.classify(Component,/** @lends Component@ */{
    defaults: {
        page: 0,
        type: 'component',
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    /**
     * The fully qualified name for this component
     * @property {String}
     * @readonly
     */
    get fqn () {
        var p = this,
            path = [];

        while (p) {
            path.push(p.name);
            p = p.parent;
        }

        return path.reverse().join('.');
    },
    /**
     * The x position of this component relative to the page
     * @property {Number}
     * @readonly
     */
    get pageX () {
        return this.getComputedValue('x');
    },
    /**
     * The y position of this component relative to the page
     * @property {Number}
     * @readonly
     */
    get pageY () {
        return this.getComputedValue('y');
    },
    /**
     * @property {Rect}
     */
    set rect (r) {
        this.x = r[0];
        this.y = r[1];
        this.width = r[2] - r[0];
        this.height = r[3] - r[1];
    },

    get rect () {
        var x = this.x,
            y = this.y,
            w = this.width,
            h = this.height;

        return [x, y, x + w, y + h];
    },
    /**
     * By default, a component is an abstraction and doesn't really create
     * anything in the Acrobat/PDF document.
     * @param {external:Acrobat.Doc} doc
     */
    create: function (doc) {
        _.invoke(this.children, 'create', doc);
        return this;
    },
    /**
     * Clean up after ouselves
     */
    destroy: function () {
        this.parent = null;
        _.invoke(this.children, 'destroy');
    },
    /**
     * Sync non-initializing properties to the our field
     */
    sync: function () {
        _.invoke(this.children, 'sync');
        return this;
    },

    getComputedValue: function (name) {
        var p = this,
            val = 0;

        while (p) {
            val += p[name];
            p = p.parent;
        }

        return val;
    },
    /**
     * @property {PageRect}
     */
    getPageRect: function (doc) {
        var pb = (doc || this.field.doc).getPageBox('Bleed', this.page),
            ph = pb[1] - pb[3],
            x = this.pageX,
            y = this.pageY,
            w = this.width,
            h = this.height,
            tx = x,
            ty = ph - y,
            bx = x + w,
            by = ph - (y + h);

        return [tx, ty, bx, by];
    }
});
/**
 * A unit of measurement. In this instance we are using 'points'. There are 72
 * points per inch.
 * @typedef Unit
 * @type Number
 */
/**
 * A rectangle that represents an components position on the page. The first two
 * numbers are its top-left position, and the third and fourth numbers describe
 * the components bottom-right position.
 * @typedef Rect
 * @type Array<Unit, Unit, Unit, Unit>
 */
/**
 * A Page Rectangle is a Rect that is rotated as to have it's reference origin
 * from the bottom-left of the page. This is how Acrobat interprets rects.
 * @typedef PageRect
 * @type Array<Unit, Unit, Unit, Unit>
 */
