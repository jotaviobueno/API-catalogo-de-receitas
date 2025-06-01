import { Injectable } from '@nestjs/common';
import { BaseUseCase } from 'src/common/base';
import { RecipeEntity } from 'src/domain/entities';
import { randomUUID } from 'crypto';
import { CreateRecipeDto } from 'src/domain/dtos';
import { RecipeRepository } from '../../repositories/recipe.repository';

@Injectable()
export class CreateRecipeUseCase implements BaseUseCase<RecipeEntity> {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(createDto: CreateRecipeDto): Promise<RecipeEntity> {
    const recipeData = new RecipeEntity({
      ...createDto,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const recipe = await this.recipeRepository.create(recipeData);

    return recipe;
  }
}
