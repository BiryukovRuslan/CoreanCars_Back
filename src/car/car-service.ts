import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Car } from '../../database/models/car.model';

import { CarCreateDto } from './dto/create-car-dto';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car) private readonly carModel: typeof Car) {}

  async createNew(dto: CarCreateDto) {
    await this.carModel.create(dto);
  }
}
