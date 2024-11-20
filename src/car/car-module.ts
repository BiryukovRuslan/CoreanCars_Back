import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CarController } from './car-controller';
import { CarService } from './car-service';

import { Car } from '../../database/models/car.model';

@Module({
  providers: [CarService],
  controllers: [CarController],
  imports: [SequelizeModule.forFeature([Car])],
})
export class CarModule {}