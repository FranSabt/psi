import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EysenckModule } from './eysenck/eysenck.module';
//import { EysenckTest } from './quiz/eynsenck';

@Module({
  imports: [EysenckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
