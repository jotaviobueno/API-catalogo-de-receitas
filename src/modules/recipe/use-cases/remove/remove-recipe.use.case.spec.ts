import { Test, TestingModule } from '@nestjs/testing';
import { recipeModuleMock } from '../../recipe.module';
import { RecipeRepository } from '../../repositories/recipe.repository';
import { recipeMock } from 'src/domain/entities';
import { RemoveRecipeUseCase } from './remove-recipe.use.case';

describe('RemoveRecipeUseCase', () => {
  let useCase: RemoveRecipeUseCase;
  let moduleRef: TestingModule;
  let repository: RecipeRepository;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule(recipeModuleMock).compile();

    repository = moduleRef.get<RecipeRepository>(RecipeRepository);
    useCase = moduleRef.get<RemoveRecipeUseCase>(RemoveRecipeUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should Remove', async () => {
    jest.spyOn(repository, 'findById').mockResolvedValue(recipeMock);
    jest.spyOn(repository, 'remove').mockResolvedValue(true);

    const response = await useCase.execute('1');

    expect(response).toStrictEqual(true);
  });
});
