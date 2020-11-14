var mainApp = {};
(function(){
    var firebase = app_firebase;
    var userId = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          userId  = user.userId;
        }else{
            // should re-direct to the login page 
            window.location.replace("login.html");
        }
      });

      function logOut(){
          firebase.auth().signOut();
      }

      mainApp.logOut = logOut;
})()