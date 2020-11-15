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
        document.getElementById("name").innerHTML = "FILL OUT THE FORM " + user.displayName;
    }
    else {
        window.location.replace("login.html");
    }
  })