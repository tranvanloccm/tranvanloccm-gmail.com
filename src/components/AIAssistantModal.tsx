import React, { useState } from "react";
import { X, Sparkles, Wand2, RefreshCw, Copy, Check, BookOpen, Users, Lightbulb, CheckSquare } from "lucide-react";
import { LessonPlan } from "../types";

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLesson: LessonPlan;
  onApplyToLesson?: (appliedText: string, targetSection: string) => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  currentLesson,
  onApplyToLesson,
}) => {
  const [selectedPromptType, setSelectedPromptType] = useState<
    "warmup_game" | "situations" | "differentiate" | "rubric" | "custom"
  >("warmup_game");
  const [customPrompt, setCustomPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerateAI = async (type = selectedPromptType) => {
    setLoading(true);
    setError(null);

    try {
      let promptToSend = "";
      if (type === "warmup_game") {
        promptToSend = `Thiết kế 2 trò chơi khởi động (Mở đầu) cuốn hút, sôi nổi, không tốn nhiều đạo cụ cho bài học: "${currentLesson.lessonTitle}" (Chủ đề: "${currentLesson.topicTitle}").
Mỗi trò chơi gồm:
1. Tên trò chơi và ý nghĩa kết nối với bài học.
2. Thời gian và Đạo cụ cần thiết.
3. Cách thức tiến hành (Luật chơi, lời dẫn của GV, hoạt động của HS).
4. Lời kết luận của GV để chuyển ý vào Hoạt động Khám phá kiến thức mới.`;
      } else if (type === "situations") {
        promptToSend = `Xây dựng 3 tình huống thực tế đời sống học sinh THCS (lớp 8) gắn với bài: "${currentLesson.lessonTitle}".
Mỗi tình huống bao gồm:
1. Bối cảnh tình huống cụ thể (tại trường học / gia đình / nơi cư trú / mạng xã hội).
2. Câu hỏi dẫn dắt cho học sinh thảo luận nhóm.
3. Gợi ý hướng xử lí tối ưu, nhân văn, rèn luyện phẩm chất và kĩ năng sống.
4. Kịch bản sắm vai ngắn (khoảng 3-4 lời thoại) để học sinh thực hành trước lớp.`;
      } else if (type === "differentiate") {
        promptToSend = `Đề xuất phương án dạy học phân hóa cho bài học: "${currentLesson.lessonTitle}".
1. Nhiệm vụ và câu hỏi hỗ trợ dành cho học sinh còn rụt rè, lúng túng hoặc tiếp thu chậm.
2. Nhiệm vụ nâng cao, kích thích tư duy phản biện và sáng tạo cho học sinh tích cực, năng động.
3. Kĩ thuật điều phối của giáo viên để 100% học sinh trong lớp đều được tham gia trải nghiệm.`;
      } else if (type === "rubric") {
        promptToSend = `Xây dựng bảng tiêu chí đánh giá (Rubric) đánh giá sự hình thành và phát triển phẩm chất, năng lực của học sinh trong bài: "${currentLesson.lessonTitle}".
Phân chia rõ 3 mức độ đánh giá:
- Mức Tốt (Hoàn thành xuất sắc)
- Mức Đạt (Hoàn thành)
- Mức Cần cố gắng (Chưa hoàn thành)
Kèm theo câu hỏi tự đánh giá và đánh giá đồng đẳng giữa các học sinh.`;
      } else {
        promptToSend = customPrompt;
      }

      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promptToSend,
          systemInstruction:
            "Bạn là giáo viên dạy giỏi cấp Quốc gia môn Hoạt động trải nghiệm, hướng nghiệp 8. Hãy đưa ra các gợi ý sư phạm chất lượng cao, thực tế, dễ áp dụng vào giờ dạy.",
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Không thể tạo nội dung từ AI.");
      }

      setAiResult(data.result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Đã xảy ra lỗi khi kết nối với máy chủ AI.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(aiResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 bg-linear-to-r from-purple-700 via-indigo-700 to-blue-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-base font-bold">
                Trợ lý Giáo viên Dạy giỏi AI (Gemini)
              </h2>
              <p className="text-xs text-purple-100">
                Tối ưu hóa và làm phong phú KHBD: {currentLesson.lessonTitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Buttons / Preset Tools */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 space-y-3">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Chọn nhiệm vụ hỗ trợ sư phạm:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => {
                setSelectedPromptType("warmup_game");
                handleGenerateAI("warmup_game");
              }}
              className={`p-2.5 rounded-xl border text-left text-xs transition-all flex flex-col gap-1 ${
                selectedPromptType === "warmup_game"
                  ? "bg-purple-50 border-purple-300 text-purple-900 font-semibold shadow-xs"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Trò chơi Khởi động</span>
            </button>

            <button
              onClick={() => {
                setSelectedPromptType("situations");
                handleGenerateAI("situations");
              }}
              className={`p-2.5 rounded-xl border text-left text-xs transition-all flex flex-col gap-1 ${
                selectedPromptType === "situations"
                  ? "bg-purple-50 border-purple-300 text-purple-900 font-semibold shadow-xs"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Users className="w-4 h-4 text-blue-500" />
              <span>Tình huống Sắm vai</span>
            </button>

            <button
              onClick={() => {
                setSelectedPromptType("differentiate");
                handleGenerateAI("differentiate");
              }}
              className={`p-2.5 rounded-xl border text-left text-xs transition-all flex flex-col gap-1 ${
                selectedPromptType === "differentiate"
                  ? "bg-purple-50 border-purple-300 text-purple-900 font-semibold shadow-xs"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Wand2 className="w-4 h-4 text-emerald-500" />
              <span>Dạy học Phân hóa</span>
            </button>

            <button
              onClick={() => {
                setSelectedPromptType("rubric");
                handleGenerateAI("rubric");
              }}
              className={`p-2.5 rounded-xl border text-left text-xs transition-all flex flex-col gap-1 ${
                selectedPromptType === "rubric"
                  ? "bg-purple-50 border-purple-300 text-purple-900 font-semibold shadow-xs"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <CheckSquare className="w-4 h-4 text-indigo-500" />
              <span>Tiêu chí Đánh giá</span>
            </button>
          </div>

          {/* Custom Prompt Box */}
          <div className="flex gap-2 pt-1">
            <input
              type="text"
              placeholder="Hoặc nhập yêu cầu riêng của thầy/cô (Ví dụ: Thêm hoạt động trải nghiệm thực tế tại địa phương U Minh...)"
              value={customPrompt}
              onChange={(e) => {
                setCustomPrompt(e.target.value);
                setSelectedPromptType("custom");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && customPrompt.trim()) {
                  handleGenerateAI("custom");
                }
              }}
              className="flex-1 text-xs px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={() => handleGenerateAI("custom")}
              disabled={loading || !customPrompt.trim()}
              className="px-3.5 py-2 bg-purple-700 hover:bg-purple-800 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {loading ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Sparkles className="w-3.5 h-3.5" />
              )}
              <span>Tạo</span>
            </button>
          </div>
        </div>

        {/* AI Result Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-white space-y-3">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
              {error}
            </div>
          )}

          {loading ? (
            <div className="py-12 text-center space-y-3">
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 text-purple-700 rounded-full animate-pulse">
                <Sparkles className="w-6 h-6 animate-spin" />
              </div>
              <div className="text-xs font-semibold text-slate-700">
                Trợ lý AI đang nghiên cứu nội dung SGK và thiết kế phương án sư phạm...
              </div>
              <div className="text-[11px] text-slate-400">
                Áp dụng chuẩn phương pháp dạy học tích cực Công văn 5512/BGDĐT
              </div>
            </div>
          ) : aiResult ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700">
                  Kết quả gợi ý sư phạm:
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs text-slate-600 hover:text-purple-700 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">
                        Đã sao chép
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs leading-relaxed text-slate-800 whitespace-pre-wrap font-sans">
                {aiResult}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 text-xs space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-slate-300" />
              <div>
                Chọn một trong các công cụ hỗ trợ ở trên để nhận ý tưởng thiết kế bài dạy từ AI.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Hệ thống hỗ trợ soạn giảng HĐTN 8 - Trường THCS Nguyễn Trung Trực</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
