const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const dotenv = require('dotenv')
dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

const run = async(req, res) => {

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Give me only three captions for the picture include emojis and hashtags!";

  const imageParts = [
    fileToGenerativePart(`controllers/car1.jpg`, 'image/jpg'),
  ];

  try{
  const result = await model.generateContent([prompt, ...imageParts]);
  const text = result.response.text();
  return res.status(201).json({message:"Generated Successfully", text})
  }
  catch(e) {
    return res.status(404).json({message:e.message})
  }
}

module.exports = run