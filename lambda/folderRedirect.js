'use strict';


module.exports.folderredirect = (event, context, callback) => {
    const request = event.Records[0].cf.request;

    const oldURI = request.uri;

    const endslashURI = oldURI.replace(/(\/[\w\-]+)$/, '$1/');

    if(endslashURI !== oldURI) {

        let params = '';
        if(('querystring' in request) && (request.querystring.length>0)) {
            params = '?'+request.querystring;
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
    } else {
        // Extract the URI from the request
        const oldUri = request.uri;

        const newuri = oldUri.replace(/\/$/, '\/maven-explorer\/index.html');

        request.uri = newuri;

        return callback(null, request);
    }
};
