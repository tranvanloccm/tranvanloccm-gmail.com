import { TopicInfo } from "../types";

export const TOPICS_DATA: TopicInfo[] = [
  // ==================== CHỦ ĐỀ 1: EM VỚI NHÀ TRƯỜNG (9 tiết) ====================
  {
    id: 1,
    title: "Chủ đề 1: Em với nhà trường",
    theme: "Em với nhà trường",
    pageRange: "Trang 4 - 11",
    goals: [
      "Xây dựng được tình bạn và biết cách giữ gìn tình bạn.",
      "Nhận diện được dấu hiệu bắt nạt học đường và có kĩ năng phòng, tránh bắt nạt học đường.",
      "Thực hiện được các việc làm cụ thể góp phần xây dựng truyền thống nhà trường."
    ],
    flagRaisingOrientations: [
      "Khai giảng năm học mới.",
      "Tham gia lễ phát động cuộc thi “Em yêu trường em”."
    ],
    themeActivityOrientations: [
      "Xây dựng và giữ gìn tình bạn",
      "Phòng tránh bắt nạt học đường",
      "Xây dựng truyền thống nhà trường."
    ],
    classMeetingOrientations: [
      "SHL: Chia sẻ kết quả của hoạt động xây dựng và giữ gìn tình bạn.",
      "Triển lãm hình ảnh với khẩu hiệu “Lớp học không có bắt nạt”.",
      "Chia sẻ kết quả cuộc thi “Em yêu trường em”. – Chia sẻ kế hoạch về hoạt động xây dựng truyền thống nhà trường. Đánh giá chủ đề 1 (KTTX số 01)"
    ],
    lessons: [
      // Tuần 1
      {
        id: "cd1-tiet-1",
        periodNumber: 1,
        title: "Tiết 1 (SHDC - Tuần 1): Khai giảng năm học mới.",
        activityType: "SHDC",
        week: 1,
        periodCount: 1,
        orientation: "Khai giảng năm học mới.",
        description: "Hòa mình vào không khí ngày hội khai trường, lắng nghe phát động thi đua và xác định mục tiêu học tập năm học mới."
      },
      {
        id: "cd1-tiet-2",
        periodNumber: 2,
        title: "Tiết 2 (HĐGD - Tuần 1): Xây dựng và giữ gìn tình bạn",
        activityType: "HDGD",
        week: 1,
        periodCount: 1,
        orientation: "Xây dựng và giữ gìn tình bạn",
        description: "Tìm hiểu ý nghĩa tình bạn, các cách kết bạn và giữ gìn tình bạn bền chặt, thực hành giải quyết mâu thuẫn học đường."
      },
      {
        id: "cd1-tiet-3",
        periodNumber: 3,
        title: "Tiết 3 (SHL - Tuần 1): SHL: Chia sẻ kết quả của hoạt động xây dựng và giữ gìn tình bạn.",
        activityType: "SHL",
        week: 1,
        periodCount: 1,
        orientation: "SHL: Chia sẻ kết quả của hoạt động xây dựng và giữ gìn tình bạn.",
        description: "Học sinh chia sẻ những kỉ niệm đẹp về tình bạn, sản phẩm sơ đồ tư duy tình bạn và cam kết xây dựng tình bạn đẹp."
      },
      // Tuần 2
      {
        id: "cd1-tiet-4",
        periodNumber: 4,
        title: "Tiết 4 (HĐGD - Tuần 2): Phòng tránh bắt nạt học đường",
        activityType: "HDGD",
        week: 2,
        periodCount: 1,
        orientation: "Phòng tránh bắt nạt học đường",
        description: "Nhận diện 4 hình thức bắt nạt (thể chất, lời nói, quan hệ, mạng), phân loại việc nên/không nên làm và thực hành kĩ năng ứng phó."
      },
      {
        id: "cd1-tiet-5",
        periodNumber: 5,
        title: "Tiết 5 (HĐGD - Tuần 2): Phòng tránh bắt nạt học đường",
        activityType: "HDGD",
        week: 2,
        periodCount: 1,
        orientation: "Phòng tránh bắt nạt học đường",
        description: "Rèn luyện kĩ năng xử lí tình huống bị bắt nạt và giúp đỡ bạn bè thoát khỏi nạn bạo lực học đường."
      },
      {
        id: "cd1-tiet-6",
        periodNumber: 6,
        title: "Tiết 6 (SHL - Tuần 2): Triển lãm hình ảnh với khẩu hiệu “Lớp học không có bắt nạt”.",
        activityType: "SHL",
        week: 2,
        periodCount: 1,
        orientation: "Triển lãm hình ảnh với khẩu hiệu “Lớp học không có bắt nạt”.",
        description: "Trưng bày tranh cổ động, khẩu hiệu và kí cam kết 'Nói KHÔNG với bắt nạt học đường' giữa các tổ trong lớp."
      },
      // Tuần 3
      {
        id: "cd1-tiet-7",
        periodNumber: 7,
        title: "Tiết 7 (SHDC - Tuần 3): Tham gia lễ phát động cuộc thi “Em yêu trường em”.",
        activityType: "SHDC",
        week: 3,
        periodCount: 1,
        orientation: "Tham gia lễ phát động cuộc thi “Em yêu trường em”.",
        description: "Toàn trường hưởng ứng lễ phát động tìm hiểu lịch sử, truyền thống vẻ vang của nhà trường qua các thời kì."
      },
      {
        id: "cd1-tiet-8",
        periodNumber: 8,
        title: "Tiết 8 (HĐGD - Tuần 3): Xây dựng truyền thống nhà trường.",
        activityType: "HDGD",
        week: 3,
        periodCount: 1,
        orientation: "Xây dựng truyền thống nhà trường.",
        description: "Tìm hiểu việc làm cụ thể giữ gìn và phát huy truyền thống hiếu học, tôn sư trọng đạo, bảo vệ cảnh quan trường lớp."
      },
      {
        id: "cd1-tiet-9",
        periodNumber: 9,
        title: "Tiết 9 (SHL - Tuần 3): Chia sẻ kết quả cuộc thi “Em yêu trường em”. – Chia sẻ kế hoạch về hoạt động xây dựng truyền thống nhà trường. Đánh giá chủ đề 1 (KTTX số 01)",
        activityType: "SHL",
        week: 3,
        periodCount: 1,
        orientation: "Chia sẻ kết quả cuộc thi “Em yêu trường em”. – Chia sẻ kế hoạch về hoạt động xây dựng truyền thống nhà trường. Đánh giá chủ đề 1 (KTTX số 01)",
        description: "Báo cáo sản phẩm dự thi 'Em yêu trường em' của lớp và thực hiện đánh giá thường xuyên số 01 theo chủ đề 1."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 2: KHÁM PHÁ BẢN THÂN (12 tiết) ====================
  {
    id: 2,
    title: "Chủ đề 2: Khám phá bản thân",
    theme: "Khám phá bản thân",
    pageRange: "Trang 12 - 19",
    goals: [
      "Nhận diện được những nét đặc trưng trong tính cách của bản thân.",
      "Nhận diện được sự thay đổi cảm xúc của bản thân và biết điều chỉnh theo hướng tích cực.",
      "Nhận diện được khả năng tranh biện, thương thuyết của bản thân để bảo vệ quan điểm của mình trong một số tình huống."
    ],
    flagRaisingOrientations: [
      "Tham gia cuộc thi “Nghệ sĩ kịch câm tài ba”.",
      "Tham gia tranh biện về một số vấn đề liên quan đến HSTHCS"
    ],
    themeActivityOrientations: [
      "Tính cách và cảm xúc của tôi",
      "Tính cách và cảm xúc của tôi (tt).",
      "Khả năng tranh biện, thương thuyết của tôi.",
      "Khả năng tranh biện, thương thuyết của tôi (tt)."
    ],
    classMeetingOrientations: [
      "Chia sẻ kết quả rèn luyện khả năng xác định nét đặc trưng trong tính cách của bản thân.",
      "Chia sẻ kết quả rèn luyện khả năng nhận diện cảm xúc và điều chỉnh cảm xúc theo hướng tích cực.",
      "Chia sẻ kết quả tự đánh giá khả năng tranh biện, thương thuyết của bản thân.",
      "Chia sẻ kết quả rèn luyện khả năng tranh biện, thương thuyết để bảo vệ quan điểm của bản thân trong một số tình huống. Đánh giá chủ đề 2 (KTTX số 02)"
    ],
    lessons: [
      // Tuần 4
      {
        id: "cd2-tiet-10",
        periodNumber: 10,
        title: "Tiết 10 (HĐGD - Tuần 4): Tính cách và cảm xúc của tôi",
        activityType: "HDGD",
        week: 4,
        periodCount: 1,
        orientation: "Tính cách và cảm xúc của tôi",
        description: "Nhận diện nét tính cách nổi bật (cởi mở, hòa đồng, cẩn thận, nhút nhát...), điểm mạnh, điểm hạn chế của bản thân."
      },
      {
        id: "cd2-tiet-11",
        periodNumber: 11,
        title: "Tiết 11 (HĐGD - Tuần 4): Tính cách và cảm xúc của tôi",
        activityType: "HDGD",
        week: 4,
        periodCount: 1,
        orientation: "Tính cách và cảm xúc của tôi",
        description: "Rèn luyện khả năng thể hiện các nét tính cách tích cực và kiểm soát sự thay đổi tâm lí lứa tuổi học sinh THCS."
      },
      {
        id: "cd2-tiet-12",
        periodNumber: 12,
        title: "Tiết 12 (SHL - Tuần 4): Chia sẻ kết quả rèn luyện khả năng xác định nét đặc trưng trong tính cách của bản thân.",
        activityType: "SHL",
        week: 4,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện khả năng xác định nét đặc trưng trong tính cách của bản thân.",
        description: "Học sinh chia sẻ kết quả tự đánh giá tính cách và lắng nghe phản hồi tích cực từ bạn bè trong lớp.",
        digitalCompetency: "[1.1.TC2.b] & [5.2.TC2.b]: Tìm kiếm, lựa chọn thông tin phù hợp; sử dụng công cụ số hỗ trợ tự đánh giá và ra quyết định."
      },
      // Tuần 5
      {
        id: "cd2-tiet-13",
        periodNumber: 13,
        title: "Tiết 13 (SHDC - Tuần 5): Tham gia cuộc thi “Nghệ sĩ kịch câm tài ba”.",
        activityType: "SHDC",
        week: 5,
        periodCount: 1,
        orientation: "Tham gia cuộc thi “Nghệ sĩ kịch câm tài ba”.",
        description: "Hưởng ứng cuộc thi biểu cảm ngôn ngữ cơ thể, nhận diện cảm xúc không lời của tuổi học trò."
      },
      {
        id: "cd2-tiet-14",
        periodNumber: 14,
        title: "Tiết 14 (HĐGD - Tuần 5): Tính cách và cảm xúc của tôi (tt).",
        activityType: "HDGD",
        week: 5,
        periodCount: 1,
        orientation: "Tính cách và cảm xúc của tôi (tt).",
        description: "Nhận diện cảm xúc vui, buồn, tức giận, thất vọng và thực hành các biện pháp giải tỏa cảm xúc tiêu cực lành mạnh."
      },
      {
        id: "cd2-tiet-15",
        periodNumber: 15,
        title: "Tiết 15 (SHL - Tuần 5): Chia sẻ kết quả rèn luyện khả năng nhận diện cảm xúc và điều chỉnh cảm xúc theo hướng tích cực.",
        activityType: "SHL",
        week: 5,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện khả năng nhận diện cảm xúc và điều chỉnh cảm xúc theo hướng tích cực.",
        description: "Chia sẻ các biện pháp điều chỉnh cảm xúc tích cực đã áp dụng thành công trong gia đình và trường học."
      },
      // Tuần 6
      {
        id: "cd2-tiet-16",
        periodNumber: 16,
        title: "Tiết 16 (HĐGD - Tuần 6): Khả năng tranh biện, thương thuyết của tôi.",
        activityType: "HDGD",
        week: 6,
        periodCount: 1,
        orientation: "Khả năng tranh biện, thương thuyết của tôi.",
        description: "Nắm vững quy trình tranh biện (luận điểm, lí lẽ, dẫn chứng), kĩ năng thương thuyết và thực hành tranh luận văn minh.",
        digitalCompetency: "[2.1.TC2.a] & [2.5.TC2.a]: Tương tác, giao tiếp và hợp tác có trách nhiệm trên môi trường số."
      },
      {
        id: "cd2-tiet-17",
        periodNumber: 17,
        title: "Tiết 17 (HĐGD - Tuần 6): Khả năng tranh biện, thương thuyết của tôi.",
        activityType: "HDGD",
        week: 6,
        periodCount: 1,
        orientation: "Khả năng tranh biện, thương thuyết của tôi.",
        description: "Thực hành bảo vệ quan điểm cá nhân trong các tình huống thảo luận và thương thuyết hòa giải bất đồng."
      },
      {
        id: "cd2-tiet-18",
        periodNumber: 18,
        title: "Tiết 18 (SHL - Tuần 6): Chia sẻ kết quả tự đánh giá khả năng tranh biện, thương thuyết của bản thân.",
        activityType: "SHL",
        week: 6,
        periodCount: 1,
        orientation: "Chia sẻ kết quả tự đánh giá khả năng tranh biện, thương thuyết của bản thân.",
        description: "Tổ chức sân chơi tranh biện mini cấp lớp và chia sẻ kinh nghiệm rèn luyện sự tự tin khi nói trước đám đông."
      },
      // Tuần 7
      {
        id: "cd2-tiet-19",
        periodNumber: 19,
        title: "Tiết 19 (SHDC - Tuần 7): Tham gia tranh biện về một số vấn đề liên quan đến HSTHCS",
        activityType: "SHDC",
        week: 7,
        periodCount: 1,
        orientation: "Tham gia tranh biện về một số vấn đề liên quan đến HSTHCS",
        description: "Sinh hoạt toàn trường: Tranh luận các chủ đề thời sự gần gũi với học sinh THCS (sử dụng mạng xã hội, áp lực học tập...).",
        digitalCompetency: "[2.1.TC2.a] & [2.5.TC2.a]: Tương tác, giao tiếp và hợp tác có trách nhiệm trên môi trường số."
      },
      {
        id: "cd2-tiet-20",
        periodNumber: 20,
        title: "Tiết 20 (HĐGD - Tuần 7): Khả năng tranh biện, thương thuyết của tôi (tt).",
        activityType: "HDGD",
        week: 7,
        periodCount: 1,
        orientation: "Khả năng tranh biện, thương thuyết của tôi (tt).",
        description: "Tổng hợp các kĩ năng tranh biện, thương thuyết hiệu quả và rút ra bài học ứng xử linh hoạt trong đời sống."
      },
      {
        id: "cd2-tiet-21",
        periodNumber: 21,
        title: "Tiết 21 (SHL - Tuần 7): Chia sẻ kết quả rèn luyện khả năng tranh biện, thương thuyết để bảo vệ quan điểm của bản thân trong một số tình huống. Đánh giá chủ đề 2 (KTTX số 02)",
        activityType: "SHL",
        week: 7,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện khả năng tranh biện, thương thuyết để bảo vệ quan điểm của bản thân trong một số tình huống. Đánh giá chủ đề 2 (KTTX số 02)",
        description: "Báo cáo hồ sơ cá nhân trước tập thể tổ và hoàn thành bài kiểm tra thường xuyên số 02 cho chủ đề 2."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 3: TRÁCH NHIỆM VỚI BẢN THÂN (15 tiết) ====================
  {
    id: 3,
    title: "Chủ đề 3: Trách nhiệm với bản thân",
    theme: "Trách nhiệm với bản thân",
    pageRange: "Trang 20 - 27",
    goals: [
      "Xác định được trách nhiệm với bản thân và với mọi người xung quanh.",
      "Thể hiện được trách nhiệm của bản thân trong các hoạt động, thực hiện được các cam kết đề ra.",
      "Nhận biết được những tình huống cần từ chối và thực hiện được kĩ năng từ chối trong một số tình huống cụ thể."
    ],
    flagRaisingOrientations: [
      "Kịch tương tác thể hiện trách nhiệm của học sinh.",
      "Diễn đàn: Kĩ năng từ chối trong cuộc sống"
    ],
    themeActivityOrientations: [
      "Sống có trách nhiệm",
      "Kiểm tra định kì giữa học kì I",
      "Kĩ năng từ chối",
      "Kĩ năng từ chối (tt)."
    ],
    classMeetingOrientations: [
      "Tranh biện về quan điểm “Chỉ khi hoàn thành được trách nhiệm học tập, học sinh mới có thể thực hiện các trách nhiệm khác”.",
      "Chia sẻ kết quả rèn luyện kĩ năng nhận diện và thể hiện trách nhiệm của bản thân trong các hoạt động.",
      "Trò chơi “Tôi từ chối” hoặc chia sẻ kết quả sưu tầm các mẫu câu từ chối cụ thể ứng với mỗi hình thức từ chối.",
      "Chia sẻ kết quả rèn luyện và thực hiện kĩ năng từ chối trong một số tình huống cụ thể. Đánh giá chủ đề 3."
    ],
    lessons: [
      // Tuần 8
      {
        id: "cd3-tiet-22",
        periodNumber: 22,
        title: "Tiết 22 (HĐGD - Tuần 8): Sống có trách nhiệm",
        activityType: "HDGD",
        week: 8,
        periodCount: 1,
        orientation: "Sống có trách nhiệm",
        description: "Tìm hiểu biểu hiện trách nhiệm trong việc chăm sóc sức khỏe, quản lí thời gian, tự giác học tập và làm chủ hành vi."
      },
      {
        id: "cd3-tiet-23",
        periodNumber: 23,
        title: "Tiết 23 (HĐGD - Tuần 8): Sống có trách nhiệm",
        activityType: "HDGD",
        week: 8,
        periodCount: 1,
        orientation: "Sống có trách nhiệm",
        description: "Thực hành tinh thần trách nhiệm khi làm việc nhóm, thực hiện lời hứa và khắc phục hậu quả khi có sơ suất.",
        digitalCompetency: "[2.5.TC2.a] & [4.2.TC2.a]: Ứng xử có trách nhiệm; bảo vệ bản thân và lựa chọn giải pháp phù hợp trong môi trường số."
      },
      {
        id: "cd3-tiet-24",
        periodNumber: 24,
        title: "Tiết 24 (SHL - Tuần 8): Tranh biện về quan điểm “Chỉ khi hoàn thành được trách nhiệm học tập, học sinh mới có thể thực hiện các trách nhiệm khác”.",
        activityType: "SHL",
        week: 8,
        periodCount: 1,
        orientation: "Tranh biện về quan điểm “Chỉ khi hoàn thành được trách nhiệm học tập, học sinh mới có thể thực hiện các trách nhiệm khác”.",
        description: "Thảo luận các trường hợp giữ đúng lời hứa, chịu trách nhiệm về sai sót của bản thân và bài học rút ra."
      },
      // Tuần 9
      {
        id: "cd3-tiet-25",
        periodNumber: 25,
        title: "Tiết 25 (SHDC - Tuần 9): Kịch tương tác thể hiện trách nhiệm của học sinh.",
        activityType: "SHDC",
        week: 9,
        periodCount: 1,
        orientation: "Kịch tương tác thể hiện trách nhiệm của học sinh.",
        description: "Biểu dương các cá nhân và chi đội có tinh thần trách nhiệm cao trong phong trào tự quản và giữ gìn nề nếp trường lớp."
      },
      {
        id: "cd3-tiet-26",
        periodNumber: 26,
        title: "Tiết 26 (HĐGD - Tuần 9): Sống có trách nhiệm",
        activityType: "HDGD",
        week: 9,
        periodCount: 1,
        orientation: "Sống có trách nhiệm",
        description: "Rèn luyện thói quen tự giác hoàn thành nhiệm vụ và dũng cảm nhận trách nhiệm trước tập thể."
      },
      {
        id: "cd3-tiet-27",
        periodNumber: 27,
        title: "Tiết 27 (HĐGD - Tuần 9): Kiểm tra định kì giữa học kì I",
        activityType: "HDGD",
        week: 9,
        periodCount: 1,
        orientation: "Kiểm tra định kì giữa học kì I",
        description: "Thực hiện kiểm tra đánh giá định kì giữa học kì I theo chương trình giáo dục phổ thông 2018.",
        digitalCompetency: "[1.2.TC2.a] & [4.2.TC2.a]: Đánh giá thông tin, sản phẩm số; thực hiện học tập và đánh giá trong môi trường số an toàn."
      },
      {
        id: "cd3-tiet-28",
        periodNumber: 28,
        title: "Tiết 28 (SHL - Tuần 9): Chia sẻ kết quả rèn luyện kĩ năng nhận diện và thể hiện trách nhiệm của bản thân trong các hoạt động.",
        activityType: "SHL",
        week: 9,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện kĩ năng nhận diện và thể hiện trách nhiệm của bản thân trong các hoạt động.",
        description: "Các tổ sơ kết các việc đã làm tốt, tuyên dương cá nhân có tinh thần trách nhiệm cao."
      },
      // Tuần 10
      {
        id: "cd3-tiet-29",
        periodNumber: 29,
        title: "Tiết 29 (HĐGD - Tuần 10): Kĩ năng từ chối",
        activityType: "HDGD",
        week: 10,
        periodCount: 1,
        orientation: "Kĩ năng từ chối",
        description: "Quy trình 3 bước từ chối kiên quyết, lịch sự: Nói KHÔNG rõ ràng - Đưa ra lí do chính đáng - Đề xuất giải pháp thay thế.",
        digitalCompetency: "[2.5.TC2.a] & [4.2.TC2.a]: Giao tiếp, ứng xử có trách nhiệm; nhận diện và xử lí tình huống rủi ro trên môi trường số."
      },
      {
        id: "cd3-tiet-30",
        periodNumber: 30,
        title: "Tiết 30 (SHL - Tuần 10): Chia sẻ kết quả rèn luyện kĩ năng nhận diện và thể hiện trách nhiệm của bản thân trong các hoạt động.",
        activityType: "SHL",
        week: 10,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện kĩ năng nhận diện và thể hiện trách nhiệm của bản thân trong các hoạt động.",
        description: "Báo cáo các hành vi thể hiện trách nhiệm với gia đình, người thân và thầy cô giáo."
      },
      // Tuần 11
      {
        id: "cd3-tiet-31",
        periodNumber: 31,
        title: "Tiết 31 (SHDC - Tuần 11): Diễn đàn: Kĩ năng từ chối trong cuộc sống",
        activityType: "SHDC",
        week: 11,
        periodCount: 1,
        orientation: "Diễn đàn: Kĩ năng từ chối trong cuộc sống",
        description: "Sinh hoạt toàn trường về kĩ năng tự bảo vệ, kiên quyết từ chối các cám dỗ và thói hư tật xấu."
      },
      {
        id: "cd3-tiet-32",
        periodNumber: 32,
        title: "Tiết 32 (HĐGD - Tuần 11): Kĩ năng từ chối",
        activityType: "HDGD",
        week: 11,
        periodCount: 1,
        orientation: "Kĩ năng từ chối",
        description: "Thực hành kĩ năng từ chối trước các lời rủ rê trốn học, chơi game bạo lực, thử chất kích thích."
      },
      {
        id: "cd3-tiet-33",
        periodNumber: 33,
        title: "Tiết 33 (SHL - Tuần 11): Trò chơi “Tôi từ chối” hoặc chia sẻ kết quả sưu tầm các mẫu câu từ chối cụ thể ứng với mỗi hình thức từ chối.",
        activityType: "SHL",
        week: 11,
        periodCount: 1,
        orientation: "Trò chơi “Tôi từ chối” hoặc chia sẻ kết quả sưu tầm các mẫu câu từ chối cụ thể ứng với mỗi hình thức từ chối.",
        description: "Thực hành trò chơi xử lí tình huống từ chối khéo léo và chia sẻ bộ sưu tập câu nói từ chối văn minh."
      },
      // Tuần 12
      {
        id: "cd3-tiet-34",
        periodNumber: 34,
        title: "Tiết 34 (HĐGD - Tuần 12): Kĩ năng từ chối",
        activityType: "HDGD",
        week: 12,
        periodCount: 1,
        orientation: "Kĩ năng từ chối",
        description: "Rèn luyện thái độ kiên định, dứt khoát và ứng xử thông minh trước các tình huống bị ép buộc."
      },
      {
        id: "cd3-tiet-35",
        periodNumber: 35,
        title: "Tiết 35 (HĐGD - Tuần 12): Kĩ năng từ chối (tt).",
        activityType: "HDGD",
        week: 12,
        periodCount: 1,
        orientation: "Kĩ năng từ chối (tt).",
        description: "Tổng kết các biện pháp từ chối an toàn và lập cẩm nang phòng ngừa tệ nạn xã hội.",
        digitalCompetency: "[2.5.TC2.a] & [4.2.TC2.a]: Giao tiếp, ứng xử có trách nhiệm; nhận diện và xử lí tình huống rủi ro trên môi trường số."
      },
      {
        id: "cd3-tiet-36",
        periodNumber: 36,
        title: "Tiết 36 (SHL - Tuần 12): Chia sẻ kết quả rèn luyện và thực hiện kĩ năng từ chối trong một số tình huống cụ thể. Đánh giá chủ đề 3.",
        activityType: "SHL",
        week: 12,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện và thực hiện kĩ năng từ chối trong một số tình huống cụ thể. Đánh giá chủ đề 3.",
        description: "Tổng kết, đánh giá mức độ hoàn thành các mục tiêu rèn luyện tính trách nhiệm và kĩ năng từ chối của Chủ đề 3."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 4: RÈN LUYỆN BẢN THÂN (15 tiết) ====================
  {
    id: 4,
    title: "Chủ đề 4: Rèn luyện bản thân",
    theme: "Rèn luyện bản thân",
    pageRange: "Trang 28 - 35",
    goals: [
      "Thực hiện được các việc làm thể hiện người tiêu dùng thông thái và nhà kinh doanh nhỏ.",
      "Rèn luyện tính tự chủ trong học tập và cuộc sống.",
      "Đánh giá rèn luyện học kì I."
    ],
    flagRaisingOrientations: [
      "Tọa đàm xu hướng tiêu dùng của giới trẻ hiện nay.",
      "Giao lưu với những nhà kinh doanh trẻ ở địa phương",
      "Diễn đàn: Tự chủ trên mạng xã hội"
    ],
    themeActivityOrientations: [
      "Người tiêu dùng thông thái",
      "Nhà kinh doanh nhỏ",
      "Nhà kinh doanh nhỏ (tt).",
      "Rèn luyện tính tự chủ",
      "Rèn luyện tính tự chủ (tt).",
      "Kiểm tra định kì cuối học kì I."
    ],
    classMeetingOrientations: [
      "Chia sẻ về việc rèn luyện kĩ năng ra quyết định chi tiêu của bản thân trước tác động của tiếp thị quảng cáo.",
      "Chia sẻ kết quả rèn luyện để trở thành người tiêu dùng thông thái.",
      "Chia sẻ về việc tìm hiểu kế hoạch kinh doanh ở địa phương.",
      "Chia sẻ về việc rèn luyện tính tự chủ của bản thân trong cuộc sống và trên mạng xã hội.",
      "Chia sẻ kết quả rèn luyện tính tự chủ trong cuộc sống và trên mạng xã hội. Đánh giá chủ đề 4."
    ],
    lessons: [
      // Tuần 13
      {
        id: "cd4-tiet-37",
        periodNumber: 37,
        title: "Tiết 37 (SHDC - Tuần 13): Tọa đàm xu hướng tiêu dùng của giới trẻ hiện nay.",
        activityType: "SHDC",
        week: 13,
        periodCount: 1,
        orientation: "Tọa đàm xu hướng tiêu dùng của giới trẻ hiện nay.",
        description: "Tìm hiểu thói quen tiêu dùng, quản lí tiền bạc và phân biệt nhu cầu thiết yếu với mong muốn nhất thời."
      },
      {
        id: "cd4-tiet-38",
        periodNumber: 38,
        title: "Tiết 38 (HĐGD - Tuần 13): Người tiêu dùng thông thái",
        activityType: "HDGD",
        week: 13,
        periodCount: 1,
        orientation: "Người tiêu dùng thông thái",
        description: "Nhận diện các chiêu thức quảng cáo, thực hành lựa chọn hàng hóa an toàn, chất lượng và tiết kiệm.",
        digitalCompetency: "[1.1.TC2.b] & [1.2.TC2.a]: Tìm kiếm, đánh giá độ tin cậy của thông tin số; nhận diện rủi ro và ra quyết định phù hợp."
      },
      {
        id: "cd4-tiet-39",
        periodNumber: 39,
        title: "Tiết 39 (SHL - Tuần 13): Chia sẻ về việc rèn luyện kĩ năng ra quyết định chi tiêu của bản thân trước tác động của tiếp thị quảng cáo.",
        activityType: "SHL",
        week: 13,
        periodCount: 1,
        orientation: "Chia sẻ về việc rèn luyện kĩ năng ra quyết định chi tiêu của bản thân trước tác động của tiếp thị quảng cáo.",
        description: "Chia sẻ các trải nghiệm mua sắm thông minh và bài học tránh bị bẫy giảm giá, lừa đảo mua sắm."
      },
      // Tuần 14
      {
        id: "cd4-tiet-40",
        periodNumber: 40,
        title: "Tiết 40 (HĐGD - Tuần 14): Nhà kinh doanh nhỏ",
        activityType: "HDGD",
        week: 14,
        periodCount: 1,
        orientation: "Nhà kinh doanh nhỏ",
        description: "Tìm hiểu các bước xây dựng ý tưởng kinh doanh nhỏ, tính toán chi phí và lợi nhuận hợp lí.",
        digitalCompetency: "[1.1.TC2.b] & [1.2.TC2.a]: Tìm kiếm, đánh giá độ tin cậy của thông tin số; nhận diện rủi ro và ra quyết định phù hợp."
      },
      {
        id: "cd4-tiet-41",
        periodNumber: 41,
        title: "Tiết 41 (HĐGD - Tuần 14): Nhà kinh doanh nhỏ (tt).",
        activityType: "HDGD",
        week: 14,
        periodCount: 1,
        orientation: "Nhà kinh doanh nhỏ (tt).",
        description: "Lập dự án kinh doanh mini theo nhóm và thuyết trình ý tưởng sản phẩm sáng tạo."
      },
      {
        id: "cd4-tiet-42",
        periodNumber: 42,
        title: "Tiết 42 (SHL - Tuần 14): Chia sẻ kết quả rèn luyện để trở thành người tiêu dùng thông thái.",
        activityType: "SHL",
        week: 14,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện để trở thành người tiêu dùng thông thái.",
        description: "Trưng bày bảng so sánh giá cả, chất lượng hàng hóa và cam kết chi tiêu tiết kiệm của lớp."
      },
      // Tuần 15
      {
        id: "cd4-tiet-43",
        periodNumber: 43,
        title: "Tiết 43 (SHDC - Tuần 15): Giao lưu với những nhà kinh doanh trẻ ở địa phương",
        activityType: "SHDC",
        week: 15,
        periodCount: 1,
        orientation: "Giao lưu với những nhà kinh doanh trẻ ở địa phương",
        description: "Gặp gỡ, giao lưu và học hỏi kinh nghiệm khởi nghiệp, tinh thần vượt khó của thanh niên địa phương."
      },
      {
        id: "cd4-tiet-44",
        periodNumber: 44,
        title: "Tiết 44 (HĐGD - Tuần 15): Rèn luyện tính tự chủ",
        activityType: "HDGD",
        week: 15,
        periodCount: 1,
        orientation: "Rèn luyện tính tự chủ",
        description: "Nhận diện các biểu hiện của tính tự chủ trong suy nghĩ, hành động, quản lí cảm xúc và tự học."
      },
      {
        id: "cd4-tiet-45",
        periodNumber: 45,
        title: "Tiết 45 (SHL - Tuần 15): Chia sẻ về việc tìm hiểu kế hoạch kinh doanh ở địa phương.",
        activityType: "SHL",
        week: 15,
        periodCount: 1,
        orientation: "Chia sẻ về việc tìm hiểu kế hoạch kinh doanh ở địa phương.",
        description: "Báo cáo các mô hình kinh doanh dịch vụ, nông sản hiệu quả tại địa bàn xã U Minh."
      },
      // Tuần 16
      {
        id: "cd4-tiet-46",
        periodNumber: 46,
        title: "Tiết 46 (HĐGD - Tuần 16): Rèn luyện tính tự chủ",
        activityType: "HDGD",
        week: 16,
        periodCount: 1,
        orientation: "Rèn luyện tính tự chủ",
        description: "Thực hành phương pháp rèn luyện tính kiên định, tự kiểm soát trước các cám dỗ và áp lực ngoại cảnh."
      },
      {
        id: "cd4-tiet-47",
        periodNumber: 47,
        title: "Tiết 47 (HĐGD - Tuần 16): Rèn luyện tính tự chủ (tt).",
        activityType: "HDGD",
        week: 16,
        periodCount: 1,
        orientation: "Rèn luyện tính tự chủ (tt).",
        description: "Lập kế hoạch tự rèn luyện tính tự chủ trong các hoạt động sinh hoạt và học tập hàng ngày."
      },
      {
        id: "cd4-tiet-48",
        periodNumber: 48,
        title: "Tiết 48 (SHL - Tuần 16): Chia sẻ về việc rèn luyện tính tự chủ của bản thân trong cuộc sống và trên mạng xã hội.",
        activityType: "SHL",
        week: 16,
        periodCount: 1,
        orientation: "Chia sẻ về việc rèn luyện tính tự chủ của bản thân trong cuộc sống và trên mạng xã hội.",
        description: "Trao đổi về bí quyết làm chủ thời gian sử dụng điện thoại và ứng xử văn minh trên mạng xã hội."
      },
      // Tuần 17
      {
        id: "cd4-tiet-49",
        periodNumber: 49,
        title: "Tiết 49 (SHDC - Tuần 17): Diễn đàn: Tự chủ trên mạng xã hội",
        activityType: "SHDC",
        week: 17,
        periodCount: 1,
        orientation: "Diễn đàn: Tự chủ trên mạng xã hội",
        description: "Toàn trường thảo luận về văn hóa không gian mạng, kĩ năng chọn lọc thông tin và phòng tránh nghiện game, mạng xã hội.",
        digitalCompetency: "[4.2.TC2.a] & [2.5.TC2.a]: Bảo vệ bản thân trên môi trường số; lựa chọn, sử dụng mạng xã hội có trách nhiệm."
      },
      {
        id: "cd4-tiet-50",
        periodNumber: 50,
        title: "Tiết 50 (HĐGD - Tuần 17): Kiểm tra định kì cuối học kì I.",
        activityType: "HDGD",
        week: 17,
        periodCount: 1,
        orientation: "Kiểm tra định kì cuối học kì I.",
        description: "Thực hiện kiểm tra đánh giá định kì cuối học kì I môn Hoạt động trải nghiệm, hướng nghiệp 8."
      },
      {
        id: "cd4-tiet-51",
        periodNumber: 51,
        title: "Tiết 51 (SHL - Tuần 17): Chia sẻ kết quả rèn luyện tính tự chủ trong cuộc sống và trên mạng xã hội. Đánh giá chủ đề 4.",
        activityType: "SHL",
        week: 17,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện tính tự chủ trong cuộc sống và trên mạng xã hội. Đánh giá chủ đề 4.",
        description: "Sơ kết rèn luyện Chủ đề 4, đánh giá xếp loại thi đua học kì I và phương hướng học kì II."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 5: EM VỚI GIA ĐÌNH (9 tiết) ====================
  {
    id: 5,
    title: "Chủ đề 5: Em với gia đình",
    theme: "Em với gia đình",
    pageRange: "Trang 36 - 41",
    goals: [
      "Thực hiện được những việc làm và lời nói để người thân hài lòng.",
      "Thể hiện cách sống tiết kiệm trong sinh hoạt gia đình.",
      "Tôn trọng ý kiến khác nhau của các thành viên trong gia đình và thể hiện được khả năng thuyết phục.",
      "Biết sắp xếp công việc và hoàn thành các công việc trong gia đình."
    ],
    flagRaisingOrientations: [
      "Giao lưu về cách sống tiết kiệm trong sinh hoạt gia đình"
    ],
    themeActivityOrientations: [
      "Tôn trọng, thuyết phục và ứng xử làm người thân hài lòng",
      "Tôn trọng, thuyết phục và ứng xử làm người thân hài lòng (tt).",
      "Tiết kiệm và thực hiện công việc gia đình",
      "Tiết kiệm và thực hiện công việc gia đình (tt)"
    ],
    classMeetingOrientations: [
      "Chia sẻ kết quả rèn luyện kĩ năng thuyết phục, thể hiện sự tôn trọng và ứng xử làm người thân hài lòng.",
      "Chia sẻ kết quả rèn luyện kĩ năng sống tiết kiệm trong sinh hoạt gia đình.",
      "Chia sẻ kết quả rèn luyện kĩ năng sắp xếp và hoàn thành các công việc trong gia đình. Đánh giá chủ đề 5"
    ],
    lessons: [
      // Tuần 18
      {
        id: "cd5-tiet-52",
        periodNumber: 52,
        title: "Tiết 52 (HĐGD - Tuần 18): Tôn trọng, thuyết phục và ứng xử làm người thân hài lòng",
        activityType: "HDGD",
        week: 18,
        periodCount: 1,
        orientation: "Tôn trọng, thuyết phục và ứng xử làm người thân hài lòng",
        description: "Tìm hiểu những lời nói, cử chỉ yêu thương, cách quan tâm, chia sẻ và tạo niềm vui cho các thành viên trong gia đình."
      },
      {
        id: "cd5-tiet-53",
        periodNumber: 53,
        title: "Tiết 53 (HĐGD - Tuần 18): Tôn trọng, thuyết phục và ứng xử làm người thân hài lòng (tt).",
        activityType: "HDGD",
        week: 18,
        periodCount: 1,
        orientation: "Tôn trọng, thuyết phục và ứng xử làm người thân hài lòng (tt).",
        description: "Thực hành các bước trao đổi nguyện vọng cá nhân lễ phép, lắng nghe góc nhìn của cha mẹ và thương thuyết giải pháp hài hòa."
      },
      {
        id: "cd5-tiet-54",
        periodNumber: 54,
        title: "Tiết 54 (SHL - Tuần 18): Chia sẻ kết quả rèn luyện kĩ năng thuyết phục, thể hiện sự tôn trọng và ứng xử làm người thân hài lòng.",
        activityType: "SHL",
        week: 18,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện kĩ năng thuyết phục, thể hiện sự tôn trọng và ứng xử làm người thân hài lòng.",
        description: "Các nhóm đóng vai xử lí tình huống mâu thuẫn quan điểm với cha mẹ và rút ra bài học ứng xử thấu tình đạt lí."
      },
      // Tuần 19
      {
        id: "cd5-tiet-55",
        periodNumber: 55,
        title: "Tiết 55 (SHDC - Tuần 19): Giao lưu về cách sống tiết kiệm trong sinh hoạt gia đình",
        activityType: "SHDC",
        week: 19,
        periodCount: 1,
        orientation: "Giao lưu về cách sống tiết kiệm trong sinh hoạt gia đình",
        description: "Giao lưu chia sẻ về các biện pháp tiết kiệm điện, nước, chi tiêu sinh hoạt và giữ gìn nếp sống văn minh.",
        digitalCompetency: "[1.1.TC2.b] & [1.2.TC2.a]: Tìm kiếm, đánh giá độ tin cậy của thông tin số; nhận diện rủi ro và ra quyết định phù hợp."
      },
      {
        id: "cd5-tiet-56",
        periodNumber: 56,
        title: "Tiết 56 (HĐGD - Tuần 19): Tiết kiệm và thực hiện công việc gia đình",
        activityType: "HDGD",
        week: 19,
        periodCount: 1,
        orientation: "Tiết kiệm và thực hiện công việc gia đình",
        description: "Lập bảng phân công công việc gia đình khoa học, giúp đỡ cha mẹ nấu ăn, dọn dẹp nhà cửa.",
        digitalCompetency: "[1.1.TC2.b] & [1.2.TC2.a]: Tìm kiếm, đánh giá độ tin cậy của thông tin số; nhận diện rủi ro và ra quyết định phù hợp."
      },
      {
        id: "cd5-tiet-57",
        periodNumber: 57,
        title: "Tiết 57 (SHL - Tuần 19): Chia sẻ kết quả rèn luyện kĩ năng sống tiết kiệm trong sinh hoạt gia đình.",
        activityType: "SHL",
        week: 19,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện kĩ năng sống tiết kiệm trong sinh hoạt gia đình.",
        description: "Trình bày nhật kí tiết kiệm điện nước và kế hoạch chi tiêu hợp lí của bản thân tại gia đình.",
        digitalCompetency: "[1.1.TC2.b] & [1.2.TC2.a]: Tìm kiếm, đánh giá độ tin cậy của thông tin số; nhận diện rủi ro và ra quyết định phù hợp."
      },
      // Tuần 20
      {
        id: "cd5-tiet-58",
        periodNumber: 58,
        title: "Tiết 58 (HĐGD - Tuần 20): Tiết kiệm và thực hiện công việc gia đình (tt)",
        activityType: "HDGD",
        week: 20,
        periodCount: 1,
        orientation: "Tiết kiệm và thực hiện công việc gia đình (tt)",
        description: "Rèn luyện kĩ năng tổ chức, sắp xếp các công việc trong gia đình ngăn nắp, an toàn và tiết kiệm thời gian.",
        digitalCompetency: "[1.1.TC2.b] & [1.2.TC2.a]: Tìm kiếm, đánh giá độ tin cậy của thông tin số; nhận diện rủi ro và ra quyết định phù hợp."
      },
      {
        id: "cd5-tiet-59",
        periodNumber: 59,
        title: "Tiết 59 (HĐGD - Tuần 20): Tiết kiệm và thực hiện công việc gia đình (tt)",
        activityType: "HDGD",
        week: 20,
        periodCount: 1,
        orientation: "Tiết kiệm và thực hiện công việc gia đình (tt)",
        description: "Đánh giá các thói quen tiết kiệm tài chính, điện nước trong đời sống sinh hoạt gia đình.",
        digitalCompetency: "[1.1.TC2.b] & [1.2.TC2.a]: Tìm kiếm, đánh giá độ tin cậy của thông tin số; nhận diện rủi ro và ra quyết định phù hợp."
      },
      {
        id: "cd5-tiet-60",
        periodNumber: 60,
        title: "Tiết 60 (SHL - Tuần 20): Chia sẻ kết quả rèn luyện kĩ năng sắp xếp và hoàn thành các công việc trong gia đình. Đánh giá chủ đề 5",
        activityType: "SHL",
        week: 20,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện kĩ năng sắp xếp và hoàn thành các công việc trong gia đình. Đánh giá chủ đề 5",
        description: "Chia sẻ phiếu xác nhận làm việc nhà có chữ kí của cha mẹ và hoàn thành đánh giá tổng kết Chủ đề 5.",
        digitalCompetency: "[1.2.TC2.a] & [4.2.TC2.a]: Đánh giá thông tin, sản phẩm số; thực hiện học tập và đánh giá trong môi trường số an toàn."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 6: EM VỚI CỘNG ĐỒNG (9 tiết) ====================
  {
    id: 6,
    title: "Chủ đề 6: Em với cộng đồng",
    theme: "Em với cộng đồng",
    pageRange: "Trang 42 - 47",
    goals: [
      "Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương.",
      "Lập và thực hiện được kế hoạch hoạt động thiện nguyện.",
      "Biết tìm sự hỗ trợ từ những người xung quanh khi gặp khó khăn trong giải quyết vấn đề."
    ],
    flagRaisingOrientations: [
      "Nghe nói chuyện về các hoạt động giáo dục để phát huy truyền thống ở địa phương",
      "Tìm hiểu lễ phát động \" Hoạt động thiện nguyện\""
    ],
    themeActivityOrientations: [
      "Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương.",
      "Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương (tt)",
      "Lập và thực hiện kế hoạch hoạt động thiện nguyện (1 tiết)."
    ],
    classMeetingOrientations: [
      "Chia sẻ kết quả tham gia hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương.",
      "Báo cáo kế hoạch hoạt động thiện nguyện.",
      "Chia sẻ khó khăn và cách thức tìm kiếm sự hỗ trợ khi tham gia hoạt động thiện nguyện. Đánh giá chủ đề 6 (KTTX số 03)"
    ],
    lessons: [
      // Tuần 21
      {
        id: "cd6-tiet-61",
        periodNumber: 61,
        title: "Tiết 61 (SHDC - Tuần 21): Nghe nói chuyện về các hoạt động giáo dục để phát huy truyền thống ở địa phương",
        activityType: "SHDC",
        week: 21,
        periodCount: 1,
        orientation: "Nghe nói chuyện về các hoạt động giáo dục để phát huy truyền thống ở địa phương",
        description: "Tìm hiểu truyền thống yêu nước, phong trào đền ơn đáp nghĩa và các hoạt động cộng đồng của địa phương.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin; tương tác, chia sẻ và truyền thông bằng công cụ số phù hợp."
      },
      {
        id: "cd6-tiet-62",
        periodNumber: 62,
        title: "Tiết 62 (HĐGD - Tuần 21): Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương.",
        activityType: "HDGD",
        week: 21,
        periodCount: 1,
        orientation: "Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương.",
        description: "Lập kế hoạch tham gia chăm sóc di tích lịch sử, nghĩa trang liệt sĩ và thăm hỏi gia đình chính sách.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin; tương tác, chia sẻ và truyền thông bằng công cụ số phù hợp."
      },
      {
        id: "cd6-tiet-63",
        periodNumber: 63,
        title: "Tiết 63 (SHL - Tuần 21): Chia sẻ kết quả tham gia hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương.",
        activityType: "SHL",
        week: 21,
        periodCount: 1,
        orientation: "Chia sẻ kết quả tham gia hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương.",
        description: "Trình bày phóng sự ảnh và cảm nhận sau chuyến đi chăm sóc di tích lịch sử tại địa phương.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin; tương tác, chia sẻ và truyền thông bằng công cụ số phù hợp."
      },
      // Tuần 22
      {
        id: "cd6-tiet-64",
        periodNumber: 64,
        title: "Tiết 64 (HĐGD - Tuần 22): Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương (tt)",
        activityType: "HDGD",
        week: 22,
        periodCount: 1,
        orientation: "Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương (tt)",
        description: "Thực hiện các hoạt động bảo vệ cảnh quan nơi công cộng, giữ gìn trật tự và nếp sống văn minh.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin; tương tác, chia sẻ và truyền thông bằng công cụ số phù hợp."
      },
      {
        id: "cd6-tiet-65",
        periodNumber: 65,
        title: "Tiết 65 (HĐGD - Tuần 22): Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương (tt)",
        activityType: "HDGD",
        week: 22,
        periodCount: 1,
        orientation: "Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương (tt)",
        description: "Đánh giá hiệu quả của các công trình thanh niên, phần việc măng non đóng góp cho cộng đồng.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin; tương tác, chia sẻ và truyền thông bằng công cụ số phù hợp."
      },
      {
        id: "cd6-tiet-66",
        periodNumber: 66,
        title: "Tiết 66 (SHL - Tuần 22): Báo cáo kế hoạch hoạt động thiện nguyện.",
        activityType: "SHL",
        week: 22,
        periodCount: 1,
        orientation: "Báo cáo kế hoạch hoạt động thiện nguyện.",
        description: "Các tổ thông qua bản kế hoạch thiện nguyện quyên góp sách vở, quần áo ấm cho học sinh nghèo.",
        digitalCompetency: "[1.1.TC2.b] & [2.4.TC2.a] & [3.1.TC2.a]: Tìm kiếm thông tin; hợp tác, chia sẻ và tạo sản phẩm số phục vụ hoạt động cộng đồng."
      },
      // Tuần 23
      {
        id: "cd6-tiet-67",
        periodNumber: 67,
        title: "Tiết 67 (SHDC - Tuần 23): Tìm hiểu lễ phát động \" Hoạt động thiện nguyện\"",
        activityType: "SHDC",
        week: 23,
        periodCount: 1,
        orientation: "Tìm hiểu lễ phát động \" Hoạt động thiện nguyện\"",
        description: "Hưởng ứng chiến dịch 'Vòng tay nhân ái', 'Nuôi heo đất' giúp bạn có hoàn cảnh khó khăn.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin; tương tác, chia sẻ và truyền thông bằng công cụ số phù hợp."
      },
      {
        id: "cd6-tiet-68",
        periodNumber: 68,
        title: "Tiết 68 (HĐGD - Tuần 23): Lập và thực hiện kế hoạch hoạt động thiện nguyện (1 tiết).",
        activityType: "HDGD",
        week: 23,
        periodCount: 1,
        orientation: "Lập và thực hiện kế hoạch hoạt động thiện nguyện (1 tiết).",
        description: "Quy trình triển khai hoạt động thiện nguyện: Khảo sát đối tượng - Tiếp nhận quyên góp - Phân loại - Trao quà.",
        digitalCompetency: "[1.1.TC2.b] & [2.4.TC2.a] & [3.1.TC2.a]: Tìm kiếm thông tin; hợp tác, chia sẻ và tạo sản phẩm số phục vụ hoạt động cộng đồng."
      },
      {
        id: "cd6-tiet-69",
        periodNumber: 69,
        title: "Tiết 69 (SHL - Tuần 23): Chia sẻ khó khăn và cách thức tìm kiếm sự hỗ trợ khi tham gia hoạt động thiện nguyện. Đánh giá chủ đề 6 (KTTX số 03)",
        activityType: "SHL",
        week: 23,
        periodCount: 1,
        orientation: "Chia sẻ khó khăn và cách thức tìm kiếm sự hỗ trợ khi tham gia hoạt động thiện nguyện. Đánh giá chủ đề 6 (KTTX số 03)",
        description: "Đúc kết kinh nghiệm làm việc nhóm, kĩ năng tìm kiếm sự trợ giúp và thực hiện kiểm tra thường xuyên số 03 cho chủ đề 6."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 7: TRUYỀN THÔNG PHÒNG TRÁNH THIÊN TAI (15 tiết) ====================
  {
    id: 7,
    title: "Chủ đề 7: Truyền thông phòng tránh thiên tai",
    theme: "Truyền thông phòng tránh thiên tai",
    pageRange: "Trang 48 - 55",
    goals: [
      "Thiết kế và thực hiện được sản phẩm thể hiện vẻ đẹp của cảnh quan thiên nhiên quê hương.",
      "Tổ chức và tham gia được sự kiện giới thiệu vẻ đẹp cảnh quan và tuyên truyền bảo tồn cảnh quan.",
      "Sưu tầm được tư liệu, viết báo cáo về thực trạng thiên tai và lập kế hoạch truyền thông phòng chống, giảm nhẹ rủi ro thiên tai ở địa phương."
    ],
    flagRaisingOrientations: [
      "Triển lãm các sản phẩm đã thiết kế để thể hiện vẻ đẹp của các cảnh quan thiên nhiên của địa phương.",
      ":Chơi trò chơi:\"Rung chuông vàng\" về chủ đề thiên tai."
    ],
    themeActivityOrientations: [
      "Cảnh quan thiên nhiên quê hương tôi",
      "Cảnh quan thiên nhiên quê hương tôi (tt).",
      "Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương",
      "Kiểm tra định kì giữa học kì II.",
      ": Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương",
      "Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương (tt)."
    ],
    classMeetingOrientations: [
      "Trình bày, giới thiệu sản phẩm thể hiện vẻ đẹp danh lam thắng cảnh, cảnh quan thiên nhiên của địa phương đã thiết kế được.",
      "Báo cáo kết quả tổ chức sự kiện giới thiệu về vẻ đẹp cảnh quan thiên nhiên, danh lam thắng cảnh của địa phương và cách bảo tồn.",
      "Trình bày báo cáo về thiên tai và thiệt hại do thiên tai gây ra cho địa phương trong một số năm.",
      "Chia sẻ kế hoạch truyền thông cho người dân địa phương về những biện pháp đề phòng thiên tai và giảm nhẹ rủi ro thiên tai.",
      "Báo cáo kết quả truyền thông đã thực hiện. Đánh giá chủ đề 7"
    ],
    lessons: [
      // Tuần 24
      {
        id: "cd7-tiet-70",
        periodNumber: 70,
        title: "Tiết 70 (HĐGD - Tuần 24): Cảnh quan thiên nhiên quê hương tôi",
        activityType: "HDGD",
        week: 24,
        periodCount: 1,
        orientation: "Cảnh quan thiên nhiên quê hương tôi",
        description: "Khảo sát và tìm hiểu vẻ đẹp các danh lam thắng cảnh đặc trưng của địa phương (Vườn quốc gia U Minh Hạ, rừng ngập mặn...)."
      },
      {
        id: "cd7-tiet-71",
        periodNumber: 71,
        title: "Tiết 71 (HĐGD - Tuần 24): Cảnh quan thiên nhiên quê hương tôi",
        activityType: "HDGD",
        week: 24,
        periodCount: 1,
        orientation: "Cảnh quan thiên nhiên quê hương tôi",
        description: "Thiết kế các sản phẩm giới thiệu cảnh quan quê hương: tranh vẽ, tập san, video clip ngắn hoặc cẩm nang du lịch.",
        digitalCompetency: "[1.1.TC2.b] & [3.1.TC2.a] & [2.2.TC2.a]: Khai thác thông tin số; tạo và chia sẻ sản phẩm số giới thiệu địa phương."
      },
      {
        id: "cd7-tiet-72",
        periodNumber: 72,
        title: "Tiết 72 (SHL - Tuần 24): Trình bày, giới thiệu sản phẩm thể hiện vẻ đẹp danh lam thắng cảnh, cảnh quan thiên nhiên của địa phương đã thiết kế được.",
        activityType: "SHL",
        week: 24,
        periodCount: 1,
        orientation: "Trình bày, giới thiệu sản phẩm thể hiện vẻ đẹp danh lam thắng cảnh, cảnh quan thiên nhiên của địa phương đã thiết kế được.",
        description: "Trưng bày sản phẩm cẩm nang du lịch, bưu thiếp ảnh về cảnh quan quê hương và bình chọn tác phẩm xuất sắc."
      },
      // Tuần 25
      {
        id: "cd7-tiet-73",
        periodNumber: 73,
        title: "Tiết 73 (SHDC - Tuần 25): Triển lãm các sản phẩm đã thiết kế để thể hiện vẻ đẹp của các cảnh quan thiên nhiên của địa phương.",
        activityType: "SHDC",
        week: 25,
        periodCount: 1,
        orientation: "Triển lãm các sản phẩm đã thiết kế để thể hiện vẻ đẹp của các cảnh quan thiên nhiên của địa phương.",
        description: "Toàn trường tham quan gian triển lãm tranh ảnh, mô hình danh lam thắng cảnh quê hương do các khối lớp trưng bày."
      },
      {
        id: "cd7-tiet-74",
        periodNumber: 74,
        title: "Tiết 74 (HĐGD - Tuần 25): Cảnh quan thiên nhiên quê hương tôi (tt).",
        activityType: "HDGD",
        week: 25,
        periodCount: 1,
        orientation: "Cảnh quan thiên nhiên quê hương tôi (tt).",
        description: "Thực hiện các giải pháp tuyên truyền bảo tồn đa dạng sinh học và giữ gìn môi trường du lịch xanh.",
        digitalCompetency: "[1.1.TC2.b] & [3.1.TC2.a] & [2.2.TC2.a]: Khai thác thông tin số; tạo và chia sẻ sản phẩm số giới thiệu địa phương."
      },
      {
        id: "cd7-tiet-75",
        periodNumber: 75,
        title: "Tiết 75 (SHL - Tuần 25): Báo cáo kết quả tổ chức sự kiện giới thiệu về vẻ đẹp cảnh quan thiên nhiên, danh lam thắng cảnh của địa phương và cách bảo tồn.",
        activityType: "SHL",
        week: 25,
        periodCount: 1,
        orientation: "Báo cáo kết quả tổ chức sự kiện giới thiệu về vẻ đẹp cảnh quan thiên nhiên, danh lam thắng cảnh của địa phương và cách bảo tồn.",
        description: "Tổng kết chuỗi hoạt động quảng bá du lịch và ý thức bảo tồn thiên nhiên của học sinh trong lớp."
      },
      // Tuần 26
      {
        id: "cd7-tiet-76",
        periodNumber: 76,
        title: "Tiết 76 (HĐGD - Tuần 26): Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương",
        activityType: "HDGD",
        week: 26,
        periodCount: 1,
        orientation: "Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương",
        description: "Tìm hiểu các loại hình thiên tai thường gặp tại địa phương (ngập úng, sạt lở, lốc xoáy, hạn mặn) và nguyên nhân, hậu quả."
      },
      {
        id: "cd7-tiet-77",
        periodNumber: 77,
        title: "Tiết 77 (HĐGD - Tuần 26): Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương",
        activityType: "HDGD",
        week: 26,
        periodCount: 1,
        orientation: "Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương",
        description: "Xây dựng tài liệu truyền thông (tờ rơi, infographic, video) hướng dẫn kĩ năng phòng chống và ứng phó khi có thiên tai.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin; tương tác, chia sẻ và truyền thông bằng công cụ số phù hợp."
      },
      {
        id: "cd7-tiet-78",
        periodNumber: 78,
        title: "Tiết 78 (SHL - Tuần 26): Trình bày báo cáo về thiên tai và thiệt hại do thiên tai gây ra cho địa phương trong một số năm.",
        activityType: "SHL",
        week: 26,
        periodCount: 1,
        orientation: "Trình bày báo cáo về thiên tai và thiệt hại do thiên tai gây ra cho địa phương trong một số năm.",
        description: "Trình bày số liệu thống kê thiệt hại do thiên tai tại huyện U Minh và kiến nghị các giải pháp phòng tránh."
      },
      // Tuần 27
      {
        id: "cd7-tiet-79",
        periodNumber: 79,
        title: "Tiết 79 (SHDC - Tuần 27): :Chơi trò chơi:\"Rung chuông vàng\" về chủ đề thiên tai.",
        activityType: "SHDC",
        week: 27,
        periodCount: 1,
        orientation: ":Chơi trò chơi:\"Rung chuông vàng\" về chủ đề thiên tai.",
        description: "Hội thi Rung chuông vàng toàn trường tìm hiểu kiến thức sinh tồn, phòng chống thiên tai và biến đổi khí hậu."
      },
      {
        id: "cd7-tiet-80",
        periodNumber: 80,
        title: "Tiết 80 (HĐGD - Tuần 27): Kiểm tra định kì giữa học kì II.",
        activityType: "HDGD",
        week: 27,
        periodCount: 1,
        orientation: "Kiểm tra định kì giữa học kì II.",
        description: "Thực hiện kiểm tra đánh giá định kì giữa học kì II môn Hoạt động trải nghiệm, hướng nghiệp 8."
      },
      {
        id: "cd7-tiet-81",
        periodNumber: 81,
        title: "Tiết 81 (SHL - Tuần 27): Chia sẻ kế hoạch truyền thông cho người dân địa phương về những biện pháp đề phòng thiên tai và giảm nhẹ rủi ro thiên tai.",
        activityType: "SHL",
        week: 27,
        periodCount: 1,
        orientation: "Chia sẻ kế hoạch truyền thông cho người dân địa phương về những biện pháp đề phòng thiên tai và giảm nhẹ rủi ro thiên tai.",
        description: "Các tổ thông qua kế hoạch phát tờ rơi và tuyên truyền phòng chống đuối nước, thiên tai đến từng hộ dân xung quanh.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin; tương tác, chia sẻ và truyền thông bằng công cụ số phù hợp."
      },
      // Tuần 28
      {
        id: "cd7-tiet-82",
        periodNumber: 82,
        title: "Tiết 82 (HĐGD - Tuần 28): : Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương",
        activityType: "HDGD",
        week: 28,
        periodCount: 1,
        orientation: ": Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương",
        description: "Thực hành diễn tập kĩ năng sơ tán, cứu hộ và bảo vệ người già, trẻ nhỏ khi có mưa bão lớn."
      },
      {
        id: "cd7-tiet-83",
        periodNumber: 83,
        title: "Tiết 83 (HĐGD - Tuần 28): Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương (tt).",
        activityType: "HDGD",
        week: 28,
        periodCount: 1,
        orientation: "Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương (tt).",
        description: "Đánh giá kết quả chiến dịch truyền thông cộng đồng về phòng chống giảm nhẹ rủi ro thiên tai.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin; tương tác, chia sẻ và truyền thông bằng công cụ số phù hợp."
      },
      {
        id: "cd7-tiet-84",
        periodNumber: 84,
        title: "Tiết 84 (SHL - Tuần 28): Báo cáo kết quả truyền thông đã thực hiện. Đánh giá chủ đề 7",
        activityType: "SHL",
        week: 28,
        periodCount: 1,
        orientation: "Báo cáo kết quả truyền thông đã thực hiện. Đánh giá chủ đề 7",
        description: "Tổng kết, đánh giá mức độ hoàn thành nhiệm vụ truyền thông và đánh giá kết quả học tập Chủ đề 7."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 8: KHÁM PHÁ THẾ GIỚI NGHỀ NGHIỆP (6 tiết) ====================
  {
    id: 8,
    title: "Chủ đề 8: Khám phá thế giới nghề nghiệp",
    theme: "Khám phá thế giới nghề nghiệp",
    pageRange: "Trang 56 - 61",
    goals: [
      "Lập được danh mục những nghề phổ biến trong xã hội hiện đại.",
      "Nêu được việc làm đặc trưng, trang thiết bị, dụng cụ lao động cơ bản của những nghề phổ biến trong xã hội hiện đại.",
      "Nêu được những thách thức đối với người lao động trong xã hội hiện đại."
    ],
    flagRaisingOrientations: [
      "Nghe nói chuyện về nghề nghiệp trong xã hội hiện đại. ."
    ],
    themeActivityOrientations: [
      "Nghề phổ biến trong xã hội hiện đại",
      "Nghề phổ biến trong xã hội hiện đại (tt)."
    ],
    classMeetingOrientations: [
      "Chia sẻ danh mục nghề phổ biến trong xã hội hiện đại.",
      "Chia sẻ kết quả trải nghiệm một nghề phổ biến trong xã hội hiện đại. Đánh giá chủ đề 8 (KTTX số 04)"
    ],
    lessons: [
      // Tuần 29
      {
        id: "cd8-tiet-85",
        periodNumber: 85,
        title: "Tiết 85 (SHDC - Tuần 29): Nghe nói chuyện về nghề nghiệp trong xã hội hiện đại. .",
        activityType: "SHDC",
        week: 29,
        periodCount: 1,
        orientation: "Nghe nói chuyện về nghề nghiệp trong xã hội hiện đại. .",
        description: "Khám phá bức tranh tổng quan về sự đa dạng ngành nghề trong xã hội hiện đại và xu hướng phát triển nghề nghiệp."
      },
      {
        id: "cd8-tiet-86",
        periodNumber: 86,
        title: "Tiết 86 (HĐGD - Tuần 29): Nghề phổ biến trong xã hội hiện đại",
        activityType: "HDGD",
        week: 29,
        periodCount: 1,
        orientation: "Nghề phổ biến trong xã hội hiện đại",
        description: "Lập danh mục các nhóm nghề phổ biến (nông nghiệp công nghệ cao, y tế, giáo dục, công nghệ thông tin, kĩ thuật...)."
      },
      {
        id: "cd8-tiet-87",
        periodNumber: 87,
        title: "Tiết 87 (SHL - Tuần 29): Chia sẻ danh mục nghề phổ biến trong xã hội hiện đại.",
        activityType: "SHL",
        week: 29,
        periodCount: 1,
        orientation: "Chia sẻ danh mục nghề phổ biến trong xã hội hiện đại.",
        description: "Trưng bày sơ đồ phân loại các nhóm nghề và giới thiệu các nghề truyền thống tiêu biểu của địa phương."
      },
      // Tuần 30
      {
        id: "cd8-tiet-88",
        periodNumber: 88,
        title: "Tiết 88 (HĐGD - Tuần 30): Nghề phổ biến trong xã hội hiện đại (tt).",
        activityType: "HDGD",
        week: 30,
        periodCount: 1,
        orientation: "Nghề phổ biến trong xã hội hiện đại (tt).",
        description: "Tìm hiểu trang thiết bị, dụng cụ lao động đặc trưng và các yêu cầu về phẩm chất, năng lực của từng nghề.",
        digitalCompetency: "[1.1.TC2.b] & [5.2.TC2.b]: Tìm kiếm, đánh giá thông tin nghề nghiệp; sử dụng công cụ số hỗ trợ định hướng và ra quyết định."
      },
      {
        id: "cd8-tiet-89",
        periodNumber: 89,
        title: "Tiết 89 (HĐGD - Tuần 30): Nghề phổ biến trong xã hội hiện đại (tt).",
        activityType: "HDGD",
        week: 30,
        periodCount: 1,
        orientation: "Nghề phổ biến trong xã hội hiện đại (tt).",
        description: "Phân tích những khó khăn, thách thức và nguy cơ tai nạn lao động trong các ngành nghề hiện đại."
      },
      {
        id: "cd8-tiet-90",
        periodNumber: 90,
        title: "Tiết 90 (SHL - Tuần 30): Chia sẻ kết quả trải nghiệm một nghề phổ biến trong xã hội hiện đại. Đánh giá chủ đề 8 (KTTX số 04)",
        activityType: "SHL",
        week: 30,
        periodCount: 1,
        orientation: "Chia sẻ kết quả trải nghiệm một nghề phổ biến trong xã hội hiện đại. Đánh giá chủ đề 8 (KTTX số 04)",
        description: "Thuyết trình bài học sau chuyến tham quan thực tế cơ sở nghề và hoàn thành kiểm tra thường xuyên số 04 cho chủ đề 8."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 9: HIỂU BẢN THÂN – CHỌN ĐÚNG NGHỀ. (15 tiết) ====================
  {
    id: 9,
    title: "Chủ đề 9: Hiểu bản thân – chọn đúng nghề.",
    theme: "Hiểu bản thân – chọn đúng nghề",
    pageRange: "Trang 62 - 70",
    goals: [
      "Xây dựng và thực hiện được kế hoạch khảo sát hứng thú nghề nghiệp của học sinh.",
      "Rèn luyện được phẩm chất và năng lực phù hợp với định hướng nghề nghiệp.",
      "Lập kế hoạch học tập định hướng nghề nghiệp và tổng kết năm học."
    ],
    flagRaisingOrientations: [
      "Nghe nói chuyện chuyên đề: Học tập với hứng thú nghề nghiệp.",
      "Ngày hội tư vấn hướng nghiệp",
      "Tổng kết năm học."
    ],
    themeActivityOrientations: [
      "Hứng thú nghề nghiệp",
      "Rèn luyện, học tập theo định hướng nghề nghiệp",
      "Rèn luyện, học tập theo định hướng nghề nghiệp (tt).",
      "Kiểm tra định kì cuối năm học."
    ],
    classMeetingOrientations: [
      "Chia sẻ kết quả khảo sát hứng thú nghề nghiệp của bản thân.",
      "Chuẩn bị bài thuyết trình để tham gia diễn đàn “ Nghề nào cũng đáng được tôn trọng” ở lớp",
      "Chia sẻ kết quả rèn luyện tính kiên trì, sự chăm chỉ trong công việc.",
      "Chia sẻ kết quả rèn luyện, học tập theo định hướng nghề nghiệp.",
      "Tổng kết năm học tại lớp. Đánh giá chủ đề 9 Đánh giá cuối học kì II"
    ],
    lessons: [
      // Tuần 31
      {
        id: "cd9-tiet-91",
        periodNumber: 91,
        title: "Tiết 91 (SHDC - Tuần 31): Nghe nói chuyện chuyên đề: Học tập với hứng thú nghề nghiệp.",
        activityType: "SHDC",
        week: 31,
        periodCount: 1,
        orientation: "Nghe nói chuyện chuyên đề: Học tập với hứng thú nghề nghiệp.",
        description: "Lắng nghe chuyên gia tư vấn về vai trò của đam mê, sở thích và năng khiếu trong việc lựa chọn con đường nghề nghiệp."
      },
      {
        id: "cd9-tiet-92",
        periodNumber: 92,
        title: "Tiết 92 (HĐGD - Tuần 31): Hứng thú nghề nghiệp",
        activityType: "HDGD",
        week: 31,
        periodCount: 1,
        orientation: "Hứng thú nghề nghiệp",
        description: "Khảo sát và xác định hứng thú nghề nghiệp của bản thân theo các nhóm ngành nghề thực tế."
      },
      {
        id: "cd9-tiet-93",
        periodNumber: 93,
        title: "Tiết 93 (SHL - Tuần 31): Chia sẻ kết quả khảo sát hứng thú nghề nghiệp của bản thân.",
        activityType: "SHL",
        week: 31,
        periodCount: 1,
        orientation: "Chia sẻ kết quả khảo sát hứng thú nghề nghiệp của bản thân.",
        description: "Học sinh chia sẻ về nghề nghiệp mơ ước và các tố chất bản thân cần tiếp tục bồi dưỡng."
      },
      // Tuần 32
      {
        id: "cd9-tiet-94",
        periodNumber: 94,
        title: "Tiết 94 (HĐGD - Tuần 32): Rèn luyện, học tập theo định hướng nghề nghiệp",
        activityType: "HDGD",
        week: 32,
        periodCount: 1,
        orientation: "Rèn luyện, học tập theo định hướng nghề nghiệp",
        description: "Xác định các phẩm chất và năng lực cốt lõi cần rèn luyện để đáp ứng yêu cầu của nghề định chọn."
      },
      {
        id: "cd9-tiet-95",
        periodNumber: 95,
        title: "Tiết 95 (HĐGD - Tuần 32): Rèn luyện, học tập theo định hướng nghề nghiệp",
        activityType: "HDGD",
        week: 32,
        periodCount: 1,
        orientation: "Rèn luyện, học tập theo định hướng nghề nghiệp",
        description: "Xây dựng kế hoạch học tập các môn văn hóa và rèn luyện kĩ năng mềm gắn với nghề tương lai.",
        digitalCompetency: "[1.1.TC2.b] & [5.2.TC2.b]: Tìm kiếm, đánh giá thông tin nghề nghiệp; sử dụng công cụ số hỗ trợ định hướng và ra quyết định."
      },
      {
        id: "cd9-tiet-96",
        periodNumber: 96,
        title: "Tiết 96 (SHL - Tuần 32): Chuẩn bị bài thuyết trình để tham gia diễn đàn “ Nghề nào cũng đáng được tôn trọng” ở lớp",
        activityType: "SHL",
        week: 32,
        periodCount: 1,
        orientation: "Chuẩn bị bài thuyết trình để tham gia diễn đàn “ Nghề nào cũng đáng được tôn trọng” ở lớp",
        description: "Các tổ chuẩn bị bài thuyết trình tôn vinh giá trị của người lao động trong mọi ngành nghề xã hội."
      },
      // Tuần 33
      {
        id: "cd9-tiet-97",
        periodNumber: 97,
        title: "Tiết 97 (SHDC - Tuần 33): Ngày hội tư vấn hướng nghiệp",
        activityType: "SHDC",
        week: 33,
        periodCount: 1,
        orientation: "Ngày hội tư vấn hướng nghiệp",
        description: "Tham gia ngày hội tuyển sinh, tư vấn phân luồng sau THCS và định hướng chọn tổ hợp môn học THPT."
      },
      {
        id: "cd9-tiet-98",
        periodNumber: 98,
        title: "Tiết 98 (HĐGD - Tuần 33): Rèn luyện, học tập theo định hướng nghề nghiệp (tt).",
        activityType: "HDGD",
        week: 33,
        periodCount: 1,
        orientation: "Rèn luyện, học tập theo định hướng nghề nghiệp (tt).",
        description: "Rèn luyện tính kiên trì, sự chăm chỉ và tác phong công nghiệp trong lao động học tập."
      },
      {
        id: "cd9-tiet-99",
        periodNumber: 99,
        title: "Tiết 99 (SHL - Tuần 33): Chia sẻ kết quả rèn luyện tính kiên trì, sự chăm chỉ trong công việc.",
        activityType: "SHL",
        week: 33,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện tính kiên trì, sự chăm chỉ trong công việc.",
        description: "Báo cáo bảng theo dõi thói quen kiên trì và tự giác vượt khó trong học kì qua.",
        digitalCompetency: "[1.1.TC2.b] & [2.2.TC2.a]: Tìm kiếm thông tin, tương tác và chia sẻ kết quả học tập bằng công cụ số phù hợp."
      },
      // Tuần 34
      {
        id: "cd9-tiet-100",
        periodNumber: 100,
        title: "Tiết 100 (HĐGD - Tuần 34): Rèn luyện, học tập theo định hướng nghề nghiệp",
        activityType: "HDGD",
        week: 34,
        periodCount: 1,
        orientation: "Rèn luyện, học tập theo định hướng nghề nghiệp",
        description: "Hoàn thiện kế hoạch học tập hướng nghiệp và xác định mục tiêu học tập lớp 9 chuẩn bị thi vào lớp 10."
      },
      {
        id: "cd9-tiet-101",
        periodNumber: 101,
        title: "Tiết 101 (HĐGD - Tuần 34): Kiểm tra định kì cuối năm học.",
        activityType: "HDGD",
        week: 34,
        periodCount: 1,
        orientation: "Kiểm tra định kì cuối năm học.",
        description: "Thực hiện kiểm tra đánh giá định kì cuối năm học môn Hoạt động trải nghiệm, hướng nghiệp 8.",
        digitalCompetency: "[1.2.TC2.a] & [4.2.TC2.a]: Đánh giá thông tin, sản phẩm số; thực hiện học tập và đánh giá trong môi trường số an toàn."
      },
      {
        id: "cd9-tiet-102",
        periodNumber: 102,
        title: "Tiết 102 (SHL - Tuần 34): Chia sẻ kết quả rèn luyện, học tập theo định hướng nghề nghiệp.",
        activityType: "SHL",
        week: 34,
        periodCount: 1,
        orientation: "Chia sẻ kết quả rèn luyện, học tập theo định hướng nghề nghiệp.",
        description: "Chia sẻ Bản đồ mục tiêu học tập cá nhân và dự kiến chọn trường THPT phù hợp."
      },
      // Tuần 35
      {
        id: "cd9-tiet-103",
        periodNumber: 103,
        title: "Tiết 103 (HĐGD - Tuần 35): Rèn luyện, học tập theo định hướng nghề nghiệp (tt).",
        activityType: "HDGD",
        week: 35,
        periodCount: 1,
        orientation: "Rèn luyện, học tập theo định hướng nghề nghiệp (tt).",
        description: "Tổng kết các bài học rèn luyện định hướng nghề nghiệp trong cả năm học."
      },
      {
        id: "cd9-tiet-104",
        periodNumber: 104,
        title: "Tiết 104 (SHDC - Tuần 35): Tổng kết năm học.",
        activityType: "SHDC",
        week: 35,
        periodCount: 1,
        orientation: "Tổng kết năm học.",
        description: "Lễ tổng kết năm học 2026 - 2027 toàn trường, vinh danh các cá nhân và chi đội xuất sắc.",
        digitalCompetency: "[2.2.TC2.a] & [3.1.TC2.a]: Sử dụng công cụ số phù hợp để tương tác, chia sẻ thông tin và kết quả hoạt động."
      },
      {
        id: "cd9-tiet-105",
        periodNumber: 105,
        title: "Tiết 105 (SHL - Tuần 35): Tổng kết năm học tại lớp. Đánh giá chủ đề 9 Đánh giá cuối học kì II",
        activityType: "SHL",
        week: 35,
        periodCount: 1,
        orientation: "Tổng kết năm học tại lớp. Đánh giá chủ đề 9 Đánh giá cuối học kì II",
        description: "Tổng kết hoạt động lớp cả năm, đánh giá cuối học kì II, chia tay năm học lớp 8 và phổ biến kế hoạch hè an toàn."
      }
    ]
  }
];
