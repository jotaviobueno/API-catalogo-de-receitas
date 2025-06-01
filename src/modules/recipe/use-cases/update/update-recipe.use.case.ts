import { Injectable } from '@nestjs/common';
import { BaseUseCase } from 'src/common/base';
import { UpdateRecipeDto } from 'src/domain/dtos';
import { RecipeEntity } from 'src/domain/entities';
import { FindRecipeByIdUseCase } from '../find-by-id/find-recipe-by-id.use.case';
import { RecipeRepository } from '../../repositories/recipe.repository';

@Injectable()
export class UpdateRecipeUseCase implements BaseUseCase<RecipeEntity> {
  constructor(
    private readonly findRecipeByIdUseCase: FindRecipeByIdUseCase,
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async execute(updateDto: UpdateRecipeDto): Promise<RecipeEntity> {
    const recipe = await this.findRecipeByIdUseCase.execute(updateDto.id);

    const recipeData = new RecipeEntity({
      ...recipe,
      ...updateDto,
    });

    const update = await this.recipeRepository.update(recipeData);

    return update;
  }
}
