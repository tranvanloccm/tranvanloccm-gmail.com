import React from "react";
import { LessonPlan, TeachingActivity } from "../types";
import { Copy, Check, Sparkles, BookOpen } from "lucide-react";

interface LessonViewerProps {
  lesson: LessonPlan;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({ lesson }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyText = () => {
    const text = document.getElementById("khbd-printable-area")?.innerText || "";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to format text with inline highlighted Digital Competency tags and distinct text color
  const renderFormattedLine = (line: string, key: React.Key) => {
    const isDigital =
      line.includes("[NLS") ||
      line.includes(".TC2.") ||
      line.includes("[Sản phẩm NLS") ||
      line.includes("Tích hợp NLS") ||
      line.includes("Thao tác số") ||
      line.includes("Xử lí số") ||
      line.includes("Thiết kế số") ||
      line.includes("Chia sẻ số") ||
      line.includes("Báo cáo số") ||
      line.includes("Hoàn thiện số");

    if (isDigital) {
      return (
        <li
          key={key}
          className="leading-relaxed font-semibold text-blue-700"
          style={{ color: "#1d4ed8" }}
        >
          <span>{line}</span>
        </li>
      );
    }

    return (
      <li key={key} className="leading-relaxed text-slate-800">
        {line}
      </li>
    );
  };

  // Helper to render activity objective with highlighted digital competency portion
  const renderObjectiveLine = (objectiveText: string) => {
    if (objectiveText.includes("Tích hợp Năng lực số") || objectiveText.includes(".TC2.")) {
      const parts = objectiveText.split(/(Tích hợp Năng lực số.*)/);
      if (parts.length > 1) {
        return (
          <span>
            <span>{parts[0]}</span>
            <span className="font-semibold text-blue-700" style={{ color: "#1d4ed8" }}>
              {parts[1]}
            </span>
          </span>
        );
      }
    }
    return <span>{objectiveText}</span>;
  };

  const renderActivityTable = (act: TeachingActivity, indexPrefix: string) => {
    return (
      <div className="my-3 overflow-x-auto">
        <table className="w-full border-collapse border border-slate-400 text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-900 font-bold">
              <th className="border border-slate-400 p-2 text-center w-3/5">
                Hoạt động của GV và HS
              </th>
              <th className="border border-slate-400 p-2 text-center w-2/5">
                Sản phẩm
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-top">
              {/* Left Column: 4 Steps */}
              <td className="border border-slate-400 p-2.5 space-y-3">
                {/* Step 1 */}
                <div>
                  <div className="font-bold text-slate-900">
                    * Bước 1: Chuyển giao nhiệm vụ:
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 pl-1 mt-0.5">
                    {act.steps.teacherActivity.map((line, i) => renderFormattedLine(line, i))}
                  </ul>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="font-bold text-slate-900">
                    * Bước 2: Thực hiện nhiệm vụ:
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 pl-1 mt-0.5">
                    {act.steps.studentActivity.map((line, i) => renderFormattedLine(line, i))}
                  </ul>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="font-bold text-slate-900">
                    * Bước 3: Báo cáo, thảo luận:
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 pl-1 mt-0.5">
                    {act.steps.reportDiscussion.map((line, i) => renderFormattedLine(line, i))}
                  </ul>
                </div>

                {/* Step 4 */}
                <div>
                  <div className="font-bold text-slate-900">
                    * Bước 4: Kết luận, nhận định:
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 pl-1 mt-0.5">
                    {act.steps.conclusion.map((line, i) => renderFormattedLine(line, i))}
                  </ul>
                </div>
              </td>

              {/* Right Column: Expected Products */}
              <td className="border border-slate-400 p-2.5">
                <ul className="list-disc list-inside space-y-1.5 leading-relaxed">
                  {act.product.map((p, i) => {
                    const isDigitalProduct =
                      p.includes("[Sản phẩm NLS") ||
                      p.includes(".TC2.") ||
                      p.includes("[NLS");

                    if (isDigitalProduct) {
                      return (
                        <li
                          key={i}
                          className="font-semibold text-blue-700"
                          style={{ color: "#1d4ed8" }}
                        >
                          <span>{p}</span>
                        </li>
                      );
                    }

                    return (
                      <li key={i} className="text-slate-800">
                        {p}
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto my-6 px-4">
      {/* Quick Action bar above document */}
      <div className="flex items-center justify-between mb-4 print:hidden bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
        <div className="text-xs text-slate-600 font-medium flex items-center gap-2">
          <span>Xem trước định dạng Kế hoạch bài dạy chuẩn mẫu giáo viên (CV 5512)</span>
          {lesson.objectives.digitalCompetency && lesson.objectives.digitalCompetency.length > 0 && (
            <span className="text-[11px] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Chữ màu xanh: Nội dung tích hợp Năng lực số [*.*.TC2.*]</span>
            </span>
          )}
        </div>
        <button
          onClick={handleCopyText}
          className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-blue-700 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Đã sao chép!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Sao chép toàn bộ text</span>
            </>
          )}
        </button>
      </div>

      {/* Main Document Paper (Printable) */}
      <div
        id="khbd-printable-area"
        className="bg-white p-8 sm:p-12 shadow-md border border-slate-200 rounded-sm font-serif text-[15px] leading-relaxed text-slate-900 print:p-0 print:shadow-none print:border-none"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        {/* Header Unit Info */}
        <div className="space-y-0.5 uppercase font-bold text-sm text-left">
          <div>{lesson.schoolName}</div>
          <div>{lesson.departmentName}</div>
          <div className="normal-case font-semibold">
            Giáo viên: {lesson.teacherName}
          </div>
        </div>

        {/* Lesson Title and Info */}
        <div className="text-center my-6 space-y-1.5 border-b border-slate-200 pb-4">
          <div className="text-sm font-bold uppercase text-slate-700 tracking-wider">
            {lesson.topicTitle}
          </div>
          <div className="text-xs font-bold uppercase text-blue-800 bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-200">
            {lesson.activityType === "SHDC"
              ? "Nội dung 1: Sinh hoạt dưới cờ"
              : lesson.activityType === "HDGD"
              ? "Nội dung 2: Hoạt động giáo dục theo chủ đề"
              : "Nội dung 3: Sinh hoạt lớp"}
          </div>
          <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-slate-900 mt-1">
            KẾ HOẠCH BÀI DẠY: {lesson.lessonTitle}
          </h1>
          <div className="italic text-sm text-slate-600">
            Môn học/Hoạt động giáo dục: {lesson.subject}; Lớp: {lesson.classGrade}
          </div>
          <div className="italic text-sm text-slate-600">
            Thời gian thực hiện: {lesson.duration} (Tiết {lesson.periodNumber || 1}, Tuần {lesson.weekNumber || 1})
          </div>
          <div className="pt-1 print:hidden">
            {lesson.objectives.digitalCompetency && lesson.objectives.digitalCompetency.length > 0 ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Có tích hợp Năng lực số (Cột 8 PPCT - Chuẩn Phụ lục I [*.*.TC2.*])</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                <span>Cột 8 PPCT: Không tích hợp Năng lực số (Hoạt động trải nghiệm trực tiếp)</span>
              </span>
            )}
          </div>
        </div>

        {/* SECTION I: MỤC TIÊU */}
        <div className="space-y-3 mb-6">
          <h2 className="font-bold text-base uppercase">I. Mục tiêu</h2>

          {/* 1. Kiến thức */}
          <div>
            <div className="font-bold">1. Kiến thức:</div>
            <ul className="list-disc list-inside pl-4 space-y-1">
              {lesson.objectives.knowledge.map((k, i) => (
                <li key={i}>{k}</li>
              ))}
            </ul>
          </div>

          {/* 2. Năng lực */}
          <div>
            <div className="font-bold">2. Năng lực:</div>

            {/* 2.1 Năng lực chung */}
            <div className="pl-4 mt-1">
              <div className="font-bold">2.1 Năng lực chung:</div>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <span className="font-semibold">Tự chủ và tự học:</span>{" "}
                  {lesson.objectives.generalCompetencies.selfControl.join("; ")}
                </li>
                <li>
                  <span className="font-semibold">Giao tiếp và hợp tác:</span>{" "}
                  {lesson.objectives.generalCompetencies.communication.join("; ")}
                </li>
                <li>
                  <span className="font-semibold">
                    Giải quyết vấn đề và sáng tạo:
                  </span>{" "}
                  {lesson.objectives.generalCompetencies.problemSolving.join("; ")}
                </li>
              </ul>
            </div>

            {/* 2.2 Năng lực đặc thù */}
            <div className="pl-4 mt-2">
              <div className="font-bold">2.2 Năng lực riêng (đặc thù):</div>
              <ul className="list-disc list-inside pl-4 space-y-1">
                {lesson.objectives.specificCompetencies.adaptation.length > 0 && (
                  <li>
                    <span className="font-semibold">
                      Năng lực thích ứng với cuộc sống:
                    </span>{" "}
                    {lesson.objectives.specificCompetencies.adaptation.join("; ")}
                  </li>
                )}
                {lesson.objectives.specificCompetencies.organization.length > 0 && (
                  <li>
                    <span className="font-semibold">
                      Năng lực thiết kế và tổ chức hoạt động:
                    </span>{" "}
                    {lesson.objectives.specificCompetencies.organization.join(
                      "; "
                    )}
                  </li>
                )}
                {lesson.objectives.specificCompetencies.careerOrientation.length >
                  0 && (
                  <li>
                    <span className="font-semibold">
                      Năng lực định hướng nghề nghiệp:
                    </span>{" "}
                    {lesson.objectives.specificCompetencies.careerOrientation.join(
                      "; "
                    )}
                  </li>
                )}
              </ul>
            </div>

            {/* 2.3 Năng lực số (Tích hợp dựa vào cột 8 PPCT) - Được định dạng bằng màu chữ khác */}
            {lesson.objectives.digitalCompetency &&
              lesson.objectives.digitalCompetency.length > 0 && (
                <div className="pl-4 mt-2">
                  <div className="font-bold flex items-center gap-1.5" style={{ color: "#1d4ed8" }}>
                    <span>2.3 Năng lực số (Tích hợp theo PPCT cột 8 - Chuẩn Phụ lục I):</span>
                    <span className="print:hidden text-[11px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded border border-blue-200">
                      Định dạng [*.*.TC2.*]
                    </span>
                  </div>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    {lesson.objectives.digitalCompetency.map((comp, idx) => (
                      <li key={idx} className="font-semibold" style={{ color: "#1d4ed8" }}>
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>

          {/* 3. Phẩm chất */}
          <div>
            <div className="font-bold">3. Phẩm chất:</div>
            <ul className="list-disc list-inside pl-4 space-y-1">
              {lesson.objectives.qualities.patriotism &&
                lesson.objectives.qualities.patriotism.length > 0 && (
                  <li>
                    <span className="font-semibold">Yêu nước:</span>{" "}
                    {lesson.objectives.qualities.patriotism.join("; ")}
                  </li>
                )}
              {lesson.objectives.qualities.compassion &&
                lesson.objectives.qualities.compassion.length > 0 && (
                  <li>
                    <span className="font-semibold">Nhân ái:</span>{" "}
                    {lesson.objectives.qualities.compassion.join("; ")}
                  </li>
                )}
              {lesson.objectives.qualities.diligence &&
                lesson.objectives.qualities.diligence.length > 0 && (
                  <li>
                    <span className="font-semibold">Chăm chỉ:</span>{" "}
                    {lesson.objectives.qualities.diligence.join("; ")}
                  </li>
                )}
              {lesson.objectives.qualities.honesty &&
                lesson.objectives.qualities.honesty.length > 0 && (
                  <li>
                    <span className="font-semibold">Trung thực:</span>{" "}
                    {lesson.objectives.qualities.honesty.join("; ")}
                  </li>
                )}
              {lesson.objectives.qualities.responsibility &&
                lesson.objectives.qualities.responsibility.length > 0 && (
                  <li>
                    <span className="font-semibold">Trách nhiệm:</span>{" "}
                    {lesson.objectives.qualities.responsibility.join("; ")}
                  </li>
                )}
            </ul>
          </div>
        </div>

        {/* SECTION II: THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU */}
        <div className="space-y-2 mb-6">
          <h2 className="font-bold text-base uppercase">
            II. Thiết bị dạy học và học liệu
          </h2>
          <div>
            <div className="font-bold">1. Giáo viên:</div>
            <ul className="list-disc list-inside pl-4 space-y-0.5">
              {lesson.equipment.teacher.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold">2. Học sinh:</div>
            <ul className="list-disc list-inside pl-4 space-y-0.5">
              {lesson.equipment.student.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION III: TIẾN TRÌNH DẠY HỌC */}
        <div className="space-y-6 mb-8">
          <h2 className="font-bold text-base uppercase">
            III. Tiến trình dạy học
          </h2>

          {/* 1. HOẠT ĐỘNG 1: MỞ ĐẦU */}
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">
              1. HOẠT ĐỘNG 1: MỞ ĐẦU (Khởi động)
            </h3>
            <div className="pl-4 space-y-1">
              <div>
                <span className="font-semibold">a) Mục tiêu:</span>{" "}
                {renderObjectiveLine(lesson.timeline.warmUp.objective)}
              </div>
              <div>
                <span className="font-semibold">b) Nội dung:</span>{" "}
                {lesson.timeline.warmUp.content}
              </div>
              <div>
                <span className="font-semibold">
                  c) Tổ chức thực hiện và sản phẩm:
                </span>
                {renderActivityTable(lesson.timeline.warmUp, "1")}
              </div>
            </div>
          </div>

          {/* 2. HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900">
              2. HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI
            </h3>
            {lesson.timeline.knowledgeFormation.map((act, idx) => (
              <div key={act.id} className="pl-4 space-y-1">
                <div className="font-bold text-slate-800">
                  HOẠT ĐỘNG 2.{idx + 1}: {act.subTitle || act.name}
                </div>
                <div>
                  <span className="font-semibold">a) Mục tiêu:</span>{" "}
                  {renderObjectiveLine(act.objective)}
                </div>
                <div>
                  <span className="font-semibold">b) Nội dung:</span>{" "}
                  {act.content}
                </div>
                <div>
                  <span className="font-semibold">
                    c) Tổ chức thực hiện và sản phẩm:
                  </span>
                  {renderActivityTable(act, `2.${idx + 1}`)}
                </div>
              </div>
            ))}
          </div>

          {/* 3. HOẠT ĐỘNG 3: LUYỆN TẬP */}
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">
              3. HOẠT ĐỘNG 3: LUYỆN TẬP
            </h3>
            <div className="pl-4 space-y-1">
              <div>
                <span className="font-semibold">a) Mục tiêu:</span>{" "}
                {renderObjectiveLine(lesson.timeline.practice.objective)}
              </div>
              <div>
                <span className="font-semibold">b) Nội dung:</span>{" "}
                {lesson.timeline.practice.content}
              </div>
              <div>
                <span className="font-semibold">
                  c) Tổ chức thực hiện và sản phẩm:
                </span>
                {renderActivityTable(lesson.timeline.practice, "3")}
              </div>
            </div>
          </div>

          {/* 4. HOẠT ĐỘNG 4: VẬN DỤNG */}
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">
              4. HOẠT ĐỘNG 4: VẬN DỤNG
            </h3>
            <div className="pl-4 space-y-1">
              <div>
                <span className="font-semibold">a) Mục tiêu:</span>{" "}
                {renderObjectiveLine(lesson.timeline.application.objective)}
              </div>
              <div>
                <span className="font-semibold">b) Nội dung:</span>{" "}
                {lesson.timeline.application.content}
              </div>
              <div>
                <span className="font-semibold">
                  c) Tổ chức thực hiện và sản phẩm:
                </span>
                {renderActivityTable(lesson.timeline.application, "4")}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Signatures */}
        <div className="grid grid-cols-2 text-center mt-12 pt-6 border-t border-slate-300 text-sm">
          <div>
            <div className="font-bold uppercase">Tổ trưởng chuyên môn</div>
            <div className="italic text-xs text-slate-500 mt-0.5">
              (Ký và ghi rõ họ tên)
            </div>
            <div className="font-bold mt-16 text-slate-900">
              {lesson.headOfDepartment}
            </div>
          </div>
          <div>
            <div className="italic text-slate-600 mb-0.5">
              {lesson.locationDate}
            </div>
            <div className="font-bold uppercase">Giáo viên soạn bài</div>
            <div className="italic text-xs text-slate-500 mt-0.5">
              (Ký và ghi rõ họ tên)
            </div>
            <div className="font-bold mt-16 text-slate-900">
              {lesson.teacherName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
