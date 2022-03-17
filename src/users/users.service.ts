import { Injectable, NotFoundException } from "@nestjs/common";
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
    const user = this.users.push(createUserDto);
    return user;
  }

  findAll(name?: string) {
    if (name == '') {
      return new NotFoundException('name must b e given');
    }
    this.users.filter((user) => user.name == name);
  }

  findOne(id: number) {
    this.users.filter((user) => user.id == id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return 'removed successfully';
  }
}
