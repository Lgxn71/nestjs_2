import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from 'src/services/product/product.service';

@Controller('admin')
export default class AdminController {
  constructor(private readonly productService: ProductService) {}
  @Get('/add-product')
  async getProduct() {
    return await this.productService.getProducts();
  }

  @Post('/add-product')
  async addProduct(@Body() dto: any) {
    console.log(dto);
    return await this.productService.addProduct();
  }
}
