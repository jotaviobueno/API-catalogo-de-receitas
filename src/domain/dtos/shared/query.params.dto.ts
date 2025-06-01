import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class QueryParamsDto {
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({
    type: Number,
    required: false,
  })
  page: number = 1;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({
    type: Number,
    required: false,
  })
  pageSize: number = 10;

  @IsOptional()
  @ApiProperty({
    type: Date,
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  from?: Date;

  @IsOptional()
  @ApiProperty({
    type: Date,
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  to?: Date;
}
