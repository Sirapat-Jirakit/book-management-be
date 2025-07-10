import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { BranchesModule } from './branches/branches.module';
import { InventoriesModule } from './inventories/inventories.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BooksModule, UsersModule, BranchesModule, InventoriesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
