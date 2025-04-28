import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UserService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {};

  async createUser(data: { email: string; username: string; password: string}) {
    return await this.prisma.users.create({
      data,
    });
  }
}
