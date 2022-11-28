import { Test, TestingModule } from '@nestjs/testing';
import { FilemanagerController } from './file-manager.controller';
import { FilemanagerService } from './file-manager.service';

describe('FilemanagerController', () => {
  let controller: FilemanagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilemanagerController],
      providers: [FilemanagerService],
    }).compile();

    controller = module.get<FilemanagerController>(FilemanagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
