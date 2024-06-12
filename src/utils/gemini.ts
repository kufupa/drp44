const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = 'AIzaSyBtvODZ4G9_XRD8iOKil37GTmKh6ock84w';
const genAI = new GoogleGenerativeAI(API_KEY);

export async function getPresentation(patientProblem: string, age: string, sex: string): Promise<string> {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  console.log("age: " + age);
  console.log("gender " + sex);

  const prompt = "A user of age: " + age + " and gender: " +  sex + "has symptoms: " +  patientProblem + " pick which of these categories in quotes fits the symptoms best. give only the words in the quotes, but do not include the single speech marks: 'Abdominal Pain in Adults' or 'Chest Pain' or 'Back Pain' or 'Abdominal Pain in Children', if you cannot pick one of these then give me the output but no quote marks as before: 'None of the Above'"

                  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}