import KoaRouter from 'koa-router';

const DECORATOR_GET = (path:string) => {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    BaseController.Mapper.get(path, target[propertyKey]);
  }
};

const DECORATOR_POST = (path:string) => {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    BaseController.Mapper.post(path, target[propertyKey]);
  }
};

const DECORATOR_PUT = (path:string) => {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    BaseController.Mapper.put(path, target[propertyKey]);
  }
};

const DECORATOR_DELETE = (path:string) => {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    BaseController.Mapper.delete(path, target[propertyKey]);
  }
};

export default class BaseController {
  public static Mapper: KoaRouter = new KoaRouter();
  public static GET: Function = DECORATOR_GET;
  public static POST: Function = DECORATOR_POST;
  public static PUT: Function = DECORATOR_PUT;
  public static DELETE: Function = DECORATOR_DELETE;
}