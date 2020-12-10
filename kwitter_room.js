var firebaseConfig = {
      apiKey: "AIzaSyDD_8680-6x8uzohwbYAIWzfN87nhdN-wY",
      authDomain: "kwitter-43cd6.firebaseapp.com",
      databaseURL: "https://kwitter-43cd6-default-rtdb.firebaseio.com",
      projectId: "kwitter-43cd6",
      storageBucket: "kwitter-43cd6.appspot.com",
      messagingSenderId: "697889217112",
      appId: "1:697889217112:web:1d95832730d069040c482d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();