import axios from 'axios';

const API_URL = 'https://api.echogpt.live/v1/chat/completions';
const API_KEY = 'YOUR_API_KEY'; // Use environment variable

export const sendMessageToEchoGPT = async (messages, model = 'gpt-4o') => {
  try {
    const response = await axios.post(
      API_URL,
      {
        messages,
        model
      },
      {
        headers: {
          'x-api-key': API_KEY
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending message to EchoGPT:', error);
    throw error;
  }
};