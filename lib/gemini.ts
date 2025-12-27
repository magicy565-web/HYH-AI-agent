import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenAI(apiKey);

export const analyzeMarket = async (productName: string, lang: string) => {
  if (!apiKey) return "未检测到 API Key，请在 Vercel 环境变量中配置 NEXT_PUBLIC_GEMINI_API_KEY";
  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `你是一名资深出海专家。请分析产品 "${productName}" 在欧美市场的机会。请用${lang === 'zh' ? '中文' : '英文'}回答。包含：1. 市场需求 2. 核心竞争点 3. 建议定价策略。`;
  
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    return "分析出错，请检查 API Key 是否正确或稍后再试。";
  }
};