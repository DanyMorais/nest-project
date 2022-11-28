import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FilemanagerService } from './file-manager.service';
import { CreateFilemanagerDto } from './dto/create-file-manager.dto';
import { UpdateFilemanagerDto } from './dto/update-file-manager.dto';
import { ApiResponse } from 'src/common/response/response.model';

@Controller('files')
export class FilemanagerController {
  constructor(private readonly filemanagerService: FilemanagerService) { }

  @Post()
  create(@Body() createFilemanagerDto: CreateFilemanagerDto): ApiResponse {
    const fileName = this.filemanagerService.create(createFilemanagerDto.name, createFilemanagerDto.content);
    return new ApiResponse(`File ${fileName} created successfully!`);
  }

  @Get()
  findAll() {
    return this.filemanagerService.findAll();
  }

  @Get(':filename')
  findOne(@Param('filename') filename: string) {
    return this.filemanagerService.findOne(filename);
  }

  @Put(':filename')
  update(@Param('filename') filename: string, @Body() updateFilemanagerDto: UpdateFilemanagerDto) {
    return this.filemanagerService.update(filename, updateFilemanagerDto.content);
  }

  @Delete(':filename')
  remove(@Param('filename') filename: string) {
    return this.filemanagerService.remove(filename);
  }
}
