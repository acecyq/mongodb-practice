const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "testdb";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("error connecting:", error);
    }

    const db = client.db(databaseName);

    // db.collection("tasks")
    //   .find({ status: "complete" })
    //   .toArray((error, result) => {
    //     if (error) {
    //       return console.log("error finding task", error);
    //     }

    //     console.log("Found: ", result);
    //   });

    // db.collection("tasks")
    //   .find({ status: "incomplete" })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log("error finding task", error);
    //     }

    //     console.log("Count incomplete tasks: ", count);
    //   });

    /**
     * update one
     */
    // db.collection("tasks")
    //   .updateOne({ status: "incomplete" }, { $set: { status: "complete" } })
    //   .then(result => {
    //     console.log("result:", result);
    //   })
    //   .catch(error => {
    //     console.log("error:", error);
    //   });

    /**
     * update many
     */
    // db.collection("tasks")
    //   .updateMany({ status: "complete" }, { $set: { status: "incomplete" } })
    //   .then(result => {
    //     console.log("result:", result);
    //   })
    //   .catch(error => {
    //     console.log("error:", error);
    //   });
  }
);
