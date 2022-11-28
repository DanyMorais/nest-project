import { Test, TestingModule } from '@nestjs/testing';
import { FilemanagerService } from './file-manager.service';

describe('FileManagerService', () => {
  let service: FilemanagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilemanagerService],
    }).compile();

    service = module.get<FilemanagerService>(FilemanagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
