var protean = require('protean'),
    _ = require('underscore'),
    PT_PER_INCH = 72;
/**
 * A wrapper for an Acrobat Field.
 * @class Field
 * @param {Object} spec
 * @param {String} spec.name
 * @param {String} spec.type
 * @param {Number} spec.page
 * @param {Rect} spec.rect
 */
function Field (doc, spec) {
    this.doc = doc;

    _.extend(this, spec);

    this.create();
}

module.exports = protean.classify(Field,
    /** @lends Field@ */{
    get pageRect () {
        var rect = this.rect,
            pageBox = this.doc.getPageBox('Bleed', this.page),
            pts = PT_PER_INCH,
            h = pageBox[1] - pageBox[3],
            tx = rect[0] * pts,
            ty = h - (rect[1] * pts),
            bx = rect[2] * pts,
            by = h - (rect[3] * pts);

        return [tx, ty, bx, by];
    },

    create: function () {
        this.subject =
            this.
            doc.
                addField(this.name, this.type, this.page, this.pageRect);

        this.update();
    },

    update: function () {
        var f = this.subject;

        f.value = this.value;
    }
});
