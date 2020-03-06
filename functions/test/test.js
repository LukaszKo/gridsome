const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = async (event, context) => {
  try {
    client.query(
      q.Get(q.Ref(q.Collection("products")).then(res => {
        return {
          statusCode: 200,
          body: JSON.stringify(res),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept"
          }
        };
      })
    );
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};