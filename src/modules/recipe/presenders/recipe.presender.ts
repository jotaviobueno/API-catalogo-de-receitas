import { Formatter } from 'src/common/formatter';
import { RecipeEntity } from 'src/domain/entities';

export class RecipePresenter {
  static toHTTP(recipe: RecipeEntity) {
    return {
      ...recipe,
      createdAt: {
        human: Formatter.distanceToNow(recipe.createdAt),
        formatted: Formatter.formatDate(
          recipe.createdAt,
          "dd/MM/yyyy 'às' HH:mm",
        ),
        default: recipe.createdAt,
      },
      updatedAt: {
        human: Formatter.distanceToNow(recipe.updatedAt),
        formatted: Formatter.formatDate(recipe.updatedAt),
        default: recipe.updatedAt,
      },
    };
  }

  static toHTTPList(recipes: RecipeEntity[]) {
    return recipes.map((recipe) => this.toHTTP(recipe));
  }
}
