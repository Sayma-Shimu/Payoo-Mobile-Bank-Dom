const validPin = 1234;

document.getElementById('add-money-btn').addEventListener('click', (event) => {
    event.preventDefault()
    console.log('clicked hoyeche');


    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const pin = parseInt(document.getElementById('add-pin').value)

    const avilableBalance = parseInt(document.getElementById('available-balance').innerText
    )

    if (accountNumber.length < 11) {
        alert('please provide valid account number')
        return;
    }

    if (pin != validPin) {
        alert('please provide valid pin')
        return;
    }

    const totalNewAvilableBalance = amount + avilableBalance;

    document.getElementById('available-balance').innerText = totalNewAvilableBalance;

})



// -----------cash out feature-------------
document.getElementById('Withdraw-Money-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const amount = parseInt(document.getElementById('withdraw-amount').value);
    const avilableBalance = parseInt(document.getElementById('available-balance').textContent);
    const agentNumber = document.getElementById('agent-number').value;
    const cashOutPin = parseInt(document.getElementById('cashOut-pin').value
    )


    if(agentNumber.length < 11){
         alert('please provide valid number')
        return;
    }

    if (cashOutPin != validPin) {
        alert('Invalid')
        return;
    }


    const totalNewAvilableBalance = avilableBalance - amount;
    document.getElementById('available-balance').textContent = totalNewAvilableBalance;
})



// -----------toggling feature-------------
document.getElementById('money-add-button').addEventListener('click', () => {
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})


document.getElementById('cash-out-button').addEventListener('click', () => {
    document.getElementById('cash-out-parent').style.display = 'block';
    document.getElementById('add-money-parent').style.display = 'none';
})