import React from "react";
import { X, Award, CheckCircle2, FileText, Printer } from "lucide-react";
import { LessonPlan } from "../types";

interface RubricsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: LessonPlan;
}

export const RubricsModal: React.FC<RubricsModalProps> = ({
  isOpen,
  onClose,
  lesson,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 bg-linear-to-r from-amber-600 to-amber-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/15 rounded-xl">
              <Award className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h2 className="text-base font-bold">
                Bảng Tiêu chí Đánh giá Năng lực - Phẩm chất (Rubric)
              </h2>
              <p className="text-xs text-amber-100">
                {lesson.lessonTitle} • {lesson.schoolName}
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs text-slate-800">
          <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-[11px] text-amber-900">
            <strong>Căn cứ đánh giá:</strong> Theo Thông tư 22/2021/TT-BGDĐT về đánh giá học sinh THCS và mục tiêu cần đạt môn Hoạt động trải nghiệm, hướng nghiệp 8 (Bộ sách Kết nối tri thức với cuộc sống).
          </div>

          {/* Rubric Table */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">
              1. Bảng tiêu chí đánh giá mức độ đạt được (Rubric)
            </h3>
            <div className="overflow-x-auto border border-slate-300 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                    <th className="p-2.5 border-r border-slate-300 w-1/4">
                      Tiêu chí đánh giá
                    </th>
                    <th className="p-2.5 border-r border-slate-300 w-1/4 text-emerald-800 bg-emerald-50/50">
                      Mức Tốt (Xuất sắc)
                    </th>
                    <th className="p-2.5 border-r border-slate-300 w-1/4 text-blue-800 bg-blue-50/50">
                      Mức Đạt (Hoàn thành)
                    </th>
                    <th className="p-2.5 text-rose-800 bg-rose-50/50 w-1/4">
                      Cần cố gắng
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {lesson.rubricAssessment && lesson.rubricAssessment.length > 0 ? (
                    lesson.rubricAssessment.map((rub, i) => (
                      <tr key={i} className="hover:bg-slate-50/60">
                        <td className="p-2.5 font-semibold border-r border-slate-300">
                          {rub.criteria}
                        </td>
                        <td className="p-2.5 border-r border-slate-300">
                          {rub.levels.good}
                        </td>
                        <td className="p-2.5 border-r border-slate-300">
                          {rub.levels.pass}
                        </td>
                        <td className="p-2.5">{rub.levels.needsImprovement}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="p-2.5 font-semibold border-r border-slate-300">
                        Nắm vững kiến thức và kĩ năng bài học
                      </td>
                      <td className="p-2.5 border-r border-slate-300">
                        Hiểu sâu sắc, vận dụng sáng tạo vào giải quyết các tình huống thực tiễn.
                      </td>
                      <td className="p-2.5 border-r border-slate-300">
                        Nêu được kiến thức cơ bản theo SGK, hoàn thành nhiệm vụ được giao.
                      </td>
                      <td className="p-2.5">
                        Còn lúng túng, cần sự nhắc nhở và hướng dẫn của thầy cô.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Phiếu tự đánh giá của học sinh */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm">
              2. Phiếu tự đánh giá của học sinh (Theo chuẩn SGK Kết nối tri thức)
            </h3>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>Họ và tên học sinh: ....................................................</div>
                <div>Lớp: 8A.....</div>
              </div>
              <ul className="list-decimal list-inside space-y-1.5 pt-2">
                <li className="flex items-center justify-between">
                  <span>Chủ động tham gia các hoạt động học tập, trải nghiệm của lớp</span>
                  <span className="font-semibold text-slate-600">Đạt / Chưa đạt</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Tích cực hợp tác với bạn bè trong thảo luận nhóm và đóng vai</span>
                  <span className="font-semibold text-slate-600">Đạt / Chưa đạt</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Vận dụng được kĩ năng đã học vào thực tế cuộc sống hàng ngày</span>
                  <span className="font-semibold text-slate-600">Đạt / Chưa đạt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Giáo viên: {lesson.teacherName} • Tổ trưởng: {lesson.headOfDepartment}</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
