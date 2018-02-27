function billPay(amount, payee, account){ 
  if(amount > account.balance){
    throw new Error('insufficient funds');
  }
  account.transfer(payee, amount); // 잔고가 부족한데도 현금을 찾아가는 사고는 발생하지 않음.
}

