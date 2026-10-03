import React, { useState } from "react";
import { X, Search, Check, ChevronRight, BookOpen, Filter, Sparkles, Calendar, School, Users, SunMedium } from "lucide-react";
import { TOPICS_DATA } from "../data/curriculumData";
import { ActivityCategory } from "../types";

interface CurriculumNavigatorProps {
  isOpen: boolean;
  onClose: () => void;
  currentLessonId: string;
  onSelectLesson: (lessonId: string) => void;
}

export const CurriculumNavigator: React.FC<CurriculumNavigatorProps> = ({
  isOpen,
  onClose,
  currentLessonId,
  onSelectLesson,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedTopicId, setExpandedTopicId] = useState<number | null>(1);
  const [activityFilter, setActivityFilter] = useState<"ALL" | ActivityCategory>("ALL");

  if (!isOpen) return null;

  const getActivityBadge = (type: ActivityCategory, isSelected: boolean) => {
    if (type === "SHDC") {
      return (
        <span
          className={`inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${
            isSelected
              ? "bg-purple-200 text-purple-900"
              : "bg-purple-100 text-purple-700 border border-purple-200"
          }`}
        >
          <SunMedium className="w-3 h-3 text-purple-600" />
          SH Dưới cờ
        </span>
      );
    }
    if (type === "SHL") {
      return (
        <span
          className={`inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${
            isSelected
              ? "bg-emerald-200 text-emerald-900"
              : "bg-emerald-100 text-emerald-700 border border-emerald-200"
          }`}
        >
          <Users className="w-3 h-3 text-emerald-600" />
          Sinh hoạt lớp
        </span>
      );
    }
    return (
      <span
        className={`inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${
          isSelected
            ? "bg-blue-200 text-blue-900"
            : "bg-blue-100 text-blue-700 border border-blue-200"
        }`}
      >
        <School className="w-3 h-3 text-blue-600" />
        HĐGD Chủ đề
      </span>
    );
  };

  const filteredTopics = TOPICS_DATA.map((topic) => {
    const matchingLessons = topic.lessons.filter((l) => {
      const matchSearch =
        l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.orientation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.goals.some((g) => g.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCategory =
        activityFilter === "ALL" || l.activityType === activityFilter;

      return matchSearch && matchCategory;
    });

    return { ...topic, matchingLessons };
  }).filter((topic) => topic.matchingLessons.length > 0 || searchTerm === "");

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-start">
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col border-r border-slate-200 animate-in slide-in-from-left duration-200">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600 text-white rounded-lg shadow-2xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <span>Chương trình HĐTN 8</span>
                <span className="text-[11px] font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  1 định hướng = 1 bài
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Bộ sách Kết nối tri thức với cuộc sống (9 Chủ đề • 81 Định hướng bài)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter bar */}
        <div className="p-3 border-b border-slate-200 space-y-2 bg-slate-50/50">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Tìm theo chủ đề, tên bài, định hướng, tuần..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Quick Filter buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setActivityFilter("ALL")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-colors ${
                activityFilter === "ALL"
                  ? "bg-slate-800 text-white shadow-2xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Tất cả (9 bài/CĐ)
            </button>
            <button
              onClick={() => setActivityFilter("SHDC")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-colors ${
                activityFilter === "SHDC"
                  ? "bg-purple-700 text-white shadow-2xs"
                  : "bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200"
              }`}
            >
              SH Dưới cờ (3 bài)
            </button>
            <button
              onClick={() => setActivityFilter("HDGD")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-colors ${
                activityFilter === "HDGD"
                  ? "bg-blue-600 text-white shadow-2xs"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
              }`}
            >
              HĐGD Chủ đề (3 bài)
            </button>
            <button
              onClick={() => setActivityFilter("SHL")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-colors ${
                activityFilter === "SHL"
                  ? "bg-emerald-700 text-white shadow-2xs"
                  : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
              }`}
            >
              Sinh hoạt lớp (3 bài)
            </button>
          </div>
        </div>

        {/* Topics List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
          {filteredTopics.map((topic) => {
            const isExpanded = expandedTopicId === topic.id || searchTerm.length > 0;
            const hasActiveLesson = topic.lessons.some((l) => l.id === currentLessonId);

            return (
              <div
                key={topic.id}
                className={`border rounded-xl transition-all ${
                  hasActiveLesson
                    ? "border-blue-300 bg-blue-50/30 shadow-2xs"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Topic Header Toggle */}
                <button
                  onClick={() =>
                    setExpandedTopicId(isExpanded && searchTerm === "" ? null : topic.id)
                  }
                  className="w-full text-left p-3 flex items-start justify-between gap-2 hover:bg-slate-50/80 rounded-xl transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5 ${
                        hasActiveLesson
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {topic.id}
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-snug">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                        <span>{topic.pageRange}</span>
                        <span>•</span>
                        <span className="font-semibold text-blue-700">
                          {topic.lessons.length} định hướng bài soạn
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* Lessons in Topic categorized by 3 Contents */}
                {isExpanded && (
                  <div className="px-3 pb-3 pt-2 space-y-3 border-t border-slate-100">
                    {[
                      {
                        category: "SHDC" as ActivityCategory,
                        title: "NỘI DUNG 1: SINH HOẠT DƯỚI CỜ",
                        badgeClass: "text-purple-800 bg-purple-100 border-purple-200",
                        icon: <SunMedium className="w-3.5 h-3.5 text-purple-600" />,
                        lessons: topic.matchingLessons.filter((l) => l.activityType === "SHDC"),
                      },
                      {
                        category: "HDGD" as ActivityCategory,
                        title: "NỘI DUNG 2: HOẠT ĐỘNG GIÁO DỤC THEO CHỦ ĐỀ",
                        badgeClass: "text-blue-800 bg-blue-100 border-blue-200",
                        icon: <School className="w-3.5 h-3.5 text-blue-600" />,
                        lessons: topic.matchingLessons.filter((l) => l.activityType === "HDGD"),
                      },
                      {
                        category: "SHL" as ActivityCategory,
                        title: "NỘI DUNG 3: SINH HOẠT LỚP",
                        badgeClass: "text-emerald-800 bg-emerald-100 border-emerald-200",
                        icon: <Users className="w-3.5 h-3.5 text-emerald-600" />,
                        lessons: topic.matchingLessons.filter((l) => l.activityType === "SHL"),
                      },
                    ]
                      .filter((section) => section.lessons.length > 0)
                      .map((section, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          {/* Content Section Header */}
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 uppercase tracking-wide px-1">
                            {section.icon}
                            <span>{section.title}</span>
                            <span className="text-[10px] text-slate-500 font-normal lowercase">
                              ({section.lessons.length} nội dung nhỏ = {section.lessons.length} bài)
                            </span>
                          </div>

                          {/* Sub-content lessons list */}
                          <div className="space-y-1.5 pl-1.5 border-l-2 border-slate-200">
                            {section.lessons.map((lesson) => {
                              const isSelected = lesson.id === currentLessonId;
                              return (
                                <button
                                  key={lesson.id}
                                  onClick={() => {
                                    onSelectLesson(lesson.id);
                                    onClose();
                                  }}
                                  className={`w-full text-left p-2.5 rounded-lg text-xs transition-all flex items-start justify-between gap-2 border ${
                                    isSelected
                                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                                      : "hover:bg-slate-50 text-slate-800 bg-slate-50/60 border-slate-200"
                                  }`}
                                >
                                  <div className="space-y-1 flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      <span
                                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                          isSelected
                                            ? "bg-blue-700 text-blue-100"
                                            : "bg-slate-200 text-slate-700"
                                        }`}
                                      >
                                        Tiết {lesson.periodNumber || 1} • Tuần {lesson.week}
                                      </span>
                                      <span
                                        className={`text-[10px] truncate max-w-[260px] ${
                                          isSelected ? "text-blue-100" : "text-slate-700 font-medium"
                                        }`}
                                      >
                                        Nội dung (Cột 6): {lesson.orientation}
                                      </span>
                                    </div>

                                    {/* Lesson Title */}
                                    <div className="font-bold text-xs leading-snug">
                                      {lesson.title}
                                    </div>

                                    {/* Description */}
                                    <div
                                      className={`text-[11px] line-clamp-1 ${
                                        isSelected ? "text-blue-100" : "text-slate-500"
                                      }`}
                                    >
                                      {lesson.description}
                                    </div>

                                    {/* Digital Competency (Cột 8) */}
                                    {lesson.digitalCompetency && (
                                      <div
                                        className={`text-[10.5px] font-medium flex items-center gap-1 mt-1 ${
                                          isSelected
                                            ? "text-blue-100"
                                            : "text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-200/60"
                                        }`}
                                      >
                                        <Sparkles className="w-3 h-3 text-blue-500 shrink-0" />
                                        <span className="line-clamp-1">
                                          <strong>Cột 8 (Năng lực số):</strong> {lesson.digitalCompetency}
                                        </span>
                                      </div>
                                    )}
                                  </div>

                                  {isSelected && (
                                    <Check className="w-4 h-4 text-white shrink-0 mt-1" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Giáo viên: <strong>Trần Văn Lộc</strong></span>
          <span>THCS Nguyễn Trung Trực</span>
        </div>
      </div>
    </div>
  );
};
