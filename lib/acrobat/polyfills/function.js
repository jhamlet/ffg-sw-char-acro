var _ = require('underscore'),
    slice = Array.prototype.slice,
    fnProto = Function.prototype;

if (!fnProto.bind) {
    fnProto.bind = function () {
        var args = slice.call(arguments);
        return _.bind.apply(_, [this].concat(args));
    };
}
