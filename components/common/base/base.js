/**
 * @author nuer
 * @time 20151217
 */

let $ = require("expose-loader?$!jquery");


//TODO: jquery.event做移动端兼容;
// require('./exevent.js');


//TODO: BROWSER;
$.browser = require('./browser.js');

//TODO: Object;
$.object = require('./object.js');

//TODO: URL;
$.url = require('./url.js');

//TODO: STRING;
$.string = require('./string.js');

//TODO: NUMBER;
$.number = require('./number.js');

//TODO: JSON;
$.json = require('./json.js');

//TODO: cookie;
$.cookie = require('./cookie.js');

//TODO: date;
$.date = require('./date.js');

//TODO: array;
$.array = require('./array.js');

//TODO: hashcode;
$.hashCode = require('./hashcode.js');

module.exports = $;
