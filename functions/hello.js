exports.handler = function(event, context, cb) {
  cb(null, {
    statusCode: 200,
    body: "Hello World"
  });
};
