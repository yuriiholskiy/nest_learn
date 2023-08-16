import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'sss',
      brand: 'dasdas',
      flavors: ['one', 'two'],
    },
  ];
  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    const coffee = this.coffees.find((c) => c.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee with id = ${id} not found`);
    }
    return coffee;
  }
  create(createCoffeeDTO: any) {
    this.coffees.push(createCoffeeDTO);
  }
  update(id: string, updateCoffeDTO: any) {
    const existedCoffee = this.findOne(id);
    if (existedCoffee) {
    }
  }
  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((c) => c.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
