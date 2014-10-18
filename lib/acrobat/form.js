require('./polyfills');

var protean = require('protean');

function Form () {
    this.foo();
}

protean.classify(Form, {
    foo: function () {
        console.println('form');
    }
});

module.exports = {
    make: function (spec) {
        var f = new Form(spec);
        return f;
    }
};
