var slice = Array.prototype.slice,
    fnProto = Function.prototype;

if (!fnProto.bind) {
    fnProto.bind = function () {
        var fn = this,
            scope = arguments[0],
            prependArgs = slice.call(arguments, 1);

        return function () {
            var args = slice.call(arguments);
            return fn.apply(scope, prependArgs.concat(args));
        };
    };
}
