//DRY ---> do not repeat yourself

document.getElementById('btn-deposit').addEventListener('click', function(){
/*
1. get the element by id
2. get the value from the element 
3. convert string value toa a number
*/
const newDepositAmount = getInputFieldValueById('deposit-field');
/*
1.get previous deposit total by id
*/
const previousDepositTotal = getTextElementValueById('deposit-total');

//calculate new deposit total
const newDepositTotal = previousDepositTotal + newDepositAmount;
//set diposit total value
setTextElementValueById('deposit-total', newDepositTotal);

// get previous balance by using the funtion
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueById('balance-total', newBalanceTotal);
})