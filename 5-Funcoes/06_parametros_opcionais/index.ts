function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  }

  return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("Arthur"));
console.log(modernGreeting("Pedro", "Doutor"));
