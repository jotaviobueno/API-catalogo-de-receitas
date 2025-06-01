import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseUseCase } from 'src/common/base';
import { RecipeEntity } from 'src/domain/entities';
import { RecipeRepository } from '../../repositories/recipe.repository';

@Injectable()
export class FindRecipeByIdUseCase implements BaseUseCase<RecipeEntity> {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(id: string): Promise<RecipeEntity> {
    const recipe = await this.recipeRepository.findById(id);

    if (!recipe)
      throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);

    return recipe;
  }
}
