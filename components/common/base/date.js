/**
 * @author:				y.g.q
 * @createDate:			2015-12-18
 * @lastModifiedBy:		tomasran
 * @description:		日期操作公共方法
 */


var $ = require("expose-loader?$!jquery");

module.exports = {
    parse: function (string) {
        var reg = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+");

        if ($.type(string) == 'string' ) {
            string = string.replace(/\-/g, '/');

            if (reg.test(string) || isNaN(Date.parse(string))) {
                var d = string.split(/\s+|T/),
                    d1 = d.length > 1 ? d[1].split(/[^\d]/) : [0, 0, 0],
                    d0 = d[0].split(/[^\d]/);

                return new Date(d0[0] - 0, d0[1] - 1, d0[2] - 0, d1[0] - 0, d1[1] - 0, d1[2] - 0);
            } else {
                return new Date(string);
            }
        }
        var date = new Date(string);
        return isNaN(date) ? null : date;
    },

    format: function(date, format){
        date = $.type(date) === 'date' ? date :$.type(date) === 'string' ? $.date.parse(Number(date)) : $.date.parse(date);
        if(date === null || date===undefined){ return date; }
        var weekArr = ['日', '一', '二', '三', '四', '五', '六'],
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            date2 = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            week = date.getDay();

        var pad = $.number.pad;
        var d = format.replace(/yyyy/g, pad(year, 4))
            .replace(/yy/g, pad(('' + year).slice(2), 2))
            .replace(/MM/g, pad(month, 2))
            .replace(/M/g, month)
            .replace(/dd/g, pad(date2, 2))
            .replace(/d/g, date2)
            .replace(/HH/g, pad(hours, 2))
            .replace(/H/g, hours)
            .replace(/hh/g, pad(hours % 12, 2))
            .replace(/h/g, hours % 12)
            .replace(/mm/g, pad(minutes, 2))
            .replace(/m/g, minutes)
            .replace(/ss/g, pad(seconds, 2))
            .replace(/s/g, seconds)
            .replace(/W/g, weekArr[week]);

        return d;
    },

	/*
	 * 毫秒转化为时、分、秒
	 * @param {Number} msd
	 * @return {String}
	 */
	msToStr: function(msd) {

        var d = Math.floor(msd / (1000 * 60 * 60 * 24));  // 天
        var h = Math.floor((msd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 小时
        var m = Math.floor((msd % (1000 * 60 * 60)) / (1000 * 60)); // 分钟
        var s = Math.floor((msd % (1000 * 60)) / 1000); // 秒

        if( d ){
            return d + '天' + h + '小时'+ m + '分'+ s + '秒';
        } else if( h ) {
            return h + '小时'+ m + '分'+ s + '秒';
        } else if( m ){
            return m + '分'+ s + '秒';
        } else {
            return s + '秒';
        }

	}
};
