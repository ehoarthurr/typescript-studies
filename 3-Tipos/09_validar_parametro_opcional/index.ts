function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }

  return `Olá, ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Arthur", "Danielson"));
console.log(advancedGreeting("Joaquim"));
