import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

import { ProductModule } from './services/product/product.module';
import { AdminModule } from './controllers/admin/admin.module';

import { NotFoundExceptionFilter } from './filters/NotFoundExceptionFilter/NotFoundException.filter';

@Module({
  imports: [ProductModule, AdminModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/add-product');
  }
}
