const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv').config();
const prompt = require('prompt');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const getPrompt = () => {
  return new Promise((resolve, reject) => {
    prompt.start();
    prompt.message = '';
    prompt.get(['message'], function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result.message);
      }
    });
  });
};

const getResult = async (prompt) => 
  await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {role:"user", content: `${prompt}`}
      ],
      temperature: 0.1
  });


async function gptInteraction() {
  try {
    const prompt = await getPrompt();
    const completion = await getResult(prompt);
    return completion.data.choices[0].message.content;
  } catch (error) {
    return error;
  }
}

module.exports = gptInteraction
