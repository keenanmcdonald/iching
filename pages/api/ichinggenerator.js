import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function Generator(req, res) {
  console.log("body: ", req.body);
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: req.body.iChinger,
    temperature: 0.6,
    max_tokens: 2000,
  });
  console.log("data: ", completion);
  res.status(200).json({ result: completion?.data.choices[0].text });
}
