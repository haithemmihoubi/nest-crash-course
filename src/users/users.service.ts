import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { ApiResponse } from "@nestjs/swagger";

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'haithem' }];

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(createUserDto: CreateUserDto) {
    return this.users.push(createUserDto);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
