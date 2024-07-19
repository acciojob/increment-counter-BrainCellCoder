const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
let counterValue = parseInt(counterElement.textContent, 10);
function incrementCounter() {
    alert(counterValue);
    counterValue++;
    counterElement.textContent = counterValue;
}
incrementBtn.addEventListener('click', incrementCounter);
