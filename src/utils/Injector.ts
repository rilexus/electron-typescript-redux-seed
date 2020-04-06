import { AnyAction } from "redux";

export class Injector {
  static middlewares: any = [];
  static reducers = {};

  static registerMiddleware(
    middleware: (store: any) => (next: any) => (action: AnyAction) => void
  ) {
    this.middlewares.push(middleware);
  }

  static getMiddlewares() {
    return this.middlewares;
  }

  static registerReducer<T = any>(reducer: (state: T, action: AnyAction) => T) {
    this.reducers = { ...this.reducers, [reducer.name]: reducer };
  }
  static getReducers() {
    return this.reducers;
  }
}
