import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../domain/user.dtos';
import { User } from '../domain/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException(`user id ${id} not found`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    const newUser = this.userRepo.create(payload);
    return this.userRepo.save(newUser);
  }

  async update(id: number, payload: UpdateUserDto) {
    const user = await this.userRepo.findOne(id);
    this.userRepo.merge(user, payload);
    return this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
