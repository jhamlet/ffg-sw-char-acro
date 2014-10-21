require('./polyfills');

var Component = require('./component'),
    _ = require('underscore');
/**
 * A wrapper for an Acrobat Field.
 * @class Field
 * @extends Component
 * @param {Object} spec
 */
function Field (spec) { Field.superclass.call(this, spec); }
//------------------------------------------------------------------------------
// Static Methods
//------------------------------------------------------------------------------
/**
 * When a Field component is extended, we merge together the defined attribute
 * hashes.
 * @member Field
 * @static
 * @param {Function} subclass
 */
Field.extended = function (subclass) {
    var uber = this,
        uberproto = uber.prototype,
        subproto = subclass.prototype,
        uberattrs = uberproto.attributes,
        subattrs = subproto.attributes;

    subproto.attributes = _.extend({}, uberattrs, subattrs || {});
};
//------------------------------------------------------------------------------
// Instance Methods
//------------------------------------------------------------------------------
module.exports = Component.extend(Field,/** @lends Field@ */{
    /**
     * A mapping of component properties to Acrobat.Field properties.
     * @property {Object<String, String>}
     */
    attributes: {
        // textual
        alignment:      'alignment',
        limit:          'charLimit',
        multiline:      'multiline',
        password:       'password',
        rich:           'richText',
        richText:       'richValue',
        color:          'textColor',
        font:           'textFont',
        size:           'textSize',
        noscroll:       'doNotScroll',
        nospell:        'doNotSpellCheck',
        // box
        fill:           'fillColor',
        highlight:      'highlight',
        // checkbox
        mark:           'style',
        // value
        value:          'value',
        defaultValue:   'defaultValue'
    },

    defaults: {
        type: 'field'
    },
    /**
     * Create the form field on the given document
     * @param {external:Acrobat.Doc} doc
     */
    create: function (doc) {
        var fqn = this.fqn;

        Field.superproto.create.call(this, doc);

        this.doc = doc;
        this.field = doc.getField(fqn) || 
            doc.addField(fqn, this.fieldType, this.pageIndex, this.pageRect);

        this.render();

        return this;
    },
    /**
     * Clean up. Drop our reference to the Acrobat field.
     */
    destroy: function () {
        this.doc = null;
        this.field = null;
        Field.superproto.destroy.call(this);
    },
    /**
     * Render our state to the Acrobat Field's
     */
    render: function () {
        _.each(_.keys(this.attributes), this._syncAttribute.bind(this));
        Field.superproto.render.call(this);
        this.field.rect = this.pageRect;
        return this;
    },
    /**
     * @property {PageRect}
     * @readonly
     */
    get pageRect () {
        var pb = this.doc.getPageBox('Bleed', this.pageIndex),
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
    },

    setFieldProperty: function (name, value) {
        try {
            this.field[name] = value;
        }
        catch (e) {
            console.log('Can not set property \'' + name + '\' on field \'' + this.name);
        }
    },

    _syncAttribute: function (name) {
        var attrs = this.attributes,
            fName = attrs[name],
            val = this[name];

        switch (typeof val) {
        case 'undefined':
            return;
        case 'function':
            return val.call(this, fName);
        default:
            this.setFieldProperty(fName, val);
        }
    },

    _position: function () { this.field = this.getPageRect(); }
});
