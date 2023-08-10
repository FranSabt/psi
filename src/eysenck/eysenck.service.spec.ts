import { Test, TestingModule } from '@nestjs/testing';
import { EysenckService } from './EysenckService';

describe('EysenckService', () => {
  let service: EysenckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EysenckService],
    }).compile();

    service = module.get<EysenckService>(EysenckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
