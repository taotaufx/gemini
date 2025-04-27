import { GoogleGenerativeAI } from "@google/generative-ai";
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ chấp nhận phương thức POST' });
  }
  try {
    const { prompt, imageBase64 } = req.body;
    
    // Khởi tạo API với key từ environment variable
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: imageBase64 ? "gemini-pro-vision" : "gemini-pro" });
    
    let result;
    if (imageBase64) {
      // Xử lý cho Vision API
      const imagePart = {
        inlineData: {
          data: imageBase64,
          mimeType: "image/jpeg"
        }
      };
      result = await model.generateContent([prompt, imagePart]);
    } else {
      // Xử lý cho Text API
      result = await model.generateContent(prompt);
    }
    
    const response = await result.response;
    const text = response.text();
    
    return res.status(200).json({ 
      success: true, 
      text: text 
    });
  } catch (error) {
    console.error('Lỗi gọi Gemini API:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}
