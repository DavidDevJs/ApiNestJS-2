import { Module, Global } from '@nestjs/common';

const API_KEY = '12314325234';
const API_PROD = 'ProdXYzzz123';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
