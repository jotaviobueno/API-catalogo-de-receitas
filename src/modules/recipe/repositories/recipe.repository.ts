import { Injectable } from '@nestjs/common';
import { RecipeEntity } from 'src/domain/entities';

@Injectable()
export class RecipeRepository {
  private readonly db: RecipeEntity[] = [
    {
      title: 'Bolo de chocolate',
      description: 'Como fazer um bolo de chocolate',
      ingredients: ['chocolate', 'ovos'],
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  create(recipe: RecipeEntity): Promise<RecipeEntity> {
    this.db.push(recipe);
    return Promise.resolve(recipe);
  }

  findAll(): Promise<RecipeEntity[]> {
    return Promise.resolve(this.db);
  }

  findById(id: string): Promise<RecipeEntity | undefined> {
    const recipe = this.db.find((recipe) => {
      return recipe.id === id;
    });

    return Promise.resolve(recipe);
  }

  update(recipe: RecipeEntity): Promise<RecipeEntity> {
    const index = this.db.findIndex((recipe) => recipe.id === recipe.id);

    if (index !== -1) {
      this.db[index] = recipe;
    }

    return Promise.resolve(recipe);
  }

  remove(id: string): Promise<boolean> {
    const index = this.db.findIndex((recipe) => recipe.id === id);

    if (index !== -1) {
      this.db.splice(index, 1);
    }

    return Promise.resolve(true);
  }
}
