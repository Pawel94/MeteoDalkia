const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const database = admin.database().ref("/items");

// const createNotification = (notification) => {
//   return admin
//     .firestore()
//     .collection("notifications")
//     .add(notification)
//     .then((doc) => console.log("notification added", doc));
// };

// exports.projectCreated = functions.firestore
//   .document("projects/{projectId}")
//   .onCreate((doc) => {
//     const project = doc.data();
//     const notification = {
//       content: "Added a new project",
//       user: `${project.authorFirstName} ${project.authorLastName}`,
//       time: admin.firestore.FieldValue.serverTimestamp(),
//     };

//     database.push({
//       content: "Add",
//       user: `${project.authorFirstName} ${project.authorLastName}`,
//       time: admin.firestore.FieldValue.serverTimestamp(),
//     });

//     return createNotification(notification);
//   });

const getDataFromDatabase = () => {
  var db = admin.firestore();
  return db
    .collection("excel")
    .doc("C8uJrlR5n2sy8uB6hwqu")
    .get()
    .then((snapshot) => snapshot);
};
const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();
    const dane2 = admin
      .firestore()
      .collection("test")
      .doc("p89SI4dTL7nUeZ3jqjiT")
      .get()
      .then((doc) => {
        const value = doc.data();
        const value1 = {
          content: value.test1,
        };
      });

    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
      dane: dane2.value1,
      // dane2: dane2,
    };

    database.push({
      Vw: "0",
      data: "0",
      temp_z: "0",
      zach: "0",
    });

    return createNotification(notification);
  });

exports.addItem = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(401).json({
        message: "Not allowed",
      });
    }
    console.log(req.body);

    const item = req.body.item;

    console.log("SPrawdzam");
    console.log("SPrawdzam");

    res.send("SPrawdzam");

    database.push({ item });

    let items = [];

    return database.on(
      "value",
      (snapshot) => {
        snapshot.forEach((item) => {
          items.push({
            id: item.key,
            items: item.val().item,
          });
        });

        res.status(200).json(items);
      },
      (error) => {
        res.status(error.code).json({
          message: `Something went wrong. ${error.message}`,
        });
      }
    );
  });
});
