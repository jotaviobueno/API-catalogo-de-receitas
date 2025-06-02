import { formatDate, formatDistanceToNow } from 'date-fns';
import { RecipeEntity } from 'src/domain/entities';

export class RecipePresenter {
  static toHTTP(recipe: RecipeEntity) {
    return {
      ...recipe,
      createdAt: {
        human: formatDistanceToNow(recipe.createdAt),
        formatted: formatDate(recipe.createdAt, "dd/MM/yyyy 'às' HH:mm"),
        default: recipe.createdAt,
      },
      updatedAt: {
        human: formatDistanceToNow(recipe.updatedAt),
        formatted: formatDate(recipe.updatedAt, "dd/MM/yyyy 'às' HH:mm"),
        default: recipe.updatedAt,
      },
    };
  }

  static toHTTPList(recipes: RecipeEntity[]) {
    return recipes.map((recipe) => this.toHTTP(recipe));
  }
}
