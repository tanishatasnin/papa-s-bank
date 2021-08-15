
document.getElementById('deposit-button').addEventListener('click',function(){
               // console.log('deposite button clicked');


// get the amount desposit 
               const depositInput=document.getElementById('deposit-input');
const newDepositAmountText=depositInput.value;
const newDepositeAmount=parseFloat(newDepositAmountText);
// console.log(depositAmount);
const depositTotal=document.getElementById('deposit-total');
const previousDepositeText=depositTotal.innerText;
const previousDepositeAmount=parseFloat(previousDepositeText);
const newDepositeTotal=previousDepositeAmount+newDepositeAmount;
depositTotal.innerText=newDepositeTotal;

// update balance 
const balanceTotal=document.getElementById('balance-total');
const balanceTotalText=balanceTotal.innerText;
const previousTotalBalance=parseFloat(balanceTotalText);
const newBalanceTotal=previousTotalBalance+newDepositeAmount;
balanceTotal.innerText=newBalanceTotal;
depositInput.value='';
})

// handle withdraw evaen handle 


document.getElementById('withdraw-button').addEventListener('click',function(){
 const withdrawInput=document.getElementById('withdraw-input')    ;
 const withdrawAmountText=withdrawInput.value;
//  console.log(withdrawAmountText)   ;    
const newWithdrawAmount= parseFloat(withdrawAmountText);
console.log (newWithdrawAmount);
// set total 
const withdrawTotal = document.getElementById('withdraw-total');
const previousWidthdrawText = withdrawTotal.innerText;
const prevwithdrawTotal = parseFloat(previousWidthdrawText);
const newWithdrawTotal=prevwithdrawTotal+ newWithdrawAmount;
withdrawTotal = newWithdrawTotal;

withdrawInput.value = '';



})
