var proto = Function.prototype,
    slice = Array.prototype.slice;

if (typeof proto.bind !== 'function') {
    proto.bind = function (scope) {
        var prepend = slice.call(arguments, 1),
            fn = this;

        return function () {
            return fn.apply(scope, prepend.concat(slice.call(arguments)));
        };
    };
}

