import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
import prompt from 'prompt';

dotenv.config();

const configuration = new Configuration({
  apiKey: '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'
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

const getResult = async (pregunta) => 
  await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {role:"user", content: `${pregunta}`}
      ]
  });

;

async function main() {
  try {
    const pregunta = await getPrompt();
    const respuesta = await getResult(pregunta);
    console.log(respuesta.data.choices[0].message.content);
  } catch (error) {
    console.error(error);
  }
}

main();