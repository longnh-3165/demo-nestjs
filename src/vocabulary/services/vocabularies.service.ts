import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Vocabulary } from "../entity/vocabulary.entity";
import { Repository } from "typeorm";

@Injectable()
export class VocabulariesService {
  constructor(
    @InjectRepository(Vocabulary)
    private readonly vocabularyRepository: Repository<Vocabulary>
  ) {
    this.vocabularyRepository = vocabularyRepository;
  }
}
