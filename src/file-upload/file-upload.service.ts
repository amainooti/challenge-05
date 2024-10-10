import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs/promises';
import Typo = require('typo-js');
import { marked } from 'marked';
import path = require('path');

@Injectable()
export class FileUploadService {
  private readonly logger = new Logger(FileUploadService.name);
  constructor() {}
  uploadFile(file: Express.Multer.File) {
    this.logger.debug(file);
    if (!file) {
      throw new BadRequestException('no file uploaded');
    }

    // validate file type
    const allowedMimeTypes = 'text/markdown';

    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException('File does not match supported format.');
    }

    // validate file size (e.g., max 5mb)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new BadRequestException('file is too large!');
    }

    return { message: 'File uploaded successfully', filePath: file.path };
  }

  async checkGrammar(filePath: string) {
    try {
      let dictionary = new Typo('en_US');

      // Read the markdown file content
      const markdownText = await fs.readFile(filePath, 'utf-8');

      // Example of checking if a sentence or words are spelled correctly
      const words = markdownText.split(/\s+/); // Split text into words
      const misspelledWords = words.filter((word) => !dictionary.check(word));

      // Log misspelled words for debugging
      this.logger.debug('Misspelled words:', misspelledWords);

      if (misspelledWords.length === 0) {
        return { message: 'No spelling errors found' };
      }

      return { message: 'Spelling errors found', errors: misspelledWords };
    } catch (error) {
      this.logger.error('Error checking grammar', error);
      throw new BadRequestException('Error checking grammar');
    }
  }

<<<<<<< HEAD
  async parseMarkdown(markdownText: string, matchingFile: string) {
=======
  parseMarkdown(markdownText: string, matchingFile: string) {
>>>>>>> bd4cba0ccafd0739654a322b4322a18859191b60
    this.logger.debug('Parsing markdown text');

    this.logger.debug(markdownText);
    // Convert Markdown to HTML
<<<<<<< HEAD
    const html = await marked(markdownText);
=======
    const html = marked(markdownText);

>>>>>>> bd4cba0ccafd0739654a322b4322a18859191b60
    this.logger.debug('Parsed HTML:', html);
    const outputDir = path.join(process.cwd(), 'output');
    const outputPath = path.join(outputDir, `${matchingFile}.html`);

    try {
      fs.mkdir(outputDir, { recursive: true });
<<<<<<< HEAD
      fs.writeFile(outputPath, html, 'utf-8');

=======
      fs.writeFile(outputPath, html as string, 'utf-8');
>>>>>>> bd4cba0ccafd0739654a322b4322a18859191b60
      this.logger.debug(`HTML saved to ${outputPath}`);
      return html;
    } catch (error) {
      this.logger.error('Error saving parsed HTML to file', error);
      throw error;
    }
  }
}
