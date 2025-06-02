import { Module } from '@nestjs/common';
import { RecipeController } from './controllers/recipe.controller';
import { RecipeRepository } from './repositories/recipe.repository';
import { CreateRecipeUseCase } from './use-cases/create/create-recipe.use.case';
import { FindRecipeByIdUseCase } from './use-cases/find-by-id/find-recipe-by-id.use.case';
import { FindAllRecipeUseCase } from './use-cases/find-all/find-all-recipe.use.case';
import { RemoveRecipeUseCase } from './use-cases/remove/remove-recipe.use.case';
import { UpdateRecipeUseCase } from './use-cases/update/update-recipe.use.case';

export const recipeModuleMock = {
  controllers: [RecipeController],
  providers: [
    RecipeRepository,
    CreateRecipeUseCase,
    FindRecipeByIdUseCase,
    FindAllRecipeUseCase,
    UpdateRecipeUseCase,
    RemoveRecipeUseCase,
  ],
};

@Module(recipeModuleMock)
export class RecipeModule {}
