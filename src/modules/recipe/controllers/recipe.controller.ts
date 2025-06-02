import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRecipeDto, UpdateRecipeDto } from 'src/domain/dtos';
import { RecipeEntity } from 'src/domain/entities';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateRecipeUseCase } from '../use-cases/create/create-recipe.use.case';
import { FindRecipeByIdUseCase } from '../use-cases/find-by-id/find-recipe-by-id.use.case';
import { FindAllRecipeUseCase } from '../use-cases/find-all/find-all-recipe.use.case';
import { RemoveRecipeUseCase } from '../use-cases/remove/remove-recipe.use.case';
import { UpdateRecipeUseCase } from '../use-cases/update/update-recipe.use.case';

@ApiTags('Recipe')
@Controller('recipe')
export class RecipeController {
  constructor(
    private readonly createUseCase: CreateRecipeUseCase,
    private readonly findByIdUseCase: FindRecipeByIdUseCase,
    private readonly findAllUseCase: FindAllRecipeUseCase,
    private readonly removeUseCase: RemoveRecipeUseCase,
    private readonly updateUseCase: UpdateRecipeUseCase,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: RecipeEntity })
  @ApiBody({ type: CreateRecipeDto })
  create(@Body() createDto: CreateRecipeDto): Promise<RecipeEntity> {
    return this.createUseCase.execute(createDto);
  }

  @Get('/:id')
  @ApiNotFoundResponse({ description: 'Recipe not found' })
  @ApiOkResponse({ type: RecipeEntity })
  findById(@Param('id') id: string): Promise<RecipeEntity> {
    return this.findByIdUseCase.execute(id);
  }

  @Get()
  @ApiOkResponse({ type: [RecipeEntity] })
  findAll(): Promise<RecipeEntity[]> {
    return this.findAllUseCase.execute();
  }

  @Patch('/:id')
  @ApiNotFoundResponse({ description: 'Recipe not found' })
  @ApiOkResponse({ type: RecipeEntity })
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateRecipeDto,
  ): Promise<RecipeEntity> {
    return this.updateUseCase.execute({ ...updateDto, id });
  }

  @Delete('/:id')
  @ApiNotFoundResponse({ description: 'Recipe not found' })
  @ApiNoContentResponse()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): Promise<void> {
    return this.removeUseCase.execute(id);
  }
}
