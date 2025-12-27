// 这里的代码是连接谷歌 AI 的“翻译官”
import { GoogleGenAI } from "@google/genai";
const genAI = new GoogleGenAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");
export const analyzeMarket = async (productName: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent("分析这个产品的市场：" + productName);
  return result.response.text();
};