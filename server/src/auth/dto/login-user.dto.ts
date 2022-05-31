import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    title: 'Login',
    description: 'Login user',
    required: true,
    example: 'login@mail.ru',
  })
  readonly login: string;
  @ApiProperty({
    title: 'Password',
    description: 'Password user',
    required: true,
    example: '12345678',
    minLength: 8,
  })
  readonly password: string;
}
