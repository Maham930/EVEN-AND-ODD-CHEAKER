function checkEvenOdd() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

   if (numberInput === '') {
    resultDiv.textContent = 'Please enter a number.';
     return;
     }

     const number = parseInt(numberInput);

    if (isNaN(number)) {
        resultDiv.textContent = 'Please enter a valid number.';
    } else if (number % 2 === 0) {
        resultDiv.textContent = `${number} is even.`;
    } else {
        resultDiv.textContent = `${number} is odd.`;
    }
}
