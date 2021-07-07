'use strict';

module.exports.folderredirect = (event, context, callback) => {
    // Extract the request from the CloudFront event that is sent to Lambda@Edge
    const request = event.Records[0].cf.request;

    // Extract the URI and params from the request
    const olduri = request.uri;

    // Match any uri that ends with some combination of
    // [0-9][a-z][A-Z]_- and append a slash
    var endslashuri = olduri.replace(/(\/[\w\-]+)$/, '$1/');

    if(endslashuri != olduri) {

        let params = '';
        if(('querystring' in request) && (request.querystring.length>0)) {
            params = '?'+request.querystring;
        }
        const newUri = endslashuri + params;

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
        // Return to CloudFront
        const request = event.Records[0].cf.request;

        // Extract the URI from the request
        const oldUri = request.uri;

        const newuri = oldUri.replace(/\/$/, '\/index.html');

        request.uri = newuri;

        return callback(null, request);
    }
};
