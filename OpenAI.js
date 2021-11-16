require('dotenv').config()
const OpenAI = require('openai-api')

const openai = new OpenAI(process.env.OPENAI_API_KEY)

let startPrompt =
	'<|endoftext|>/* I start with a blank HTML page, and incrementally modify it via <script> injection. Written for Chrome. */\n/*'
async function gptResponse(q) {
	const { data } = await openai.complete({
		engine: 'davinci-codex',
		prompt: `${startPrompt} ${q}/*`,
		temperature: 0,
		max_tokens: 300,
		top_p: 0,
		frequency_penalty: 0,
		presence_penalty: 0,
	})
	return data.choices[0].text
}

module.exports = gptResponse
