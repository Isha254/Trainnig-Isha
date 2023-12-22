// --- f. Events and DOM manipulation ---
/* Create a simple counter on a webpage. Have two buttons – one to increase
the counter and one to decrease it, and display the current counter value on
the page. */


let data = 0;
 
document.getElementById("counting").innerText = data;
 
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}