import { Module } from '@nestjs/common';
import { EysenckController } from './eysenck.controller';
import { EysenckService } from './eysenck.service';
import { EysenckTest } from 'src/quiz/eynsenck';

@Module({
  controllers: [EysenckController],
  providers: [EysenckService, EysenckTest],
  //imports: [EysenckTest],
})
export class EysenckModule {}
