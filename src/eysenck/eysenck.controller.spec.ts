import { Test, TestingModule } from '@nestjs/testing';
import { EysenckController } from './eysenck.controller';

describe('EysenckController', () => {
  let controller: EysenckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EysenckController],
    }).compile();

    controller = module.get<EysenckController>(EysenckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
