import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { TodosModule } from "./todos/todos.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "../orm.config";
import { CompaniesModule } from "./companies/companies.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync(config),
    UsersModule,
    TodosModule,
    CompaniesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
