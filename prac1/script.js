var a = document.getElementById("count");
let count = 0;
let incrementButton=0;
let decrementButton=0;

function increment() {
    count++;
    incrementButton++;
    update();
}
function decrement() {
    count--;
    decrementButton++;
    update();
}
function update() {
    document.getElementById("count").innerHTML = count;
    document.getElementById("incrementCount").innerHTML = incrementButton;
    document.getElementById("decrementCount").innerHTML = decrementButton;
}

