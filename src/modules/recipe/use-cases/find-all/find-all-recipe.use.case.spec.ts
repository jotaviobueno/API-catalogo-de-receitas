import { Test, TestingModule } from '@nestjs/testing';
import { recipeModuleMock } from '../../recipe.module';
import { RecipeRepository } from '../../repositories/recipe.repository';
import { recipeMock } from 'src/domain/entities';
import { FindAllRecipeUseCase } from './find-all-recipe.use.case';

describe('FindAllRecipeUseCase', () => {
  let useCase: FindAllRecipeUseCase;
  let moduleRef: TestingModule;
  let repository: RecipeRepository;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule(recipeModuleMock).compile();

    repository = moduleRef.get<RecipeRepository>(RecipeRepository);
    useCase = moduleRef.get<FindAllRecipeUseCase>(FindAllRecipeUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should findAll', async () => {
    jest.spyOn(repository, 'findAll').mockResolvedValue([recipeMock]);

    const response = await useCase.execute();

    expect(response).toStrictEqual([recipeMock]);
  });
});
