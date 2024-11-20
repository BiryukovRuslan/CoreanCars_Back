import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate, IsNotEmpty, IsJSON } from 'class-validator';

export class CarCreateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty()
  @IsDate()
  year: Date;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  mileage: number;

  @ApiProperty()
  @IsJSON()
  @IsNotEmpty()
  image: any;
}
