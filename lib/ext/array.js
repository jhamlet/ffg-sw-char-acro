var proto = Array.prototype;

if (typeof proto.map !== 'function') {
    proto.map = function (fn, scope) {
        var list = this,
            len = list.length,
            i = 0,
            results = [],
            item,
            result;

        for (; i < len; i++) {
            item = list[i];
            result = fn.call(scope || null, item, i, list);
            results.push(result);
        }

        return results;
    };
}

if (typeof proto.forEach !== 'function') {
    proto.forEach = proto.each = function (fn, scope) {
        this.map(fn, scope);
    };
}

if (typeof proto.filter !== 'function') {
    proto.filter = function (fn, scope) {
        var results = [];

        this.map(function (item, idx, list) {
            if (fn.call(scope || null, item, idx, list)) {
                results.push(item);
            }
        });

        return results;
    };
}

if (!proto.reduce) {
    proto.reduce = function(callback /*, initialValue*/) {
        var t = Object(this),
            len = t.length,
            k = 0,
            value;

        if (this === null || typeof this === 'undefined') {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }

        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        if (arguments.length === 2) {
            value = arguments[1];
        }
        else {
            while (k < len && !(k in t)) {
                k++; 
            }

            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }

            value = t[k++];
        }

        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }

        return value;
    };
}
