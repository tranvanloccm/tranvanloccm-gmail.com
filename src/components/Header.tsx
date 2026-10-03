import React from "react";
import {
  FileDown,
  Printer,
  BookOpen,
  CalendarCheck
} from "lucide-react";
import { LessonPlan } from "../types";

interface HeaderProps {
  currentLesson: LessonPlan;
  onExportDocx: () => void;
  onPrint: () => void;
  onOpenOrientation?: () => void;
  onOpenCurriculum: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLesson,
  onExportDocx,
  onPrint,
  onOpenOrientation,
  onOpenCurriculum,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand & School badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCurriculum}
              className="flex items-center gap-2 px-3.5 py-2 bg-emerald-50 text-emerald-800 rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-200 font-medium text-sm shadow-2xs"
              title="Xem danh mục 9 Chủ đề SGK HĐTN 8"
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Chủ đề & Bài học</span>
            </button>

            <div className="border-l border-slate-200 pl-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-blue-600 text-white text-xs font-bold">
                  HĐTN 8
                </span>
                <span className="text-xs font-semibold text-slate-800 tracking-tight hidden md:inline truncate max-w-[260px] lg:max-w-[400px]">
                  {currentLesson.lessonTitle}
                </span>
              </div>
              <div className="text-[11px] text-slate-500 hidden sm:block">
                {currentLesson.schoolName} • GV: {currentLesson.teacherName}
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {onOpenOrientation && (
              <button
                onClick={onOpenOrientation}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
                title="Định hướng Sinh hoạt dưới cờ & Sinh hoạt lớp"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>SHDC & SHL</span>
              </button>
            )}

            {/* Print button */}
            <button
              onClick={onPrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 text-xs font-medium transition-colors"
              title="In hoặc Lưu PDF (Chuẩn A4)"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">In / PDF</span>
            </button>

            {/* Export Word docx button */}
            <button
              onClick={onExportDocx}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              title="Xuất file Word (.docx) chuẩn mẫu 5512"
            >
              <FileDown className="w-4 h-4" />
              <span>Xuất Word (.docx)</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
