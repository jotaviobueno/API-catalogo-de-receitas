import { Test, TestingModule } from '@nestjs/testing';
import { recipeModuleMock } from '../../recipe.module';
import { RecipeRepository } from '../../repositories/recipe.repository';
import { recipeMock } from 'src/domain/entities';
import { UpdateRecipeUseCase } from './update-recipe.use.case';
import { updateRecipeDtoMock } from 'src/domain/dtos';

describe('UpdateRecipeUseCase', () => {
  let useCase: UpdateRecipeUseCase;
  let moduleRef: TestingModule;
  let repository: RecipeRepository;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule(recipeModuleMock).compile();

    repository = moduleRef.get<RecipeRepository>(RecipeRepository);
    useCase = moduleRef.get<UpdateRecipeUseCase>(UpdateRecipeUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should Remove', async () => {
    jest.spyOn(repository, 'findById').mockResolvedValue(recipeMock);
    jest.spyOn(repository, 'update').mockResolvedValue({
      ...recipeMock,
      title: 'Bolo legal, alteração do titulo',
    });

    const response = await useCase.execute(updateRecipeDtoMock);

    expect(response).toStrictEqual({
      ...recipeMock,
      title: 'Bolo legal, alteração do titulo',
    });
  });
});
