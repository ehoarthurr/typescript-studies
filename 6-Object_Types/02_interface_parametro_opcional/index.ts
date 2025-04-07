interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário é ${user.role}`);
  }
}

const u1: User = { email: "arthur@gmail.com", role: "Admin" };
const u2: User = { email: "joao@gmail.com" };

showUserDetails(u1);
showUserDetails(u2);
