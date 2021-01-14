var firebaseConfig = {
    apiKey: "AIzaSyDnqQVSy17_iapbw8wpO4f2_kc4iPfxXQU",
    authDomain: "kwitter-ddeab.firebaseapp.com",
    databaseURL: "https://kwitter-ddeab-default-rtdb.firebaseio.com",
    projectId: "kwitter-ddeab",
    storageBucket: "kwitter-ddeab.appspot.com",
    messagingSenderId: "993892549232",
    appId: "1:993892549232:web:8863bdecb6d76095c2eab5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("available_rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log(Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("available_rooms").innerHTML+=row;
    

    
    });});}
getData();

user=localStorage.getItem("user_name");

document.getElementById("welcome").innerHTML="Welcome "+user+"!";

function addRoom(){
 room=document.getElementById("room_name").value;
 
 firebase.database().ref("/").child("room_name").update({
  purpose:"adding room name"
 });
 localStorage.setItem("room_name",room);

 window.location="chat-page.html";
}


function redirect(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}



