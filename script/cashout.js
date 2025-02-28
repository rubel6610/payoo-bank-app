document.getElementById('cashoutbtn').addEventListener('click', function (e) {
    e.preventDefault();
    let pin = document.getElementById('cashoutpin').value;
    let convertedPin = parseInt(pin);
    let amount = document.getElementById('cashoutamount').value;
    let convertedAmount = parseFloat(amount);
    let mainBalance = document.getElementById('main-balance').innerText;
    let convertedMainBalance = parseFloat(mainBalance)

    if (convertedPin === 1234) {
        if (convertedAmount > convertedMainBalance){
            alert("You don't have sufficient balance")
        }else{
             let sum = mainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = sum;
        }
           
    } else {
        alert('Please Input Your valid Pin Number')
    }
})