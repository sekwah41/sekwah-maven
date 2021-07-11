'use strict';

module.exports.folderredirect = (event, context, callback) => {
    const request = event.Records[0].cf.request;

    const oldURI = request.uri;

    const endslashURI = oldURI.replace(/(\/[\w\-]+)$/, '$1/');

    if(endslashURI !== oldURI) {

        let params = '';
        if (('querystring' in request) && (request.querystring.length > 0)) {
            params = '?' + request.querystring;
        }
        const newUri = endslashURI + params;

        const response = {
            status: '301',
            statusDescription: 'Permanently moved',
            headers: {
                location: [{
                    key: 'Location',
                    value: newUri
                }]
            }
        };
        return callback(null, response);
    }

    return callback(null, request);
};
