const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const result = document.getElementById("result");
let count = 0


increase.onclick = function() {
    count++;
    result.textContent = count;
}

decrease.onclick = function(){
    count--;
    result.textContent = count;
}

reset.onclick = function () {
    count = 0;
    result.textContent = count;
}