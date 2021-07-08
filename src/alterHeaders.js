'use strict';

module.exports.fileheaders = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const request = event.Records[0].cf.request;
    const headers = response.headers;

    console.log(request);

    if(request?.uri.toLowerCase().endsWith('.xml')) {
        headers['content-type'] = [{ key: 'content-type', value: "application/xml" }];
    }

    return callback(null, response);
};
