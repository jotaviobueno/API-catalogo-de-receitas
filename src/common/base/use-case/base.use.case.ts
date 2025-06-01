export abstract class BaseUseCase<T> {
  abstract execute(...params): Promise<T>;
}
