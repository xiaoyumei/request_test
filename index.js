'use strict';
const rp  = require('request-promise');
var url = "https://www.baidu.com/";
exports.main_handler =  async (event,context,callback) => {
    let options = {
        method: 'GET',
        uri: url,
        auth : {      //可以拿掉
            'user' : 'xx',
            'pass' : 'xx',
            'sendImmediately' : 'false',
        }
      };
    let  rpbody = await rp(options);       
    return rpbody;
}

