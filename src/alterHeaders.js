'use strict';

module.exports.fileheaders = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;

    headers['content-type'] = [{ key: 'content-type', value: "application/xml" }];

    return callback(null, response);
};
