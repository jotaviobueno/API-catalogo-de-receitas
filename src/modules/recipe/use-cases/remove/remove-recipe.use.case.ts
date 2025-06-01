import { Injectable } from '@nestjs/common';
import { BaseUseCase } from 'src/common/base';
import { FindRecipeByIdUseCase } from '../find-by-id/find-recipe-by-id.use.case';
import { RecipeRepository } from '../../repositories/recipe.repository';

@Injectable()
export class RemoveRecipeUseCase implements BaseUseCase<void> {
  constructor(
    private readonly findRecipeByIdUseCase: FindRecipeByIdUseCase,
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const recipe = await this.findRecipeByIdUseCase.execute(id);

    await this.recipeRepository.remove(recipe.id);
  }
}
