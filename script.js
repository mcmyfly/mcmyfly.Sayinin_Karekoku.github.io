
function calculateSquareRoot() {
    var userInput = parseFloat(document.getElementById('numberInput').value);

    if (isNaN(userInput)) {
        document.getElementById('result').innerHTML = "Lütfen geçerli bir sayı girin.";
    } else {
        var squareRoot = Math.sqrt(userInput);
        document.getElementById('result').innerHTML = "Girdiğiniz sayının karekökü: " + squareRoot.toFixed(2);
    }
}
