# OpenAI GPT Chatbot

A simple command-line chatbot application using OpenAI's GPT-3.5-turbo API. This project demonstrates basic API integration, handling of rate limits, and a retry mechanism.

## Features

- **User Interaction**: Accepts user input through the command line and returns responses generated by the GPT model.
- **API Integration**: Uses OpenAI's GPT-3.5-turbo API to generate responses.
- **Error Handling**: Implements retry logic to handle API rate limits gracefully.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **OpenAI API**: Provides the chatbot responses
- **dotenv**: For managing environment variables
- **readline**: Built-in Node.js module for reading input from the command line

## Setup Instructions

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/riyazpt/-OpenAI-GPT-Chatbot
    cd openai-gpt-chatbot
    ```

2. **Install Dependencies**:

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

    ```bash
    npm install openai dotenv
    ```

3. **Setup Environment Variables**:

    Create a `.env` file in the root directory and add your OpenAI API key:

    ```bash
    API_KEY=your_openai_api_key_here
    ```

4. **Run the Application**:

    ```bash
    npm run dev
    ```

5. **Interact with the Chatbot**:

    Enter a message when prompted, and receive responses from the chatbot.

