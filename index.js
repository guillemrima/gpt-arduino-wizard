const gptInteraction = require('./src/api_interaction')
const writeFile = require('./utils/process_result');

const main = async () => {
    const result = await gptInteraction()
    const completion = await writeFile(result)
    console.log(completion)
}

main();
