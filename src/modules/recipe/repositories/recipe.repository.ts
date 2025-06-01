import { Injectable } from '@nestjs/common';
import { RecipeEntity } from 'src/domain/entities';

@Injectable()
export class RecipeRepository {
  private readonly db: RecipeEntity[] = [];

  create(recipe: RecipeEntity): Promise<RecipeEntity> {
    this.db.push(recipe);
    return Promise.resolve(recipe);
  }

  findById(id: string): Promise<RecipeEntity | undefined> {
    const recipe = this.db.find((recipe) => recipe.id === id);

    return Promise.resolve(recipe);
  }

  remove(id: string): Promise<void> {
    const index = this.db.findIndex((recipe) => recipe.id === id);

    if (index !== -1) {
      this.db.splice(index, 1);
    }

    return Promise.resolve();
  }

  update(recipe: RecipeEntity): Promise<RecipeEntity> {
    const index = this.db.findIndex((recipe) => recipe.id === recipe.id);

    if (index !== -1) {
      this.db[index] = recipe;
    }

    return Promise.resolve(recipe);
  }
}
