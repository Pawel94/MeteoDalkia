export const signIn = (credetials) => {
  return (dispach, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credetials.email, credetials.password)
      .then(() => {
        dispach({ type: "LOGIN_success" });
      })
      .catch((err) => {
        dispach({ type: "LOGIN_errr", err });
      });
  };
};

export const signOut = (credetials) => {
  return (dispach, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispach({ type: "Signout_success" });
      });
  };
};

export const signUp = (newUser) => {
  return (dispach, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispach({ type: "SIGNUP_success" });
      })
      .catch((err) => {
        dispach({ type: "SIGNUP_errr", err });
      });
  };
};
