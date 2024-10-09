import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'fs/promises';

@Controller('file-upload')
export class FileUploadController {
  private readonly logger = new Logger(FileUploadController.name);
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileUploadService.uploadFile(file);
  }

  @Get('check-grammar/:fileName')
  async checkGrammar(@Param('fileName') fileName: string) {
    const uploadsDir = path.join(process.cwd(), 'uploads');

    try {
      // Get all files in the uploads directory
      const files = await fs.readdir(uploadsDir);

      // Create a regex to match any file that contains the provided fileName
      const regex = new RegExp(`${fileName}`, 'i'); // 'i' makes it case-insensitive

      // Find the matching file
      const matchingFile = files.find((file) => regex.test(file));

      if (!matchingFile) {
        throw new BadRequestException('File not found');
      }

      // Construct the full file path
      const filePath = path.join(uploadsDir, matchingFile);

      // Call the grammar check method in the service
      this.logger.debug(filePath, ' sucessfully checked');
      return this.fileUploadService.checkGrammar(filePath);
    } catch (error) {
      throw new BadRequestException('Error searching for file');
    }
  }
}
