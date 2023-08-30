import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn() // id 자동 생성
  id: number;

  @Column({ nullable: false }) // not null
  title: string;

  @Column({ type: 'enum', enum: ['스릴러', '로맨스', '코믹', '액션'] }) // 열거형 타입, 4개 중 하나 선택
  genre: string;

  /*
  개봉일
  */
  @Column()
  releaseDate: Date;

  /*
  상영종료일
  */
  @Column()
  endDate: Date;

  /*
  상영여부
  */
  @Column({ default: false })
  isShowing: boolean;

  /*
  등록일
  */
  @CreateDateColumn()
  createdAt: Date;
}