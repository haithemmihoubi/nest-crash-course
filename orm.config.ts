import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Company } from "./src/companies/entities/company.entity";

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'admin',
  password: 'admin',
  database: 'nest',
  synchronize: true,
  entities: [Company]
};
