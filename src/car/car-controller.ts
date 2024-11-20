import { Body, Controller, Post } from '@nestjs/common';
import { CarCreateDto } from './dto/create-car-dto';
import { CarService } from './car-service';
import { Car } from 'database/models/car.model';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(private readonly service: CarService) {}

  @Post()
  async createNew(@Body() dto: CarCreateDto) {
    return await this.service.createNew(dto);
  }
}
