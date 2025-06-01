import { ApiProperty } from '@nestjs/swagger';
import { QueryParamsDto } from '../shared';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class SearchRecipeDto extends QueryParamsDto {
  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => value.split(','))
  @IsArray()
  @IsString({ each: true })
  ingredients?: string[];
}
