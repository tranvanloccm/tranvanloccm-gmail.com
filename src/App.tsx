import React, { useState } from "react";
import { LessonPlan } from "./types";
import { getLessonPlanById } from "./data/lessonGenerator";
import { TOPICS_DATA } from "./data/curriculumData";
import { Header } from "./components/Header";
import { LessonViewer } from "./components/LessonViewer";
import { CurriculumNavigator } from "./components/CurriculumNavigator";
import { OrientationModal } from "./components/OrientationModal";
import { exportLessonPlanToDocx } from "./utils/docxExport";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export default function App() {
  const [currentLessonId, setCurrentLessonId] = useState<string>("cd1-hdgd-1");
  const [lesson, setLesson] = useState<LessonPlan>(() =>
    getLessonPlanById("cd1-hdgd-1")
  );

  // Modals state
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  const [isOrientationOpen, setIsOrientationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from local storage or default generator when switching lesson
  const handleSelectLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    const saved = localStorage.getItem(`khbd_hdtn8_${lessonId}`);
    if (saved) {
      try {
        setLesson(JSON.parse(saved));
      } catch (e) {
        setLesson(getLessonPlanById(lessonId));
      }
    } else {
      setLesson(getLessonPlanById(lessonId));
    }
    showToast(`Đã tải nội dung: ${getLessonPlanById(lessonId).lessonTitle}`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Export to Word (.docx)
  const handleExportDocx = async () => {
    try {
      showToast("Đang tạo file Word (.docx) chuẩn mẫu 5512...");
      await exportLessonPlanToDocx(lesson);
      showToast("Tải về file Word thành công!");
    } catch (err: any) {
      console.error(err);
      showToast("Có lỗi khi tạo file Word: " + err.message);
    }
  };

  // Print
  const handlePrint = () => {
    window.print();
  };

  // Flat list of all 19 lessons for Next/Prev navigation
  const allLessons = TOPICS_DATA.flatMap((t) => t.lessons);
  const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Header */}
      <Header
        currentLesson={lesson}
        onExportDocx={handleExportDocx}
        onPrint={handlePrint}
        onOpenOrientation={() => setIsOrientationOpen(true)}
        onOpenCurriculum={() => setIsCurriculumOpen(true)}
      />

      {/* Secondary Bar with Topic context and quick navigation */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 text-xs print:hidden shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
              Chủ đề {lesson.topicNumber}
            </span>
            <span className="font-semibold text-slate-700 truncate max-w-[280px] sm:max-w-md">
              {lesson.topicTitle}
            </span>
          </div>

          {/* Prev/Next buttons */}
          <div className="flex items-center gap-2">
            <button
              disabled={!prevLesson}
              onClick={() => prevLesson && handleSelectLesson(prevLesson.id)}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-50 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none text-slate-700 border border-slate-200 text-[11px] font-medium"
              title={prevLesson ? prevLesson.title : ""}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Bài trước</span>
            </button>

            <span className="text-[11px] text-slate-400 px-1">
              Bài {currentIndex + 1} / {allLessons.length}
            </span>

            <button
              disabled={!nextLesson}
              onClick={() => nextLesson && handleSelectLesson(nextLesson.id)}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-50 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none text-slate-700 border border-slate-200 text-[11px] font-medium"
              title={nextLesson ? nextLesson.title : ""}
            >
              <span>Bài tiếp</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area - Direct Lesson Plan Viewer */}
      <main className="flex-1 pb-16">
        <LessonViewer lesson={lesson} />
      </main>

      {/* Footer Info (Hidden when printing) */}
      <footer className="bg-white border-t border-slate-200 py-4 px-4 text-center text-xs text-slate-500 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <strong>Dự án Soạn KHBD Hoạt động trải nghiệm, hướng nghiệp 8</strong> • Bộ sách Kết nối tri thức với cuộc sống
          </div>
          <div className="text-[11px] text-slate-400">
            Trường THCS Nguyễn Trung Trực • GV: Trần Văn Lộc • Tổ trưởng: Quách Hoàng Đệ
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CurriculumNavigator
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
        currentLessonId={currentLessonId}
        onSelectLesson={handleSelectLesson}
      />

      <OrientationModal
        isOpen={isOrientationOpen}
        onClose={() => setIsOrientationOpen(false)}
        lesson={lesson}
        onSelectLesson={handleSelectLesson}
      />
    </div>
  );
}
