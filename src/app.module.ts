import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadModule } from './file-upload/file-upload.module';
import { MarkdownParserService } from './markdown/markdown.service';

@Module({
  imports: [FileUploadModule],
  controllers: [AppController],
  providers: [AppService, MarkdownParserService],
})
export class AppModule {}
