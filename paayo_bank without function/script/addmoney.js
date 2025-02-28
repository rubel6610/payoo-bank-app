
let addMoneyBtn = document.querySelector('#addmoneybtn');

addMoneyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let accNum = document.querySelector('#addmoneyaccountnumber').value;
    let pin = document.querySelector('#addmoneypin').value;
    let convertedPin = parseInt(pin);
    let amount = document.querySelector('#addmoneyamount').value;
    let convertedAmount = parseInt(amount);
    let mainbalance = document.querySelector('#main-balance').innerText;
    let convertedMainBalance = parseInt(mainbalance);
    if (accNum.length === 11) {
        if (convertedPin === 1234) {
            let sum = convertedMainBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum;

        } else {
            alert('Enter your pin and amount')
        }
    } else {
        alert('Enter a valid  account Number')
    }
})