import {
  Param,
  Controller,
  Get,
  Post,
  Patch,
  Search,
  Body,
  Delete,
} from "@nestjs/common";
import { PetsService } from "../services/pets.service";
import { CreatePetDto } from "../dto/create-pet.dto";

@Controller("pets")
export class PetsController {
  constructor(private petsService: PetsService) {
    this.petsService = petsService;
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Search(":id")
  find(@Param("id") id: number) {
    return this.petsService.findById(id);
  }

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    this.petsService.create(createPetDto);
    return "Created !";
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() createPetDto: CreatePetDto) {
    this.petsService.update(id, createPetDto);
    return "Updated !";
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    this.petsService.delete(id);
    return "Deleted !";
  }
}
