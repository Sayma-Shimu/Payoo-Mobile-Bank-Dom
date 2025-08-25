const validPin = 1234;

// --------function to get input value----------
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);

    return inputFieldValueNumber;

}


// ---function to get input value without number convert-----
function getInputValue(id) {
    const inputField = document.getElementById(id).value;
    return inputField;
}


// -------function to get innerText--------

function getInnerText(id) {
    const element = parseInt(document.getElementById(id).innerText);
    return element;

}


// -------function to get innerText--------
function setInnerText(value) {
    const avilableBalanceElement = document.getElementById('available-balance');

    avilableBalanceElement.innerText = value;
}


// add money-----------

 document.getElementById('add-money-btn').addEventListener  ('click', (event) => {
    event.preventDefault()

    const bank = getInputValue('bank');

    const accountNumber = document.getElementById('account-number').value

    const amount = getInputValueNumber('add-amount');

    const pin = getInputValueNumber('add-pin');

    const avilableBalance = getInnerText('available-balance');

    if (accountNumber.length < 11) {
        alert('please provide valid account number')
        return;
    }

    if (pin != validPin) {
        alert('please provide valid pin')
        return;
    }

    const totalNewAvilableBalance = amount + avilableBalance;

    setInnerText(totalNewAvilableBalance);

})



// -----------cash out feature-------------
document.getElementById('Withdraw-Money-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const amount = getInputValueNumber('withdraw-amount');

    const avilableBalance = getInnerText('available-balance');

    const agentNumber = document.getElementById('agent-number').value;

    const cashOutPin = getInputValueNumber('cashOut-pin');


    if (agentNumber.length < 11) {
        alert('please provide valid number')
        return;
    }

    if (cashOutPin != validPin) {
        alert('Invalid')
        return;
    }


    const totalNewAvilableBalance = avilableBalance - amount;

    setInnerText(totalNewAvilableBalance);
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