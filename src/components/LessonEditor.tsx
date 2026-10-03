import React from "react";
import { LessonPlan, TeachingActivity, ActivityStep } from "../types";
import { Plus, Trash2, Save, Undo, Sparkles, HelpCircle } from "lucide-react";

interface LessonEditorProps {
  lesson: LessonPlan;
  onChange: (updatedLesson: LessonPlan) => void;
  onOpenAIForActivity?: (activityName: string) => void;
}

export const LessonEditor: React.FC<LessonEditorProps> = ({
  lesson,
  onChange,
  onOpenAIForActivity,
}) => {
  // Update top-level text field
  const updateField = (field: keyof LessonPlan, value: any) => {
    onChange({
      ...lesson,
      [field]: value,
    });
  };

  // Helper for array field manipulation
  const updateArrayItem = (path: string[], index: number, value: string) => {
    const updated = JSON.parse(JSON.stringify(lesson));
    let current = updated;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    const lastKey = path[path.length - 1];
    current[lastKey][index] = value;
    onChange(updated);
  };

  const addArrayItem = (path: string[], defaultValue = "") => {
    const updated = JSON.parse(JSON.stringify(lesson));
    let current = updated;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    const lastKey = path[path.length - 1];
    current[lastKey].push(defaultValue);
    onChange(updated);
  };

  const removeArrayItem = (path: string[], index: number) => {
    const updated = JSON.parse(JSON.stringify(lesson));
    let current = updated;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    const lastKey = path[path.length - 1];
    current[lastKey].splice(index, 1);
    onChange(updated);
  };

  // Helper to render activity editor
  const renderActivityEditor = (
    activity: TeachingActivity,
    onUpdateActivity: (act: TeachingActivity) => void,
    title: string,
    isSubActivity = false,
    onDelete?: () => void
  ) => {
    return (
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4 mb-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-bold text-slate-800 text-sm">{title}</h3>
            {isSubActivity && (
              <input
                type="text"
                value={activity.subTitle || ""}
                onChange={(e) =>
                  onUpdateActivity({ ...activity, subTitle: e.target.value })
                }
                placeholder="Tiêu đề hoạt động con..."
                className="mt-1 w-full text-xs font-semibold text-blue-700 bg-blue-50/50 border border-blue-200 px-2 py-1 rounded"
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            {onOpenAIForActivity && (
              <button
                type="button"
                onClick={() => onOpenAIForActivity(activity.name)}
                className="flex items-center gap-1 text-[11px] text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-2.5 py-1 rounded-md"
              >
                <Sparkles className="w-3 h-3 text-purple-600" />
                <span>Gợi ý AI</span>
              </button>
            )}
            {onDelete && (
              <button
                type="button"
                onClick={onDelete}
                className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded"
                title="Xóa hoạt động này"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mục tiêu & Nội dung */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              a) Mục tiêu:
            </label>
            <textarea
              rows={2}
              value={activity.objective}
              onChange={(e) =>
                onUpdateActivity({ ...activity, objective: e.target.value })
              }
              className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              b) Nội dung:
            </label>
            <textarea
              rows={2}
              value={activity.content}
              onChange={(e) =>
                onUpdateActivity({ ...activity, content: e.target.value })
              }
              className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
            />
          </div>
        </div>

        {/* 2-Column Structure (GV-HS 4 Steps vs Products) */}
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-2">
            c) Tổ chức thực hiện (4 bước) và Sản phẩm:
          </label>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
            {/* Left 7 cols: 4 Steps */}
            <div className="lg:col-span-7 space-y-3">
              {/* Step 1: Chuyển giao */}
              <div className="bg-white p-2.5 rounded-md border border-slate-200">
                <div className="text-xs font-bold text-blue-800 mb-1">
                  * Bước 1: Chuyển giao nhiệm vụ
                </div>
                {activity.steps.teacherActivity.map((line, idx) => (
                  <div key={idx} className="flex items-center gap-1 mb-1">
                    <input
                      type="text"
                      value={line}
                      onChange={(e) => {
                        const newSteps = { ...activity.steps };
                        newSteps.teacherActivity[idx] = e.target.value;
                        onUpdateActivity({ ...activity, steps: newSteps });
                      }}
                      className="w-full text-xs p-1.5 border border-slate-200 rounded"
                    />
                    <button
                      onClick={() => {
                        const newSteps = { ...activity.steps };
                        newSteps.teacherActivity.splice(idx, 1);
                        onUpdateActivity({ ...activity, steps: newSteps });
                      }}
                      className="text-slate-400 hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newSteps = { ...activity.steps };
                    newSteps.teacherActivity.push("GV giao nhiệm vụ...");
                    onUpdateActivity({ ...activity, steps: newSteps });
                  }}
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mt-1"
                >
                  <Plus className="w-3 h-3" /> Thêm dòng bước 1
                </button>
              </div>

              {/* Step 2: Thực hiện */}
              <div className="bg-white p-2.5 rounded-md border border-slate-200">
                <div className="text-xs font-bold text-blue-800 mb-1">
                  * Bước 2: Thực hiện nhiệm vụ
                </div>
                {activity.steps.studentActivity.map((line, idx) => (
                  <div key={idx} className="flex items-center gap-1 mb-1">
                    <input
                      type="text"
                      value={line}
                      onChange={(e) => {
                        const newSteps = { ...activity.steps };
                        newSteps.studentActivity[idx] = e.target.value;
                        onUpdateActivity({ ...activity, steps: newSteps });
                      }}
                      className="w-full text-xs p-1.5 border border-slate-200 rounded"
                    />
                    <button
                      onClick={() => {
                        const newSteps = { ...activity.steps };
                        newSteps.studentActivity.splice(idx, 1);
                        onUpdateActivity({ ...activity, steps: newSteps });
                      }}
                      className="text-slate-400 hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newSteps = { ...activity.steps };
                    newSteps.studentActivity.push("HS thực hiện nhiệm vụ...");
                    onUpdateActivity({ ...activity, steps: newSteps });
                  }}
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mt-1"
                >
                  <Plus className="w-3 h-3" /> Thêm dòng bước 2
                </button>
              </div>

              {/* Step 3: Báo cáo thảo luận */}
              <div className="bg-white p-2.5 rounded-md border border-slate-200">
                <div className="text-xs font-bold text-blue-800 mb-1">
                  * Bước 3: Báo cáo, thảo luận
                </div>
                {activity.steps.reportDiscussion.map((line, idx) => (
                  <div key={idx} className="flex items-center gap-1 mb-1">
                    <input
                      type="text"
                      value={line}
                      onChange={(e) => {
                        const newSteps = { ...activity.steps };
                        newSteps.reportDiscussion[idx] = e.target.value;
                        onUpdateActivity({ ...activity, steps: newSteps });
                      }}
                      className="w-full text-xs p-1.5 border border-slate-200 rounded"
                    />
                    <button
                      onClick={() => {
                        const newSteps = { ...activity.steps };
                        newSteps.reportDiscussion.splice(idx, 1);
                        onUpdateActivity({ ...activity, steps: newSteps });
                      }}
                      className="text-slate-400 hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newSteps = { ...activity.steps };
                    newSteps.reportDiscussion.push("Đại diện HS báo cáo...");
                    onUpdateActivity({ ...activity, steps: newSteps });
                  }}
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mt-1"
                >
                  <Plus className="w-3 h-3" /> Thêm dòng bước 3
                </button>
              </div>

              {/* Step 4: Kết luận nhận định */}
              <div className="bg-white p-2.5 rounded-md border border-slate-200">
                <div className="text-xs font-bold text-blue-800 mb-1">
                  * Bước 4: Kết luận, nhận định
                </div>
                {activity.steps.conclusion.map((line, idx) => (
                  <div key={idx} className="flex items-center gap-1 mb-1">
                    <input
                      type="text"
                      value={line}
                      onChange={(e) => {
                        const newSteps = { ...activity.steps };
                        newSteps.conclusion[idx] = e.target.value;
                        onUpdateActivity({ ...activity, steps: newSteps });
                      }}
                      className="w-full text-xs p-1.5 border border-slate-200 rounded"
                    />
                    <button
                      onClick={() => {
                        const newSteps = { ...activity.steps };
                        newSteps.conclusion.splice(idx, 1);
                        onUpdateActivity({ ...activity, steps: newSteps });
                      }}
                      className="text-slate-400 hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newSteps = { ...activity.steps };
                    newSteps.conclusion.push("GV kết luận kiến thức...");
                    onUpdateActivity({ ...activity, steps: newSteps });
                  }}
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mt-1"
                >
                  <Plus className="w-3 h-3" /> Thêm dòng bước 4
                </button>
              </div>
            </div>

            {/* Right 5 cols: Products */}
            <div className="lg:col-span-5 bg-white p-3 rounded-md border border-slate-200">
              <div className="text-xs font-bold text-slate-800 mb-2">
                Sản phẩm dự kiến:
              </div>
              <div className="space-y-1.5">
                {activity.product.map((prod, idx) => (
                  <div key={idx} className="flex items-start gap-1">
                    <textarea
                      rows={2}
                      value={prod}
                      onChange={(e) => {
                        const newProducts = [...activity.product];
                        newProducts[idx] = e.target.value;
                        onUpdateActivity({ ...activity, product: newProducts });
                      }}
                      className="w-full text-xs p-1.5 border border-slate-200 rounded"
                    />
                    <button
                      onClick={() => {
                        const newProducts = [...activity.product];
                        newProducts.splice(idx, 1);
                        onUpdateActivity({ ...activity, product: newProducts });
                      }}
                      className="text-slate-400 hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newProducts = [...activity.product, "Sản phẩm mới..."];
                    onUpdateActivity({ ...activity, product: newProducts });
                  }}
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mt-2"
                >
                  <Plus className="w-3 h-3" /> Thêm sản phẩm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto my-6 px-4 space-y-6">
      {/* 1. Thông tin chung & Đơn vị công tác */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase border-b border-slate-100 pb-2">
          Thông tin hành chính & Đơn vị công tác
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tên trường:
            </label>
            <input
              type="text"
              value={lesson.schoolName}
              onChange={(e) => updateField("schoolName", e.target.value)}
              className="w-full text-xs p-2 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tổ chuyên môn:
            </label>
            <input
              type="text"
              value={lesson.departmentName}
              onChange={(e) => updateField("departmentName", e.target.value)}
              className="w-full text-xs p-2 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Giáo viên soạn:
            </label>
            <input
              type="text"
              value={lesson.teacherName}
              onChange={(e) => updateField("teacherName", e.target.value)}
              className="w-full text-xs p-2 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tổ trưởng ký duyệt:
            </label>
            <input
              type="text"
              value={lesson.headOfDepartment}
              onChange={(e) => updateField("headOfDepartment", e.target.value)}
              className="w-full text-xs p-2 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Địa danh & Ngày tháng:
            </label>
            <input
              type="text"
              value={lesson.locationDate}
              onChange={(e) => updateField("locationDate", e.target.value)}
              className="w-full text-xs p-2 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Thời gian thực hiện (tiết):
            </label>
            <input
              type="text"
              value={lesson.duration}
              onChange={(e) => updateField("duration", e.target.value)}
              className="w-full text-xs p-2 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tên bài dạy:
            </label>
            <input
              type="text"
              value={lesson.lessonTitle}
              onChange={(e) => updateField("lessonTitle", e.target.value)}
              className="w-full text-xs font-bold p-2 border border-blue-200 rounded-lg bg-blue-50/30"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Lớp thực hiện:
            </label>
            <input
              type="text"
              value={lesson.classGrade}
              onChange={(e) => updateField("classGrade", e.target.value)}
              className="w-full text-xs p-2 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* 2. Mục tiêu (Kiến thức, Năng lực, Phẩm chất) */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase border-b border-slate-100 pb-2">
          I. Mục tiêu bài dạy
        </h2>

        {/* 1. Kiến thức */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-800">
            1. Kiến thức:
          </label>
          {lesson.objectives.knowledge.map((k, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <input
                type="text"
                value={k}
                onChange={(e) =>
                  updateArrayItem(["objectives", "knowledge"], idx, e.target.value)
                }
                className="w-full text-xs p-1.5 border border-slate-200 rounded"
              />
              <button
                onClick={() =>
                  removeArrayItem(["objectives", "knowledge"], idx)
                }
                className="text-slate-400 hover:text-red-600 p-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addArrayItem(["objectives", "knowledge"], "Mục tiêu kiến thức mới...")
            }
            className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> Thêm mục tiêu kiến thức
          </button>
        </div>

        {/* 2. Năng lực chung */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <label className="block text-xs font-bold text-slate-800">
            2.1 Năng lực chung:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="bg-slate-50 p-2 rounded">
              <span className="text-[11px] font-bold text-slate-700">
                Tự chủ & Tự học:
              </span>
              <textarea
                rows={3}
                value={lesson.objectives.generalCompetencies.selfControl.join("\n")}
                onChange={(e) => {
                  const updated = { ...lesson };
                  updated.objectives.generalCompetencies.selfControl = e.target.value.split("\n");
                  onChange(updated);
                }}
                className="w-full text-[11px] p-1.5 mt-1 border border-slate-200 rounded bg-white"
              />
            </div>
            <div className="bg-slate-50 p-2 rounded">
              <span className="text-[11px] font-bold text-slate-700">
                Giao tiếp & Hợp tác:
              </span>
              <textarea
                rows={3}
                value={lesson.objectives.generalCompetencies.communication.join("\n")}
                onChange={(e) => {
                  const updated = { ...lesson };
                  updated.objectives.generalCompetencies.communication = e.target.value.split("\n");
                  onChange(updated);
                }}
                className="w-full text-[11px] p-1.5 mt-1 border border-slate-200 rounded bg-white"
              />
            </div>
            <div className="bg-slate-50 p-2 rounded">
              <span className="text-[11px] font-bold text-slate-700">
                Giải quyết vấn đề:
              </span>
              <textarea
                rows={3}
                value={lesson.objectives.generalCompetencies.problemSolving.join("\n")}
                onChange={(e) => {
                  const updated = { ...lesson };
                  updated.objectives.generalCompetencies.problemSolving = e.target.value.split("\n");
                  onChange(updated);
                }}
                className="w-full text-[11px] p-1.5 mt-1 border border-slate-200 rounded bg-white"
              />
            </div>
          </div>
        </div>

        {/* 2.2 Năng lực đặc thù */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <label className="block text-xs font-bold text-slate-800">
            2.2 Năng lực đặc thù (HĐTN):
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="bg-slate-50 p-2 rounded">
              <span className="text-[11px] font-bold text-slate-700">
                Thích ứng cuộc sống:
              </span>
              <textarea
                rows={2}
                value={lesson.objectives.specificCompetencies.adaptation.join("\n")}
                onChange={(e) => {
                  const updated = { ...lesson };
                  updated.objectives.specificCompetencies.adaptation = e.target.value.split("\n");
                  onChange(updated);
                }}
                className="w-full text-[11px] p-1.5 mt-1 border border-slate-200 rounded bg-white"
              />
            </div>
            <div className="bg-slate-50 p-2 rounded">
              <span className="text-[11px] font-bold text-slate-700">
                Thiết kế & tổ chức:
              </span>
              <textarea
                rows={2}
                value={lesson.objectives.specificCompetencies.organization.join("\n")}
                onChange={(e) => {
                  const updated = { ...lesson };
                  updated.objectives.specificCompetencies.organization = e.target.value.split("\n");
                  onChange(updated);
                }}
                className="w-full text-[11px] p-1.5 mt-1 border border-slate-200 rounded bg-white"
              />
            </div>
            <div className="bg-slate-50 p-2 rounded">
              <span className="text-[11px] font-bold text-slate-700">
                Định hướng nghề nghiệp:
              </span>
              <textarea
                rows={2}
                value={lesson.objectives.specificCompetencies.careerOrientation.join("\n")}
                onChange={(e) => {
                  const updated = { ...lesson };
                  updated.objectives.specificCompetencies.careerOrientation = e.target.value.split("\n");
                  onChange(updated);
                }}
                className="w-full text-[11px] p-1.5 mt-1 border border-slate-200 rounded bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Thiết bị dạy học */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase border-b border-slate-100 pb-2">
          II. Thiết bị dạy học và học liệu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              1. Giáo viên:
            </label>
            <textarea
              rows={4}
              value={lesson.equipment.teacher.join("\n")}
              onChange={(e) => {
                const updated = { ...lesson };
                updated.equipment.teacher = e.target.value.split("\n");
                onChange(updated);
              }}
              className="w-full text-xs p-2 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              2. Học sinh:
            </label>
            <textarea
              rows={4}
              value={lesson.equipment.student.join("\n")}
              onChange={(e) => {
                const updated = { ...lesson };
                updated.equipment.student = e.target.value.split("\n");
                onChange(updated);
              }}
              className="w-full text-xs p-2 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* 4. Tiến trình dạy học */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 uppercase">
          III. Tiến trình dạy học (Chuẩn 4 hoạt động)
        </h2>

        {/* Hoạt động 1: Mở đầu */}
        {renderActivityEditor(
          lesson.timeline.warmUp,
          (updated) => {
            const newLesson = { ...lesson };
            newLesson.timeline.warmUp = updated;
            onChange(newLesson);
          },
          "1. HOẠT ĐỘNG 1: MỞ ĐẦU (Khởi động)"
        )}

        {/* Hoạt động 2: Hình thành kiến thức mới (Danh sách các hoạt động con 2.1, 2.2...) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-800 uppercase">
              2. HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI
            </h3>
            <button
              type="button"
              onClick={() => {
                const newLesson = { ...lesson };
                const newSubActivity: TeachingActivity = {
                  id: `hd2_${newLesson.timeline.knowledgeFormation.length + 1}`,
                  name: `Hoạt động 2.${newLesson.timeline.knowledgeFormation.length + 1}`,
                  subTitle: `Hoạt động 2.${newLesson.timeline.knowledgeFormation.length + 1}: Nội dung mới...`,
                  objective: "Mục tiêu chiếm lĩnh kiến thức...",
                  content: "Nhiệm vụ học tập của học sinh...",
                  steps: {
                    teacherActivity: ["Bước 1: Chuyển giao nhiệm vụ..."],
                    studentActivity: ["Bước 2: Thực hiện nhiệm vụ..."],
                    reportDiscussion: ["Bước 3: Báo cáo, thảo luận..."],
                    conclusion: ["Bước 4: Kết luận, nhận định..."],
                  },
                  product: ["Sản phẩm dự kiến..."],
                };
                newLesson.timeline.knowledgeFormation.push(newSubActivity);
                onChange(newLesson);
              }}
              className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-lg flex items-center gap-1 font-semibold"
            >
              <Plus className="w-3.5 h-3.5" /> Thêm Hoạt động 2.x
            </button>
          </div>

          {lesson.timeline.knowledgeFormation.map((subAct, idx) =>
            renderActivityEditor(
              subAct,
              (updated) => {
                const newLesson = { ...lesson };
                newLesson.timeline.knowledgeFormation[idx] = updated;
                onChange(newLesson);
              },
              `HOẠT ĐỘNG 2.${idx + 1}`,
              true,
              lesson.timeline.knowledgeFormation.length > 1
                ? () => {
                    const newLesson = { ...lesson };
                    newLesson.timeline.knowledgeFormation.splice(idx, 1);
                    onChange(newLesson);
                  }
                : undefined
            )
          )}
        </div>

        {/* Hoạt động 3: Luyện tập */}
        {renderActivityEditor(
          lesson.timeline.practice,
          (updated) => {
            const newLesson = { ...lesson };
            newLesson.timeline.practice = updated;
            onChange(newLesson);
          },
          "3. HOẠT ĐỘNG 3: LUYỆN TẬP"
        )}

        {/* Hoạt động 4: Vận dụng */}
        {renderActivityEditor(
          lesson.timeline.application,
          (updated) => {
            const newLesson = { ...lesson };
            newLesson.timeline.application = updated;
            onChange(newLesson);
          },
          "4. HOẠT ĐỘNG 4: VẬN DỤNG"
        )}
      </div>
    </div>
  );
};
