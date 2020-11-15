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
            window.location.replace("index.html");
        }
      });

      function logOut(){
          firebase.auth().signOut();
      }

      mainApp.logOut = logOut;
})()


// var ref = new Firebase('https://fir-7f672.firebaseio.com/');
// var email = ref.getAuth().password.email;
// console.log(email);

var user = firebase.auth().currentUser;
// var uid;
// document.getElementById("name").innerHTML = "Fuck you";


// if(user != null){
//     uid = user.email;
//     document.getElementById("name").innerHTML = "Fuck you";
//     console.log();
// }


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user.email);
        document.getElementById("display").innerHTML = "how do you impact pollution, " + user.displayName + "?";
        document.getElementById("id_u").value=user.uid;
        document.getElementById("id_u").style.display = "none";
        document.getElementById("mail_u").value=user.email;
        document.getElementById("mail_u").style.display = "none";
        document.getElementById("name_u").value=user.displayName;
        document.getElementById("name_u").style.display = "none";

    }
    else {
        window.location.replace("login.html");
    }
})

// document.getElementById('username').value="moo"

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycby-u7KPzDm1K2n5gqs0dh85FSNBcOmO28_ck1oGwDH6uEgKOICW/exec'

$.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
        if (o[this.name]) {
        if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
        } else {
        o[this.name] = this.value || '';
        }
        });
        return o;
    };

$('#submit-form').on('click', function(e) {
    console.log("Damn Daniel");
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: alert("success")
  });
  window.location.href = "download.html";

})





