import { Module } from '@nestjs/common';
import { FilemanagerService } from './file-manager.service';
import { FilemanagerController } from './file-manager.controller';

@Module({
  controllers: [FilemanagerController],
  providers: [FilemanagerService]
})
export class FileManagerModule {
  
}
