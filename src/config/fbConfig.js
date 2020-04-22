import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
