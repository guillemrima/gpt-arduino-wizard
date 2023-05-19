const gptInteraction = require('./src/api_interaction')
const writeFile = require('./utils/process_completion');

const main = async () => {
    const completion = await gptInteraction()
    const result = await writeFile(completion)
    console.log(result)
}

main();
