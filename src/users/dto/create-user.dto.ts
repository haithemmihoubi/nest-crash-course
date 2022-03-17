import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ description: 'the user id' })
  id: number;
  @ApiProperty({ description: 'the user name' })
  name: string;
}
