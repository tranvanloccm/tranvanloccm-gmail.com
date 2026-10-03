export interface ActivityStep {
  teacherActivity: string[]; // Bước 1: Chuyển giao nhiệm vụ
  studentActivity: string[]; // Bước 2: Thực hiện nhiệm vụ
  reportDiscussion: string[]; // Bước 3: Báo cáo, thảo luận
  conclusion: string[]; // Bước 4: Kết luận, nhận định
}

export interface TeachingActivity {
  id: string;
  name: string;
  subTitle?: string;
  objective: string;
  content: string;
  steps: ActivityStep;
  product: string[];
}

export type ActivityCategory = "SHDC" | "HDGD" | "SHL";

export interface LessonPlan {
  id: string;
  schoolName: string; // "TRƯỜNG THCS NGUYỄN TRUNG TRỰC"
  departmentName: string; // "TỔ KHOA HỌC TỰ NHIÊN"
  teacherName: string; // "Trần Văn Lộc"
  headOfDepartment: string; // "Quách Hoàng Đệ"
  locationDate: string; // "U Minh, ngày 15 tháng 08 năm 2026"
  
  lessonTitle: string; // "TÊN BÀI DẠY: ..."
  activityType?: ActivityCategory; // "SHDC" | "HDGD" | "SHL"
  weekNumber?: number; // Tuần 1, 2, 3...
  periodNumber?: number; // Tiết 1, 2, ... 105 theo PPCT
  orientationName?: string; // Tên định hướng / Nội dung cột 6
  subject: string; // "Hoạt động trải nghiệm, hướng nghiệp 8"
  grade: string; // "8"
  classGrade: string; // "8A1, 8A2"
  duration: string; // "1 tiết" hoặc "2 tiết"
  topicNumber: number; // 1 to 9
  topicTitle: string; // "CHỦ ĐỀ 1: EM VỚI NHÀ TRƯỜNG"

  objectives: {
    knowledge: string[];
    generalCompetencies: {
      selfControl: string[]; // Tự chủ và tự học
      communication: string[]; // Giao tiếp và hợp tác
      problemSolving: string[]; // Giải quyết vấn đề và sáng tạo
    };
    specificCompetencies: {
      adaptation: string[]; // Thích ứng với cuộc sống
      organization: string[]; // Thiết kế và tổ chức hoạt động
      careerOrientation: string[]; // Định hướng nghề nghiệp
    };
    digitalCompetency?: string[]; // Năng lực số (Tích hợp dựa vào cột 8 PPCT)
    qualities: {
      patriotism?: string[]; // Yêu nước
      compassion?: string[]; // Nhân ái
      diligence?: string[]; // Chăm chỉ
      honesty?: string[]; // Trung thực
      responsibility?: string[]; // Trách nhiệm
    };
  };

  equipment: {
    teacher: string[];
    student: string[];
  };

  timeline: {
    warmUp: TeachingActivity; // Hoạt động 1: Mở đầu
    knowledgeFormation: TeachingActivity[]; // Hoạt động 2: Hình thành kiến thức mới (2.1, 2.2, 2.3...)
    practice: TeachingActivity; // Hoạt động 3: Luyện tập
    application: TeachingActivity; // Hoạt động 4: Vận dụng
  };

  flagRaisingOrientation?: string[]; // Định hướng nội dung Sinh hoạt dưới cờ
  classMeetingOrientation?: string[]; // Định hướng nội dung Sinh hoạt lớp
}

export interface TopicLessonItem {
  id: string;
  periodNumber?: number; // Tiết 1 đến 105
  title: string;
  activityType: ActivityCategory;
  week: number;
  periodCount: number;
  orientation: string;
  description: string;
  digitalCompetency?: string; // Tích hợp Năng lực số (Cột 8 PPCT)
}

export interface TopicInfo {
  id: number;
  title: string;
  theme: string;
  pageRange: string;
  goals: string[];
  flagRaisingOrientations: string[];
  themeActivityOrientations: string[];
  classMeetingOrientations: string[];
  lessons: TopicLessonItem[];
}

