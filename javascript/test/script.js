let username
document.getElementById("mysubmit").onclick = function() {
    username = document.getElementById("username").value;
    // console.log(username);
    document.getElementById("userdata").textContent = username;
}

