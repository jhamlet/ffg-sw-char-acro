var Surrogate;

if (!Object.defineProperty) {
    Object.defineProperty = function (obj, name, spec) {
        var value = spec.value,
            get = spec.get,
            set = spec.set;

        if (value) {
            obj[name] = value;
        }
        else if (get || set) {
            if (get) {
                obj.__defineGetter__(name, get);
            }

            if (set) {
                obj.__defineSetter__(name, set);
            }
        }

        return obj;
    };
}

if (!Object.defineProperties) {
    Object.defineProperties = function (obj, propspec) {
        var name;
        for (name in propspec) {
            Object.defineProperty(obj, name, propspec[name]);
        }
        return obj;
    };
}

if (!Object.create) {
    Surrogate = function Surrogate () {};
    
    Object.create = function (obj, propspec) {
        var o;

        Surrogate.prototype = obj;
        o = new Surrogate();

        if (propspec) {
            Object.defineProperties(o, propspec);
        }

        return o;
    };
}
