import { Injectable, Logger } from '@nestjs/common';
import { marked } from 'marked';

@Injectable()
export class MarkdownParserService {
  private readonly logger = new Logger(MarkdownParserService.name);

  constructor() {}

  parseMarkdown(markdownText: string) {
    this.logger.debug('Parsing markdown text');

    // Convert Markdown to HTML
    const html = marked(markdownText);

    this.logger.debug('Parsed HTML:', html);

    return html;
  }
}
