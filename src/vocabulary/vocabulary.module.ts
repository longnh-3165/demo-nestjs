import { Module } from "@nestjs/common";
import { VocabulariesController } from "./controllers/vocabularies.controller";
import { VocabulariesService } from "./services/vocabularies.service";

@Module({
  controllers: [VocabulariesController],
  providers: [VocabulariesService],
})
export class VocabularyModule {}
