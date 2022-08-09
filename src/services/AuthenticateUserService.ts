// AuthenticateUserService.ts

import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Reponse {
  user: User;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Reponse> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    //user.password -> senha criptografada
    //password -> senha não criptografada

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }

    // Se passou até aqui -> Usuário autenticado

    return {
      user,
    }

  }
}

export default AuthenticateUserService;