import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { FileManagerModule } from './file-manager/file-manager.module';

@Module({
  imports: [PersonsModule, FileManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
