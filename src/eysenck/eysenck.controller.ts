import { Body, Controller, Get, Post } from '@nestjs/common';
import { EysenckService } from './eysenck.service';

@Controller('eysenck')
export class EysenckController {
  constructor(private readonly ensenckService: EysenckService) {}
  @Get()
  sendTest() {
    return this.ensenckService.SendTest();
  }

  @Post()
  processTest(@Body() data: any) {
    return this.ensenckService.ProcessTest(data);
  }
}
