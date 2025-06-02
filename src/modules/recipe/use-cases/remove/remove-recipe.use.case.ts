import { Injectable } from '@nestjs/common';
import { BaseUseCase } from 'src/common/base';
import { FindRecipeByIdUseCase } from '../find-by-id/find-recipe-by-id.use.case';
import { RecipeRepository } from '../../repositories/recipe.repository';

@Injectable()
export class RemoveRecipeUseCase implements BaseUseCase<boolean> {
  constructor(
    private readonly findRecipeByIdUseCase: FindRecipeByIdUseCase,
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async execute(id: string): Promise<boolean> {
    const recipe = await this.findRecipeByIdUseCase.execute(id);

    const result = await this.recipeRepository.remove(recipe.id);

    return result;
  }
}
