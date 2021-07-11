'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.list = function (event, context, callback) {
    console.log(event); // Contains incoming request data (e.g., query params, headers and more)

    /**
     *
     * @type AWS.S3.Types.ListObjectsV2Request
     */
    const params = {
        Bucket: 'sekwah-maven',
        Delimiter: '/'
    };

    s3.listObjectsV2(params, function (err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred

            const response = {
                statusCode: 500,
                headers: {
                },
                body: JSON.stringify({error: err.stack}),
            };

            callback(null, response);
        } else {
            let contents = data.Contents;
            const files = [];
            contents.forEach(function (content) {
                files.push(content.Key);
            });
            const response = {
                statusCode: 200,
                headers: {
                },
                body: JSON.stringify({files: files, params }),
            };
            callback(null, response);
        }
    });
};
