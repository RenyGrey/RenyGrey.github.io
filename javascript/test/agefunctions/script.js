const button = document.getElementById("submitBtn");
const age = document.getElementById("infoage");
const result = document.getElementById("resultAge");
const resultInfo = document.getElementById("resultinfo");

let resultAge;
button.onclick = function() {
    resultAge = age.value;
    //console.log(resultAge);
    result.textContent = `Your age is ${resultAge} years old.` ;
 

    if(resultAge < 18) {
        resultInfo.textContent = "You don't have permission to open this website";
    } else{
         resultInfo.textContent ="You can see this website";
    };
};

