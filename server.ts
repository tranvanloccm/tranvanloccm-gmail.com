import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Helper to get GoogleGenAI client
  function getGeminiClient(): GoogleGenAI | null {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // AI Assistant for Teacher Lesson Planning
  app.post("/api/ai/generate", async (req, res) => {
    try {
      const { prompt, systemInstruction } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Missing prompt" });
      }

      const ai = getGeminiClient();
      if (!ai) {
        return res.status(503).json({
          error: "API Key chưa được cấu hình. Vui lòng kiểm tra cấu hình GEMINI_API_KEY trong Settings.",
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          systemInstruction:
            systemInstruction ||
            "Bạn là giáo viên dạy giỏi cấp THCS môn Hoạt động trải nghiệm, hướng nghiệp (HĐTN-HN) lớp 8 bộ sách Kết nối tri thức với cuộc sống. Bạn có chuyên môn sâu về soạn Kế hoạch bài dạy (KHBD) theo chuẩn Công văn 5512/BGDĐT, thiết kế phương pháp dạy học tích cực (trò chơi, đóng vai, làm việc nhóm, dự án) và xây dựng bộ tiêu chí đánh giá năng lực phẩm chất học sinh.",
          temperature: 0.7,
        },
      });

      res.json({ result: response.text });
    } catch (err: any) {
      console.error("Gemini API error:", err);
      res.status(500).json({
        error: err.message || "Đã xảy ra lỗi khi gọi AI trợ lý giáo viên.",
      });
    }
  });

  // AI Smart Lesson Optimizer / Generator endpoint
  app.post("/api/ai/optimize-khbd", async (req, res) => {
    try {
      const { lessonTitle, topicName, duration, targetAudience, currentContent, promptType } = req.body;
      
      const ai = getGeminiClient();
      if (!ai) {
        return res.status(503).json({
          error: "Chưa cấu hình API Key. Hãy cấu hình GEMINI_API_KEY để sử dụng trợ lý giáo viên AI.",
        });
      }

      let systemPrompt = `Bạn là chuyên gia thẩm định và giáo viên dạy giỏi xuất sắc môn Hoạt động trải nghiệm, hướng nghiệp 8 (Sách Kết nối tri thức với cuộc sống).
Bạn soạn giáo án chuẩn khung Kế hoạch bài dạy (KHBD) theo Công văn 5512/BGDĐT gồm 4 hoạt động:
- Hoạt động 1: Mở đầu (Khởi động)
- Hoạt động 2: Hình thành kiến thức mới (Gồm các Hoạt động 2.1, 2.2, 2.3...)
- Hoạt động 3: Luyện tập
- Hoạt động 4: Vận dụng
Mỗi hoạt động phải có a) Mục tiêu, b) Nội dung, c) Tổ chức thực hiện và sản phẩm (chia làm 4 bước rõ ràng: Bước 1: Chuyển giao nhiệm vụ; Bước 2: Thực hiện nhiệm vụ; Bước 3: Báo cáo, thảo luận; Bước 4: Kết luận, nhận định) tương ứng với cột Sản phẩm dự kiến cụ thể.`;

      let userPrompt = "";
      if (promptType === "enhance_activity") {
        userPrompt = `Hãy gợi ý làm phong phú và sáng tạo hơn cho hoạt động dạy học của bài: "${lessonTitle}" (Chủ đề: ${topicName}).
Yêu cầu:
1. Thiết kế 1 trò chơi khởi động cuốn hút liên quan trực tiếp đến bài học.
2. Thiết kế các tình huống thực tế đời sống học sinh THCS để học sinh sắm vai hoặc thảo luận nhóm.
3. Đề xuất bảng tiêu chí đánh giá (Rubric) hoặc Phiếu học tập phát triển năng lực cho học sinh.
Trình bày rõ ràng, sư phạm, áp dụng thực tế tại trường học.`;
      } else if (promptType === "differentiate") {
        userPrompt = `Đề xuất giải pháp phân hóa dạy học cho bài: "${lessonTitle}" (Thời lượng: ${duration || "1-2 tiết"}) với đối tượng học sinh: ${targetAudience || "Học sinh có sự phân hóa năng lực"}.
Hãy gợi ý nhiệm vụ học tập riêng cho học sinh còn lúng túng và nhiệm vụ nâng cao cho học sinh tích cực/năng động.`;
      } else {
        userPrompt = `Dựa trên bài học "${lessonTitle}" thuộc Chủ đề "${topicName}" SGK HĐTN 8 Kết nối tri thức với cuộc sống.
Nội dung hiện tại:
${JSON.stringify(currentContent || {}, null, 2)}

Hãy bổ sung chi tiết lời thoại tương tác của Giáo viên - Học sinh trong 4 bước tổ chức thực hiện và kết luận sư phạm sâu sắc.`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: userPrompt,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      res.json({ result: response.text });
    } catch (err: any) {
      console.error("Optimize KHBD error:", err);
      res.status(500).json({ error: err.message || "Lỗi xử lý tối ưu KHBD." });
    }
  });

  // Vite middleware for dev / static for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
