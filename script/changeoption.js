document.getElementById('cashout').style.display = 'none';
document.getElementById('transfermoney').style.display = 'none';

const addMoneyBox = document.getElementById('addmoneybox');
const cashOutBox = document.getElementById('cashoutbox');
const transferMoneyBox = document.getElementById('transfermoneybox');


addMoneyBox.addEventListener('click', function () {
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('transfermoney').style.display = 'none';
    document.getElementById('addmoney').style.display = 'block';
   

})

cashOutBox.addEventListener('click', function () {
    document.getElementById('cashout').style.display = 'block';
    document.getElementById('addmoney').style.display = 'none';
    document.getElementById('transfermoney').style.display = 'none';
})

transferMoneyBox.addEventListener('click', function(){
    document.getElementById('addmoney').style.display = 'none';
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('transfermoney').style.display = 'block';

})
