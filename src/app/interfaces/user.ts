interface CreateUserDTO {
  email: string,
  name: string,
  cpf: string,
  password: string,
}

interface LoginUserDTO {
  cpf: string,
  password: string,
}

interface User {
  id: number;
  email: string,
  name: string,
  cpf: string,
}

export { CreateUserDTO, LoginUserDTO, User };
