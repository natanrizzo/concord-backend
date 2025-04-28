import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaClient } from 'generated/prisma';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: "PRISMA",
      useValue: new PrismaClient(),
    }
  ],
})
export class UserModule {}
