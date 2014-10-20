var Component = require('./component'),
    _ = require('underscore');
/**
 * @class Form
 * @extends Component
 * @param {Object} spec
 */
function Form (spec) {
    Form.superclass.call(this, _.extend(spec, {
        children: _.map(spec.pages, function (page, idx) {
            return new Component({
                name: 'page' + idx,
                type: 'page',
                children: page
            });
        })
    }));
}

Form.create = function (doc, spec) {
    var form = new Form(spec);

    doc.delay = true;

    form.create(doc);
    form.destroy();

    doc.delay = false;

    doc.resetForm();
};

module.exports = Component.extend(Form,/** @lends Form# */{
    defaults: {
        type: 'form'
    }
});
