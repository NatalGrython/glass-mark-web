import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { NodeModule } from './node/node.module';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    NodeModule,
    UserModule,
    TransactionModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
