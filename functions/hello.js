exports.handler = function(event, context, cb) {
  cb(null, {
    statusCode: 200,
    body: "Hello World",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    }
  });
};
