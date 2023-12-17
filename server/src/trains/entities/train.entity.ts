import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Train {
  @PrimaryGeneratedColumn()
  train_id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'int' })
  capacity: number;
}
