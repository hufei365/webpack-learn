
module.exports = {
    /**
     * 删除数组中某个符合特定条件的元素
     * @param arr
     * @param condition 条件值
     * @returns {*}
     */
	remove: function( arr, condition ) {
		var len = arr.length, iterator = condition;

        if (typeof condition != 'function') {
            iterator = function (item) {
                return condition === item;
            };
        }

        while ( len-- ) {
            if (true === iterator.call(arr, arr[len], len)) {
                arr.splice( len, 1 );
            }
        }
        return arr;
	},
    /**
     * 数组元素去重
     * @param array
     * @returns {Array}
     */
	unique: function ( array ) {
        var list = [], object = {}, index = 0, length = array.length, value;
        for ( ; index < length; index++ ) {
            value = array[ index ];
            if ( !object[ value ] ) {
                object[ value ] = true;
                list.push( value );
            }
        }
        return list;
    },
    /**
     * 数组延迟循环
     * @param array 循环的数组
     * @param callback(index,element) 处理数组每个元素的方法
     * @param number 每次循环多少个元素
     * @param timeout 间隔多久执行下次循环
     * @returns {*} 原数组
     */
    lazyEach: function( array, callback, number, timeout ) {
        var value,
            argv   = arguments,
            index  = callback.index || 0,
            length = index + number;
        
        if ( isNaN(length) || length > array.length ) {
            length = array.length;
        }
        for ( ; index < length; index++ ) {
            value = callback.call( array[ index ], index, array[ index ] );
            
            if ( false === value ) {
                break;
            }
        }

        if ( array.length > (callback.index = index) ) {
            setTimeout(function() {
                argv.callee.apply( null, argv );
            }, timeout || 1);
        }
        return array;
    }
};
