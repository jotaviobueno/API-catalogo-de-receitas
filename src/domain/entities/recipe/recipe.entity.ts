import { ApiProperty } from '@nestjs/swagger';

export class RecipeEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ type: [String] })
  ingredients: string[];

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  constructor(data?: Partial<RecipeEntity>) {
    Object.assign(this, data);
  }
}

export const recipeMock: RecipeEntity = {
  id: '1',
  title: 'Bolo de chocolate',
  description: 'Como fazer um bolo de chocolate',
  ingredients: ['chocolate', 'ovos'],
  createdAt: new Date(),
  updatedAt: new Date(),
};
