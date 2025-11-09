
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const askQuestion = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert astrophysicist and a gifted science communicator. Explain complex topics about black holes and cosmology in a clear, engaging, and accessible way for a general audience. Avoid jargon where possible, and use analogies to make concepts understandable."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I couldn't connect to the cosmic database. Please try again later.";
  }
};

export const generateBlackHoleImage = async (prompt: string): Promise<string> => {
    try {
        const fullPrompt = `An artistic, photorealistic, 4k resolution visualization of a black hole, with the following theme: "${prompt}". Cosmic, space, stars, nebula.`;
        
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: fullPrompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '16:9',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        }
        throw new Error("No image was generated.");

    } catch (error) {
        console.error("Error generating image with Imagen:", error);
        throw new Error("Failed to generate image. The cosmic artist might be busy.");
    }
};
