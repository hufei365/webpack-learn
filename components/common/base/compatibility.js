// 兼容扩展原生bind
if (!Function.prototype.bind) {
    Function.prototype.bind = function() {
        var that = this,
            args = Array.prototype.slice.call(arguments),
            obj = args.shift();
        return function() {
            that.apply(obj, args);
        };
    };
}

// 数组兼容扩展
if (!Array.prototype.forEach) {
    /**
     * Iterates an array, invoking callback for each element
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Array}
     */
    Array.prototype.forEach = function(fn, context) {
        for (var i = 0, len = this.length >>> 0; i < len; i++) {
            if (i in this) {
                fn.call(context, this[i], i, this);
            }
        }
    };
}

if (!Array.prototype.map) {
    /**
     * Returns a result of iterating over an array, invoking callback for each element
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Array}
     */
    Array.prototype.map = function(fn, context) {
        var result = [];
        for (var i = 0, len = this.length >>> 0; i < len; i++) {
            if (i in this) {
                result[i] = fn.call(context, this[i], i, this);
            }
        }
        return result;
    };
}

if (!Array.prototype.every) {
    /**
     * Returns true if a callback returns truthy value for all elements in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Boolean}
     */
    Array.prototype.every = function(fn, context) {
        for (var i = 0, len = this.length >>> 0; i < len; i++) {
            if (i in this && !fn.call(context, this[i], i, this)) {
                return false;
            }
        }
        return true;
    };
}

if (!Array.prototype.some) {
    /**
     * Returns true if a callback returns truthy value for at least one element in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Boolean}
     */
    Array.prototype.some = function(fn, context) {
        for (var i = 0, len = this.length >>> 0; i < len; i++) {
            if (i in this && fn.call(context, this[i], i, this)) {
                return true;
            }
        }
        return false;
    };
}

if (!Array.prototype.filter) {
    /**
     * Returns the result of iterating over elements in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Array}
     */
    Array.prototype.filter = function(fn, context) {
        var result = [],
            val;
        for (var i = 0, len = this.length >>> 0; i < len; i++) {
            if (i in this) {
                val = this[i]; // in case fn mutates this
                if (fn.call(context, val, i, this)) {
                    result.push(val);
                }
            }
        }
        return result;
    };
}

if (!Array.prototype.reduce) {
    /**
     * Returns "folded" (reduced) result of iterating over elements in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [initial] Object to use as the first argument to the first call of the callback
     * @return {Any}
     */
    Array.prototype.reduce = function(fn /*, initial*/ ) {
        var len = this.length >>> 0,
            i = 0,
            rv;

        if (arguments.length > 1) {
            rv = arguments[1];
        } else {
            do {
                if (i in this) {
                    rv = this[i++];
                    break;
                }
                // if array contains no values, no initial value to return
                if (++i >= len) {
                    throw new TypeError();
                }
            }
            while (true);
        }
        for (; i < len; i++) {
            if (i in this) {
                rv = fn.call(null, rv, this[i], i, this);
            }
        }
        return rv;
    };
}
