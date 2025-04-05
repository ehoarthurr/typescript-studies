function showErrorMensage(msg: string): never {
  throw new Error(msg);
}

showErrorMensage("Algum erro!");
