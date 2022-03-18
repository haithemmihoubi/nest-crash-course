import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'admin',
  password: 'admin',
  database: 'nest',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
