import { PartialType } from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
  id: string;
}

export const updateRecipeDtoMock: UpdateRecipeDto = {
  id: '1',
  title: 'Bolo de chocolate',
  description: 'Como fazer um bolo de chocolate',
  ingredients: ['chocolate', 'ovos'],
};
