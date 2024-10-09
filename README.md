# Markdown Note-Taking App

A simple and intuitive Markdown note-taking application built with NestJS. This app allows users to upload Markdown files, check grammar and spelling, and parse Markdown to HTML.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Credits](#credits)

## Features

- Upload Markdown files
- Check grammar and spelling in Markdown notes
- Parse Markdown into HTML for previewing
- User-friendly interface

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/markdown-note-taking-app.git
   cd markdown-note-taking-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run start
   ```

   The application will start on `http://localhost:3000`.

## Usage

- Upload a Markdown file by sending a POST request to `/upload`.
- Check the grammar of a Markdown file by sending a GET request to `/check-grammar/:fileName`.
- Parse the uploaded Markdown file into HTML format `/parse-markdown/:fileName`.

## API Endpoints

| Method | Endpoint                    | Description                          |
| ------ | --------------------------- | ------------------------------------ |
| POST   | `/upload`                   | Upload a Markdown file               |
| GET    | `/check-grammar/:fileName`  | Check grammar for the specified file |
| GET    | `/parse-markdown/:fileName` | Parse to HTML                        |

## Technologies Used

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that compiles to plain JavaScript.
- [marked](https://github.com/markedjs/marked) - A low-level Markdown compiler for parsing Markdown without caching or blocking for long periods.
- [Typo.js](https://github.com/cfinke/Typo.js) - A JavaScript spell checker that uses Hunspell dictionaries.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## Credits

This project idea was inspired by the [Markdown Note Taking App](https://roadmap.sh/projects/markdown-note-taking-app) roadmap.
