/*globals alert*/
var _ = require('underscore'),
    protean = require('protean'),
    result =
        _.
        keys(this).
        map(function (key, idx) {
            return idx + ': ' + key;
        }).
        join('\n'),
    MyClass = protean.classify(function MyClass () {
        this.foo = 'foo';
    }, {
        alert: function (msg) {
            alert(this.foo + ': ' + msg);
        }
    }),
    instance = new MyClass();

instance.alert(result);
