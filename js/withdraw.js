/*
1. add withdraw button event handler
2. get withdraw amount by using getInputfieldValueById funtion
3.get previous withdraw amount by useing getTextElementValueById funtion
4.calculate new withdraw Total and set the value
4.5. set new withdraw total by using setTextElementValueById funtion
5. get previous balance total by using getTextElementValueById funtion
6.calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);


})