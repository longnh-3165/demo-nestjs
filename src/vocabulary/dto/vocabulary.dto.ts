import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class VocabularyDto {
  word: string;
  definitions: string;
  Antonym: string;
}
