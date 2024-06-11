const { GoogleGenerativeAI } = require("@google/generative-ai");
// Access your API key as an environment variable (see "Set up your API key" above)
const API_KEY = 'AIzaSyBtvODZ4G9_XRD8iOKil37GTmKh6ock84w';
const genAI = new GoogleGenerativeAI(API_KEY);

export async function getPresentation(patientProblem: string): Promise<string> {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Repeat back to me the words exactly as they are in the quotes but without the quotes and without any extra whitespace: 'Abdominal Pain in Adults'"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log("WORKING")
  console.log("WORKING")
  console.log("WORKING")
  console.log(text);
  return text;
}

// run();