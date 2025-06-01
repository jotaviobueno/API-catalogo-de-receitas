import { Injectable } from '@nestjs/common';
import { BaseUseCase } from 'src/common/base';
import { SearchRecipeDto } from 'src/domain/dtos';
import { RecipeEntity } from 'src/domain/entities';
import { ResultEntity } from 'src/domain/entities/shared';

@Injectable()
export class FindAllRecipeUseCase
  implements BaseUseCase<ResultEntity<RecipeEntity>>
{
  async execute(
    queryParams: SearchRecipeDto,
  ): Promise<ResultEntity<RecipeEntity>> {
    const data: RecipeEntity[] = [];

    return Promise.resolve(
      (() => {
        const result = new ResultEntity<RecipeEntity>();
        result.data = data;
        result.info = {
          total: 0,
          page: 1,
          pages: 1,
          pageSize: 10,
        };
        return result;
      })(),
    );
  }
}
