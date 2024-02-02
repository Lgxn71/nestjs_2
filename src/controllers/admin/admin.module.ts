import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import AdminController from './admin.controller';
import { ProductService } from 'src/services/product/product.service';

@Module({
  providers: [AdminService, ProductService],
  controllers: [AdminController],
})
export class AdminModule {}
