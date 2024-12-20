# Chatbot Project - README

## Overview

Welcome to the **StudySmart Bot** project! This application is a user-friendly chatbot powered by OpenAI's GPT model. It provides interactive and engaging responses to user queries, making it a versatile tool for various conversational and educational needs.

## Features

- **Real-time Interaction:** Users can chat with the bot in a conversational manner.
- **Chat History:** Maintains the conversation context for more meaningful interactions.
- **User-Friendly Interface:** Leveraging `readline-sync` for seamless input/output in the console.
- **Color-Coded Responses:** Highlights the bot and user text for better readability using the `colors` package.

## Technology Stack

- **Node.js:** Core runtime environment.
- **OpenAI API:** GPT-3.5-turbo model for generating responses.
- **Dependencies:**
  - `dotenv` for managing environment variables.
  - `readline-sync` for interactive user input.
  - `colors` for styling console output.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd chatbot
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your-api-key-here
   ```

## Usage

1. Start the chatbot:
   ```bash
   npm start
   ```

2. Begin interacting with the bot. Type your messages, and the bot will respond.

3. Type `exit` to end the session.

## Project Structure

- **index.js:** Entry point of the application.
- **open-ai.js:** Configuration for interacting with the OpenAI API.
- **package.json:** Project metadata and dependencies.
- **.env:** Environment variables (contains the API key).

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Author

Developed by **Paulo Monayer**.

---

Feel free to reach out for any queries or suggestions!
