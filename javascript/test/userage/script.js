let username;
let age;

document.getElementById("submitBtn").onclick = function() {
    username = document.getElementById("username").value;
    age = document.getElementById("userage").value;
  //  console.log(username,age);
  
   document.getElementById("resultName").textContent = username
   document.getElementById("resultAge").textContent = age

};