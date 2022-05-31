import { ApiProperty } from '@nestjs/swagger';

export class RegistrationUserDto {
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

  @ApiProperty({
    title: 'Confirm Password',
    description: 'Confirm password user',
    required: true,
    example: '12345678',
    minLength: 8,
  })
  readonly confirmPassword: string;

  @ApiProperty({
    title: 'Node id',
    description: 'Blockchain node id',
    required: true,
    example: 1,
  })
  readonly nodeId: number;

  @ApiProperty({
    title: 'Type',
    description: 'User type',
    required: true,
    example: 'teacher',
    enum: ['teacher', 'student'],
  })
  readonly type: string;
}
