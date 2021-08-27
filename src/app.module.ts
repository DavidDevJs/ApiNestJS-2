import { Module, HttpModule, HttpService } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductosModule } from './productos/productos.module';

const API_KEY = '12314325234';
const API_PROD = 'ProdXYzzz123';

@Module({
  imports: [UsersModule, ProductosModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_PROD : API_KEY,
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        //request a una api externa(esto no se debe hacer solo es por cuestiones didacticas) lo haremos a travez del modulo http de Nest

        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
