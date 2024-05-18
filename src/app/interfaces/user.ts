interface CreateUser {
  email: string,
  name: string,
  cpf: string,
  password: string,
}

interface LoginUser {
  cpf: string,
  password: string,
}

export { CreateUser, LoginUser };
