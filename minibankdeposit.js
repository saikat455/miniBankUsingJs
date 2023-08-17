document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';

    const depositTotalMoney = document.getElementById('deposit-money');
    const previousDepositTotalString = depositTotalMoney.innerText;
    const previousDepositTotalMoney = parseFloat(previousDepositTotalString);

    const newTotalDepositAmount = newDepositAmount + previousDepositTotalMoney;
     depositTotalMoney.innerText = newTotalDepositAmount;

     const totalBalance = document.getElementById('balance-total');
     const previousTotalBalanceString = totalBalance.innerText;
     const previousTotalBalanceMoney = parseFloat(previousTotalBalanceString);
     const newBalanceTotal = previousTotalBalanceMoney + newDepositAmount; 
     totalBalance.innerText = newBalanceTotal;
})