import React from "react";
import { X, CalendarCheck, Flag, Users2, Sparkles, BookOpen, School, ArrowRight } from "lucide-react";
import { LessonPlan } from "../types";
import { TOPICS_DATA } from "../data/curriculumData";

interface OrientationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: LessonPlan;
  onSelectLesson?: (lessonId: string) => void;
}

export const OrientationModal: React.FC<OrientationModalProps> = ({
  isOpen,
  onClose,
  lesson,
  onSelectLesson,
}) => {
  if (!isOpen) return null;

  const currentTopic = TOPICS_DATA.find((t) => t.id === lesson.topicNumber) || TOPICS_DATA[0];

  const shdcLessons = currentTopic.lessons.filter((l) => l.activityType === "SHDC");
  const hdgdLessons = currentTopic.lessons.filter((l) => l.activityType === "HDGD");
  const shlLessons = currentTopic.lessons.filter((l) => l.activityType === "SHL");

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 bg-linear-to-r from-indigo-700 to-blue-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/15 rounded-xl">
              <CalendarCheck className="w-5 h-5 text-indigo-200" />
            </div>
            <div>
              <h2 className="text-base font-bold">
                Cấu trúc 3 Nội dung & Các bài dạy theo Định hướng (PPCT)
              </h2>
              <p className="text-xs text-indigo-200">
                {currentTopic.title} • Phân phối chương trình & Tích hợp Năng lực số (Cột 8)
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
          <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-[11px] text-blue-900 flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              Theo chương trình HĐTN, HN 8 (2026-2027), mỗi chủ đề gồm <strong>3 Nội dung lớn</strong> (Sinh hoạt dưới cờ, Hoạt động giáo dục theo chủ đề, Sinh hoạt lớp). Trong mỗi bài đều được soạn chi tiết theo chuẩn Công văn 5512 và tích hợp <strong>Năng lực số dựa trên Cột 8 PPCT</strong>.
            </div>
          </div>

          {/* 1. NỘI DUNG 1: SINH HOẠT DƯỚI CỜ */}
          <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-purple-900 font-bold text-sm border-b border-purple-100 pb-2">
              <div className="flex items-center gap-2">
                <Flag className="w-4 h-4 text-purple-600" />
                <span>NỘI DUNG 1: SINH HOẠT DƯỚI CỜ ({shdcLessons.length} bài)</span>
              </div>
              <span className="text-[11px] font-semibold bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                Quy mô toàn trường • 1 tiết/tuần
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              {shdcLessons.map((l) => {
                const isCurrent = l.id === lesson.id;
                return (
                  <div
                    key={l.id}
                    className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${
                      isCurrent
                        ? "border-purple-500 bg-purple-50/70 shadow-xs"
                        : "border-slate-200 hover:border-purple-300 bg-slate-50/50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded">
                          Tiết {l.periodNumber || 1} • Tuần {l.week}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-bold text-emerald-600">Đang mở</span>
                        )}
                      </div>
                      <div className="font-bold text-xs text-slate-900 mb-1 leading-snug">
                        {l.title}
                      </div>
                      <div className="text-[11px] text-slate-600 mb-2">
                        Nội dung (Cột 6): {l.orientation}
                      </div>
                      {l.digitalCompetency && (
                        <div className="text-[10.5px] text-purple-800 bg-purple-100/70 p-1.5 rounded mb-2 border border-purple-200/60 flex items-start gap-1">
                          <Sparkles className="w-3 h-3 text-purple-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">
                            <strong>Cột 8 (NLS):</strong> {l.digitalCompetency}
                          </span>
                        </div>
                      )}
                    </div>
                    {onSelectLesson && (
                      <button
                        onClick={() => {
                          onSelectLesson(l.id);
                          onClose();
                        }}
                        className="w-full mt-2 flex items-center justify-center gap-1 py-1 px-2 text-[11px] font-semibold text-purple-700 bg-white hover:bg-purple-600 hover:text-white border border-purple-200 rounded-lg transition-colors"
                      >
                        <span>Mở bài soạn</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. NỘI DUNG 2: HOẠT ĐỘNG GIÁO DỤC THEO CHỦ ĐỀ */}
          <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-blue-900 font-bold text-sm border-b border-blue-100 pb-2">
              <div className="flex items-center gap-2">
                <School className="w-4 h-4 text-blue-600" />
                <span>NỘI DUNG 2: HOẠT ĐỘNG GIÁO DỤC THEO CHỦ ĐỀ ({hdgdLessons.length} bài)</span>
              </div>
              <span className="text-[11px] font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                Quy mô lớp học • 1 tiết/tuần
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              {hdgdLessons.map((l) => {
                const isCurrent = l.id === lesson.id;
                return (
                  <div
                    key={l.id}
                    className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${
                      isCurrent
                        ? "border-blue-500 bg-blue-50/70 shadow-xs"
                        : "border-slate-200 hover:border-blue-300 bg-slate-50/50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                          Tiết {l.periodNumber || 1} • Tuần {l.week}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-bold text-emerald-600">Đang mở</span>
                        )}
                      </div>
                      <div className="font-bold text-xs text-slate-900 mb-1 leading-snug">
                        {l.title}
                      </div>
                      <div className="text-[11px] text-slate-600 mb-2">
                        Nội dung (Cột 6): {l.orientation}
                      </div>
                      {l.digitalCompetency && (
                        <div className="text-[10.5px] text-blue-800 bg-blue-100/70 p-1.5 rounded mb-2 border border-blue-200/60 flex items-start gap-1">
                          <Sparkles className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">
                            <strong>Cột 8 (NLS):</strong> {l.digitalCompetency}
                          </span>
                        </div>
                      )}
                    </div>
                    {onSelectLesson && (
                      <button
                        onClick={() => {
                          onSelectLesson(l.id);
                          onClose();
                        }}
                        className="w-full mt-2 flex items-center justify-center gap-1 py-1 px-2 text-[11px] font-semibold text-blue-700 bg-white hover:bg-blue-600 hover:text-white border border-blue-200 rounded-lg transition-colors"
                      >
                        <span>Mở bài soạn</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. NỘI DUNG 3: SINH HOẠT LỚP */}
          <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-emerald-900 font-bold text-sm border-b border-emerald-100 pb-2">
              <div className="flex items-center gap-2">
                <Users2 className="w-4 h-4 text-emerald-600" />
                <span>NỘI DUNG 3: SINH HOẠT LỚP ({shlLessons.length} bài)</span>
              </div>
              <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">
                Quy mô chi đội / lớp • 1 tiết/tuần
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              {shlLessons.map((l) => {
                const isCurrent = l.id === lesson.id;
                return (
                  <div
                    key={l.id}
                    className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${
                      isCurrent
                        ? "border-emerald-500 bg-emerald-50/70 shadow-xs"
                        : "border-slate-200 hover:border-emerald-300 bg-slate-50/50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                          Tiết {l.periodNumber || 1} • Tuần {l.week}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-bold text-emerald-600">Đang mở</span>
                        )}
                      </div>
                      <div className="font-bold text-xs text-slate-900 mb-1 leading-snug">
                        {l.title}
                      </div>
                      <div className="text-[11px] text-slate-600 mb-2">
                        Nội dung (Cột 6): {l.orientation}
                      </div>
                      {l.digitalCompetency && (
                        <div className="text-[10.5px] text-emerald-800 bg-emerald-100/70 p-1.5 rounded mb-2 border border-emerald-200/60 flex items-start gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">
                            <strong>Cột 8 (NLS):</strong> {l.digitalCompetency}
                          </span>
                        </div>
                      )}
                    </div>
                    {onSelectLesson && (
                      <button
                        onClick={() => {
                          onSelectLesson(l.id);
                          onClose();
                        }}
                        className="w-full mt-2 flex items-center justify-center gap-1 py-1 px-2 text-[11px] font-semibold text-emerald-700 bg-white hover:bg-emerald-600 hover:text-white border border-emerald-200 rounded-lg transition-colors"
                      >
                        <span>Mở bài soạn</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Trường THCS Nguyễn Trung Trực • Năm học 2026 - 2027</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold shadow-xs"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
