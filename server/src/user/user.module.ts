import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    HttpModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          baseURL: `http://${configService.get(
            'PROXY_SERVICE_HOST',
          )}:${configService.get('PROXY_SERVICE_PORT')}`,
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [UserService],
})
export class UserModule {}
