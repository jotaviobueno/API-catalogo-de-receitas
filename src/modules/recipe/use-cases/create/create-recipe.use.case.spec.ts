import { Test, TestingModule } from '@nestjs/testing';
import { CreateRecipeUseCase } from './create-recipe.use.case';
import { recipeModuleMock } from '../../recipe.module';
import { RecipeRepository } from '../../repositories/recipe.repository';
import { recipeMock } from 'src/domain/entities';
import { createRecipeDtoMock } from 'src/domain/dtos';

describe('CreateRecipeUseCase', () => {
  let useCase: CreateRecipeUseCase;
  let moduleRef: TestingModule;
  let repository: RecipeRepository;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule(recipeModuleMock).compile();

    repository = moduleRef.get<RecipeRepository>(RecipeRepository);
    useCase = moduleRef.get<CreateRecipeUseCase>(CreateRecipeUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should create', async () => {
    jest.spyOn(repository, 'create').mockResolvedValue(recipeMock);

    const response = await useCase.execute(createRecipeDtoMock);

    expect(response).toStrictEqual(recipeMock);
  });
});
