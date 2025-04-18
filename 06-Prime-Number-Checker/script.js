function checkPrime() {
    const num = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num) || num < 2) {
        resultElement.textContent = "Please enter a valid number greater than 1";
        resultElement.className = "not-prime";
        return;
    }

    if (isPrime(num)) {
        resultElement.textContent = `${num} is a prime number!`;
        resultElement.className = "prime";
    } else {
        resultElement.textContent = `${num} is not a prime number.`;
        resultElement.className = "not-prime";
    }
}

function isPrime(num) {
    if (num === 2) return true;
    if (num % 2 === 0 || num < 2) return false;

    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}
