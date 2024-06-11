const { GoogleGenerativeAI } = require("@google/generative-ai");
// Access your API key as an environment variable (see "Set up your API key" above)
const API_KEY = 'AIzaSyBtvODZ4G9_XRD8iOKil37GTmKh6ock84w';
const genAI = new GoogleGenerativeAI(API_KEY);

export async function getPresentation(patientProblem: string): Promise<string> {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "From this user input: " + patientProblem + " pick which of these 3 categories in quotes fits the symptoms best. give only the words in the quotes, but do not include the single speech marks: 'Abdominal Pain in Adults' or 'Chest Pain' or 'Back Pain'"

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