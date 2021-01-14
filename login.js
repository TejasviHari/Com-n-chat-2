function login(){
    user=document.getElementById("user_name").value;

    localStorage.setItem("user_name",user);

    window.location="com'n'chat.html";
}