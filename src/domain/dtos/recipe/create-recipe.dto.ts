import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @IsString({ each: true })
  @IsArray()
  @ArrayNotEmpty()
  @ApiProperty({ type: [String] })
  ingredients: string[];
}

export const createRecipeDtoMock: CreateRecipeDto = {
  title: 'Bolo de chocolate',
  description: 'Como fazer um bolo de chocolate',
  ingredients: ['chocolate', 'ovos'],
};
