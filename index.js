// var mainApp = {};
// (function(){
//     var firebase = app_firebase;
//     var userId = null;
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           // User is signed in.
//           userId  = user.userId;
//         }else{
//             // should re-direct to the login page 
//             window.location.replace("login.html");
//         }
//       });

//       function logOut(){
//           firebase.auth().signOut();
//       }

//       mainApp.logOut = logOut;
// })()



(function () {
  var ui = new firebaseui.auth.AuthUI(firebase.auth());


  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'form.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
      //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    // tosUrl: 'index.html',
    // Privacy policy url.
    // privacyPolicyUrl: 'index.html'
  };

  ui.start('#firebaseui-auth-container', uiConfig);

})()
