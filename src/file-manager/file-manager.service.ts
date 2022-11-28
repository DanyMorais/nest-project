import { Injectable } from '@nestjs/common';
import { CreateFilemanagerDto } from './dto/create-file-manager.dto';
import { UpdateFilemanagerDto } from './dto/update-file-manager.dto';
import * as fileAccess from 'fs';
import { FileException } from './exceptions/file.exception';

@Injectable()
export class FilemanagerService {

  create(name: string, content: string): string {

    const filePath = `resources/${name}.txt`;

    if (fileAccess.existsSync(filePath))
      throw new FileException(`File with the name ${name} already exists!`);

    fileAccess.writeFileSync(filePath, content);

    return name + '.txt';

  }

  findAll() {
    const filePath = `resources`
    return fileAccess.readdirSync(filePath);
  }

  findOne(filename: string) {
    const filePath = `resources/${filename}.txt`;
    const data = fileAccess.readFileSync(filePath, 'utf8');

    if (fileAccess.existsSync(filePath)) {
      return data;
    }
    throw new FileException(`File with the name ${filename} not exist`)
  }

  update(filename: string, content: string) {
    const filePath = `resources/${filename}.txt`;

    fileAccess.writeFileSync(filePath, content);

    return filename + '.txt';
  }

  remove(filename: string) {

    const filePath = `resources/${filename}.txt`;

    if (fileAccess.existsSync(filePath)) {
      fileAccess.unlinkSync(filePath);
      return ` ${filename}.txt deleted `
    }
    throw new FileException(`File with the name ${filename} not exist`)

  }
}
