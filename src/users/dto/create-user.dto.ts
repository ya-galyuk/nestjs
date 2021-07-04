import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
  @ApiProperty({example:'example@mail.com', description: 'User\'s email'})
  readonly email: string;
  @ApiProperty({example:'pw', description: 'User\'s password'})
  readonly password: string;
}
