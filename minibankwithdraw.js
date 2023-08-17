// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithdrawAmountString = withdrawField.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//     withdrawField.value = '';

//     const withdrawTotalMoney = document.getElementById('withdraw-money');
//     const previousWithdrawTotalString = withdrawTotalMoney.innerText;
//     const previousWithdrawTotalMoney = parseFloat(previousWithdrawTotalString);

//     const newTotalWithdrawAmount = newWithdrawAmount + previousWithdrawTotalMoney;
//     withdrawTotalMoney.innerText = newTotalWithdrawAmount;

//     const totalBalance = document.getElementById('balance-total');
//     const previousTotalBalanceString = totalBalance.innerText;
//     const previousTotalBalanceMoney = parseFloat(previousTotalBalanceString);
//     const newBalanceTotal = previousTotalBalanceMoney - newWithdrawAmount; 
//     totalBalance.innerText = newBalanceTotal;

    
// })

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    const withdrawTotalMoney = document.getElementById('withdraw-money');
    const previousWithdrawTotalString = withdrawTotalMoney.innerText;
    const previousWithdrawTotalMoney = parseFloat(previousWithdrawTotalString);

    const totalBalance = document.getElementById('balance-total');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalanceMoney = parseFloat(previousTotalBalanceString);

    if (newWithdrawAmount <= previousTotalBalanceMoney) {
        const newTotalWithdrawAmount = newWithdrawAmount + previousWithdrawTotalMoney;
        withdrawTotalMoney.innerText = newTotalWithdrawAmount;

        const newBalanceTotal = previousTotalBalanceMoney - newWithdrawAmount; 
        totalBalance.innerText = newBalanceTotal;
    } else {
        alert('Balance is low!');
    }
});
