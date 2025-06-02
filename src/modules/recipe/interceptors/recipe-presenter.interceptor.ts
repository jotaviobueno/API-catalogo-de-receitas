import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecipeEntity } from 'src/domain/entities';
import { RecipePresenter } from '../presenders/recipe.presender';

@Injectable()
export class RecipePresenterInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: RecipeEntity | RecipeEntity[]) => {
        if (Array.isArray(data)) {
          return RecipePresenter.toHTTPList(data);
        }

        if (typeof data === 'boolean') return data;

        return RecipePresenter.toHTTP(data);
      }),
    );
  }
}
