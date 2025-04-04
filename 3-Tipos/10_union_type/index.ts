function showBalance(balance: string | number) {
  console.log(`O saldo da conta é ${balance}`);
}

showBalance(100);
showBalance("500");
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, "teste", true];