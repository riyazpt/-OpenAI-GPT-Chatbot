import { config } from 'dotenv';
import { OpenAI } from 'openai';
import * as readline from 'readline';

config();

const openai = new OpenAI({ apiKey: process.env.API_KEY });

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function getChatResponse(input, retries = 3, delay = 10000) {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: input }],
        });

        const assistantResponse = response.choices[0].message.content;
        console.log(assistantResponse);
    } catch (error) {
        if (error.response && error.response.status === 429 && retries > 0) {
            console.log(`Rate limit exceeded, retrying in ${delay / 1000} seconds...`);
            await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
            await getChatResponse(input, retries - 1, delay * 2); // Retry with doubled delay
        } else {
            console.error('Error fetching chat response:', error.message);
        }
    }
}

userInterface.question('Enter your message: ', async (input) => {
    await getChatResponse(input);
    userInterface.close();
});
