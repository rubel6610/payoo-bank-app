document.getElementById('login-btn').addEventListener('click', function(e){
    
    const accountNumber = document.getElementById("accountNum").value;
    const pin = document.getElementById('pin').value;
    e.preventDefault();
    if(accountNumber.length === 11){
        if(parseInt(pin) === 1234){
            window.location.href = "./homepage.html"
            console.log('ok');
            
        }else{
            alert('please input your 4 digit pin')
        }
    }else{
        alert("please input 11 digit pin account number ")
    }
})

