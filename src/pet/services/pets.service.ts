import { Injectable } from "@nestjs/common";
import { CreatePetDto } from "../dto/create-pet.dto";

const listPets = [
  {
    name: "jessie",
    age: 2,
    breed: "eng",
  },
  {
    name: "tom",
    age: 1,
    breed: "usa",
  },
  {
    name: "jerry",
    age: 2,
    breed: "usa",
  },
  {
    name: "some",
    age: 2,
    breed: "usa",
  },
  {
    name: "eco",
    age: 3,
    breed: "eng",
  },
  {
    name: "choe",
    age: 2,
    breed: "usa",
  },
];

@Injectable()
export class PetsService {
  findAll() {
    return listPets;
  }

  findById(id: number) {
    return listPets[id - 1];
  }

  create(createPetDto: CreatePetDto) {
    const pet = {
      name: createPetDto.name,
      age: createPetDto.age,
      breed: createPetDto.breed,
    };

    listPets.push(pet);
  }

  update(id: number, createPetDto: CreatePetDto) {
    const pet = listPets[id - 1];
    if (typeof pet == "undefined") {
      throw Error("Pet not found");
    }
    pet.name = createPetDto.name;
    pet.age = createPetDto.age;
    pet.breed = createPetDto.breed;
  }

  delete(id: number) {
    listPets.slice(id - 1, 1);
  }
}
