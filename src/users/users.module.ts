import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { UsersController } from './infrastructure/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
