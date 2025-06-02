import { Test, TestingModule } from '@nestjs/testing';
import { recipeModuleMock } from '../../recipe.module';
import { RecipeRepository } from '../../repositories/recipe.repository';
import { recipeMock } from 'src/domain/entities';
import { FindRecipeByIdUseCase } from './find-recipe-by-id.use.case';
import { HttpException } from '@nestjs/common';

describe('FindAllRecipeUseCase', () => {
  let useCase: FindRecipeByIdUseCase;
  let moduleRef: TestingModule;
  let repository: RecipeRepository;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule(recipeModuleMock).compile();

    repository = moduleRef.get<RecipeRepository>(RecipeRepository);
    useCase = moduleRef.get<FindRecipeByIdUseCase>(FindRecipeByIdUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should findById', async () => {
    jest.spyOn(repository, 'findById').mockResolvedValue(recipeMock);

    const response = await useCase.execute('1');

    expect(response).toStrictEqual(recipeMock);
  });

  it('Should throw an error when not found recipe', async () => {
    jest.spyOn(repository, 'findById').mockResolvedValue(undefined);

    const spyFind = jest.spyOn(useCase, 'execute');

    await expect(useCase.execute('1')).rejects.toThrow(HttpException);

    expect(spyFind).toHaveBeenCalledTimes(1);
  });
});
