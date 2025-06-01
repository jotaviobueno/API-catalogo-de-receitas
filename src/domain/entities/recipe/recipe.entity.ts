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
