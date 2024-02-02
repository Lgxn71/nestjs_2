import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('');
  use(req: Request, res: Response, next: NextFunction) {
    res.send('<h1>Salam jigi</h1>');
    this.logger.log(req.method + ' ' + req.url + ' from logger');

    next();
  }
}
