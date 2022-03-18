import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  created_at?: Date;
  @Column()
  updated_at?: Date;
}
