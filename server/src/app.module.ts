import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainsModule } from './trains/trains.module';
import { Train } from './trains/entities/train.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'awdasd123098',
      username: 'postgres',
      entities: [User, Train],
      database: 'train_schedule',
      synchronize: true,
      logging: true,
    }),
    TrainsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
