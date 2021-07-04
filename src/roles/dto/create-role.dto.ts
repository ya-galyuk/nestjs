import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({example:'admin', description: 'Role\'s value'})
  readonly value: string;
  @ApiProperty({example:'super user', description: 'Role\'s description'})
  readonly description: string;
}
