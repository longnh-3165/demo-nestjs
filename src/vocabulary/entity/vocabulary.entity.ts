import { Ivocabulary } from "../interface/ivocabulary.interface";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vocabulary implements Ivocabulary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;

  @Column()
  definitions: string;

  @Column()
  Antonym: string;
}