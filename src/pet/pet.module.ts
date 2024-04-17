import { Module } from "@nestjs/common";
import { PetsController } from "./controllers/pets.controller";
import { PetsService } from "./services/pets.service";

@Module({
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetModule {}
