import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "example@mail.com", description: "User's email" })
  @IsString({ message: "Must be string" })
  @IsEmail({}, { message: "Email isn't correct" })
  readonly email: string;

  @ApiProperty({ example: "pw", description: "User's password" })
  @IsString({ message: "Must be string" })
  @Length(4, 16, { message: "Must be more 4 and less 16" })
  readonly password: string;
}
