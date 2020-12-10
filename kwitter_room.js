// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD2RhaItWZRFEhBAw5lucJoWFsdvuRPNy4",
      authDomain: "letschat-homework.firebaseapp.com",
      databaseURL: "https://letschat-homework.firebaseio.com",
      projectId: "letschat-homework",
      storageBucket: "letschat-homework.appspot.com",
      messagingSenderId: "470034673344",
      appId: "1:470034673344:web:8cbdfa726fef270f20c725"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();