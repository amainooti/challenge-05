import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadModule } from './file-upload/file-upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    FileUploadModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'output'), // Point to the folder with HTML files
      serveRoot: '/static', // Serve files from /static path
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
