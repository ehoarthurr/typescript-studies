function showProductDetails({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `O nome do produto é ${name} e ele custa R$${price}`;
}

const shirt = { name: "Camisa", price: 49.99 };

console.log(showProductDetails(shirt));
// console.log(showProductDetails({ name: "teste", age: 30 }));
// console.log(showProductDetails([1, 2]));
