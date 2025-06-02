import { Injectable } from '@nestjs/common';
import { BaseUseCase } from 'src/common/base';
import { RecipeEntity } from 'src/domain/entities';
import { RecipeRepository } from '../../repositories/recipe.repository';

@Injectable()
export class FindAllRecipeUseCase implements BaseUseCase<RecipeEntity[]> {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(): Promise<RecipeEntity[]> {
    const recipes = await this.recipeRepository.findAll();

    return recipes;
  }
}
