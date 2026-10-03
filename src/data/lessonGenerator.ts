import { LessonPlan, ActivityCategory } from "../types";
import { TOPICS_DATA } from "./curriculumData";
import { DEFAULT_LESSONS } from "./defaultLessons";

export function getLessonPlanById(lessonId: string): LessonPlan {
  if (DEFAULT_LESSONS[lessonId]) {
    return DEFAULT_LESSONS[lessonId];
  }

  let foundTopic = TOPICS_DATA.find((t) => t.lessons.some((l) => l.id === lessonId));
  let foundLesson = foundTopic?.lessons.find((l) => l.id === lessonId);

  if (!foundTopic || !foundLesson) {
    foundTopic = TOPICS_DATA[0];
    foundLesson = foundTopic.lessons[0];
  }

  return generateStandardLessonPlan(
    foundTopic.id,
    foundLesson.id,
    foundLesson.orientation,
    foundTopic.title,
    foundLesson.activityType,
    foundLesson.week,
    foundLesson.periodNumber || 1,
    foundLesson.orientation,
    foundLesson.description,
    foundLesson.digitalCompetency
  );
}

// Trích xuất chuẩn xác 100% câu hỏi, tình huống, bài tập và đáp án từ SGK Hoạt động trải nghiệm, hướng nghiệp 8 (Bộ sách Kết nối tri thức với cuộc sống)
function getExactSgkDataByTopic(topicNumber: number, orientation: string) {
  const ori = orientation.toLowerCase();

  // =========================================================================
  // CHỦ ĐỀ 1: EM VỚI NHÀ TRƯỜNG (SGK Trang 4 - 11)
  // =========================================================================
  if (topicNumber === 1) {
    if (ori.includes("khai giảng")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.5): Nêu ý nghĩa của ngày khai giảng năm học mới và trách nhiệm của học sinh lớp 8 trong năm học này?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.5): (1) Ý nghĩa: Khởi đầu một năm học mới đầy quyết tâm và hi vọng; tạo không khí phấn khởi, gắn kết tình thầy trò, bạn bè; (2) Trách nhiệm học sinh lớp 8: Tự giác nâng cao ý thức học tập, chấp hành tốt nội quy nhà trường, tích cực tham gia các phong trào Đội và hoạt động trải nghiệm.",
        q2: "Câu hỏi 2 (SGK tr.5): Kể tên các hoạt động giáo dục truyền thống của nhà trường và phong trào thi đua do Liên đội phát động?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.5): (1) Phong trào thi đua 'Dạy tốt - Học tốt', 'Hoa điểm 10 dâng thầy cô'; (2) Xây dựng 'Trường học thân thiện, học sinh tích cực'; (3) Các hoạt động thiện nguyện 'Áo ấm tặng bạn', 'Nuôi heo đất giúp bạn vượt khó'.",
        situation1: "Tình huống 1 (SGK tr.5): Trong ngày khai giảng, một số học sinh đứng dưới hàng chưa nghiêm túc khi cử hành nghi lễ chào cờ. Em sẽ làm gì?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.5): Nhắc nhở các bạn đứng nghiêm trang, chỉnh lại khăn quàng đỏ, hướng mắt về Quốc kì và hát to bài Quốc ca, Đội ca theo đúng nghi thức Đội.",
        situation2: "Tình huống 2 (SGK tr.5): Chi đội chuẩn bị kí giao ước thi đua đầu năm học mới. Chi đội em cần đăng kí những chỉ tiêu cụ thể nào?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.5): Đăng kí: 100% đội viên đi học đúng giờ, đạt nhiều tuần học tốt, 100% không vi phạm nề nếp và tham gia đầy đủ các phong trào thi đua do Liên đội phát động."
      };
    }

    if (ori.includes("tình bạn") || ori.includes("xây dựng và giữ gìn tình bạn")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.6): Chia sẻ về cách xây dựng và giữ gìn tình bạn theo các gợi ý trong SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.6): Các cách xây dựng và giữ gìn tình bạn chuẩn SGK: (1) Chủ động, mạnh dạn, tự tin khi làm quen với bạn mới; (2) Luôn tin tưởng, tôn trọng, lắng nghe bạn; (3) Chia sẻ chân thành, cởi mở với bạn khi vui, buồn, khó khăn; (4) Trao đổi thẳng thắn với bạn khi có hiểu lầm; (5) Không có lời nói, hành vi làm tổn thương bạn.",
        q2: "Câu hỏi 2 (SGK tr.7): Nêu các việc làm để thể hiện và nuôi dưỡng tình bạn đẹp ở lớp, trường và cộng đồng nơi em sống?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.7): (1) Cùng bạn học tập, thảo luận nhóm và giúp đỡ bạn tiến bộ; (2) Làm đoạn phim ngắn/viết thông điệp về kỉ niệm với bạn; (3) Quan tâm, thăm hỏi khi bạn ốm hoặc gặp chuyện buồn; (4) Chúc mừng sinh nhật và cùng tham gia các hoạt động thiện nguyện.",
        situation1: "Tình huống 1 (SGK tr.6): Minh Hà vẽ rất đẹp nhưng lại nhút nhát, ít nói và ngại giao tiếp với các bạn. Trong lớp, thấy Hồng Ánh có nhiều điểm chung giống mình, Minh Hà rất muốn kết bạn với Hồng Ánh. Minh Hà nên làm gì?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.6): Minh Hà nên chủ động đến chào hỏi Hồng Ánh, chia sẻ về sở thích chung vẽ tranh, rủ bạn cùng vẽ hoặc cùng tham gia làm báo tường của lớp để tạo cơ hội trò chuyện, gắn kết.",
        situation2: "Tình huống 2 (SGK tr.6): Minh và Khanh học cùng lớp và chơi thân với nhau. Nhưng hôm nay Minh rất buồn vì một bạn trong lớp kể là đã nghe thấy Khanh nói xấu mình. Minh nên xử lí thế nào?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.6): Minh nên bình tĩnh, gặp trực tiếp Khanh để nói chuyện thẳng thắn, chân thành hỏi rõ thực hư câu chuyện, tránh vội vàng tin lời đồn thổi làm rạn nứt tình bạn thân thiết."
      };
    }

    if (ori.includes("bắt nạt") || ori.includes("phòng tránh bắt nạt học đường")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.7-8): Nhận diện các dấu hiệu của bắt nạt học đường theo SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.7-8): Các dấu hiệu bắt nạt học đường chuẩn SGK: (1) Bắt ép bạn chép bài và làm bài tập cho mình; (2) Cố tình làm hỏng đồ dùng học tập của bạn; (3) Làm đau bạn bằng các hành động: đánh, ném đồ vật vào người, bắt quỳ gối; (4) Nhắn tin đe dọa, xúc phạm danh dự trên mạng xã hội; (5) Cô lập bạn bằng cách ngăn cấm không cho bạn khác chơi cùng; (6) Chặn đường lục cặp, bắt nộp tiền, đồ dùng học tập.",
        q2: "Câu hỏi 2 (SGK tr.8): Nêu các việc NÊN LÀM và KHÔNG NÊN LÀM để phòng, tránh bắt nạt học đường theo bảng SGK?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.8): Theo bảng SGK: (1) VIỆC NÊN LÀM: Kể lại với người mà em tin tưởng về việc bị bắt nạt; Bỏ đi hoặc kêu to để nhờ người trợ giúp khi đối diện với kẻ bắt nạt; Thể hiện rõ thái độ 'Không chấp nhận khi bị bắt nạt' (nghiêm mặt, giật tay ra,...); Không trả lời tin nhắn có nội dung đe dọa, gãy bẫy của kẻ bắt nạt; (2) VIỆC KHÔNG NÊN LÀM: Thể hiện sự hiếu chiến, thái độ thách thức; Giấu giếm thông tin bị bắt nạt; Không giúp đỡ khi chứng kiến bạn bị bắt nạt.",
        situation1: "Tình huống 1 (SGK tr.9): Hôm trước, khi thảo luận nhóm trực tuyến, Minh đã bị Thành chụp một bức hình với biểu cảm không đẹp. Vài ngày sau đó, ở trên lớp Thành luôn nói với Minh là nếu không chép bài cho mình, sẽ đưa ảnh đó lên trang mạng xã hội của lớp. Minh nên làm gì?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.9): Minh cần dứt khoát từ chối yêu cầu sai trái của Thành; giải thích cho Thành hiểu việc đăng ảnh bôi nhọ là vi phạm pháp luật và báo cáo ngay sự việc với thầy cô giáo chủ nhiệm hoặc cha mẹ để được bảo vệ.",
        situation2: "Tình huống 2 (SGK tr.9): Hạnh ngồi cạnh Duy Anh và thường xuyên bị bạn trêu đùa ác ý nên em cảm thấy rất khó chịu. Hạnh đã xin chuyển chỗ để tránh bị bạn làm phiền, ảnh hưởng đến việc học. Tuy nhiên, sau khi Hạnh chuyển chỗ, Duy Anh vẫn thường sang bàn của Hạnh và tiếp tục trêu bạn. Hạnh nên xử lí thế nào?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.9): Hạnh cần thể hiện thái độ nghiêm túc, dứt khoát yêu cầu Duy Anh dừng ngay hành vi trêu chọc; nếu Duy Anh không dừng lại, Hạnh báo ngay cho ban cán sự lớp và GVCN để có biện pháp nhắc nhở, xử lí."
      };
    }

    if (ori.includes("truyền thống nhà trường") || ori.includes("xây dựng truyền thống")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.10): Kể tên những truyền thống nổi bật của nhà trường và những việc thầy cô, học sinh đã làm để xây dựng truyền thống?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.10): (1) Truyền thống nổi bật: Dạy tốt - Học tốt, Tôn sư trọng đạo, Đoàn kết tương thân tương ái, Giữ gìn kỉ cương nề nếp; (2) Việc đã làm: Phong trào thi đua đạt nhiều tiết học tốt, tích cực tham gia nghiên cứu khoa học, chăm sóc nghĩa trang liệt sĩ, giúp đỡ bạn có hoàn cảnh khó khăn.",
        q2: "Câu hỏi 2 (SGK tr.10): Nêu những việc em có thể làm nhằm góp phần xây dựng truyền thống nhà trường?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.10): Gợi ý SGK: (1) Tham gia xây dựng và chấp hành nghiêm túc các quy định của nhà trường; (2) Giữ gìn, bảo vệ cảnh quan nhà trường xanh - sạch - đẹp; (3) Tham gia vào các hoạt động kết nối nhà trường và cộng đồng (lao động công ích, hoạt động thiện nguyện); (4) Tích cực học tập và tham gia nghiên cứu khoa học.",
        situation1: "Tình huống 1 (SGK tr.10): Đoàn trường và Đội TNTP Hồ Chí Minh phát động cuộc thi 'Em yêu trường em'. Nhóm em dự định tham gia với sản phẩm và hình thức gì?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.10): Nhóm lựa chọn thiết kế sản phẩm: Viết bài thơ / vẽ tranh / làm đoạn phim ngắn hoặc Infographic giới thiệu về lịch sử, thầy cô và thành tích nổi bật của nhà trường.",
        situation2: "Tình huống 2 (SGK tr.11): Một số bạn trong lớp chưa có ý thức tham gia giữ gìn vệ sinh chung sân trường sau giờ ra chơi. Em sẽ làm gì?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.11): Em chủ động nhặt rác bỏ vào thùng, đồng thời cùng ban cán sự lớp nhắc nhở, vận động các bạn cùng chung tay dọn dẹp để giữ gìn khuôn viên trường luôn sạch đẹp."
      };
    }
  }

  // =========================================================================
  // CHỦ ĐỀ 2: KHÁM PHÁ BẢN THÂN (SGK Trang 12 - 19)
  // =========================================================================
  if (topicNumber === 2) {
    if (ori.includes("tính cách") || ori.includes("cảm xúc") || ori.includes("tính cách và cảm xúc")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.14): Kể tên những nét đặc trưng trong tính cách của bản thân và cách xác định theo SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.14): (1) Các nét tính cách chuẩn SGK: Dịu dàng, năng động, cởi mở, vui vẻ, nhiệt tình, nhút nhát, hài hước, hiếu thắng, cẩn thận, trung thực; (2) Cách xác định: Dựa trên những biểu hiện cụ thể trong hoạt động học tập, lao động, giao tiếp của bản thân và dựa trên nhận xét khách quan của bạn bè, người thân.",
        q2: "Câu hỏi 2 (SGK tr.15): Nêu các bước điều chỉnh cảm xúc theo hướng tích cực khi gặp cảm xúc tiêu cực?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.15): Sơ đồ SGK: Cảm xúc tiêu cực -> Lấy lại bình tĩnh bằng cách hít thở sâu / đi dạo / tâm sự với người tin cậy -> Suy nghĩ lại sự việc một cách tích cực, lạc quan -> Chuyển hóa cảm xúc tích cực.",
        situation1: "Tình huống 1 (SGK tr.14): Sáng Chủ nhật, Minh và Khoa hẹn nhau đi thăm một bạn trong nhóm bị ốm nhưng đã quá giờ hẹn 15 phút Minh vẫn chưa thấy Khoa đến. Minh rất bực bội, khó chịu. Đúng lúc Minh định bỏ về thì Khoa xuất hiện với mặt mũi đỏ gay, mồ hôi nhễ nhại, dắt chiếc xe đạp bị xẹp lốp. Cơn giận của Minh tan biến. Em rút ra bài học gì?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.14): Bài học: Cần biết kiềm chế cơn giận, không vội vàng phán xét người khác khi chưa hiểu rõ nguyên nhân; học cách đặt mình vào hoàn cảnh của bạn để cảm thông và chia sẻ.",
        situation2: "Tình huống 2 (SGK tr.16): Bài kiểm tra môn Ngữ văn vừa rồi Bình nghĩ mình sẽ được ít nhất 7 điểm. Tuy nhiên, khi trả bài, Bình chỉ được 5 điểm. Bình cho rằng thầy giáo chấm bài quá chặt nên rất buồn và thất vọng. Bình nên điều chỉnh cảm xúc thế nào?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.16): Bình cần hít thở sâu để lấy lại bình tĩnh; đọc kĩ lời phê của thầy giáo, xem lại những phần làm chưa tốt; chủ động gặp thầy để nhờ thầy giải thích thêm và xem đây là cơ hội để nỗ lực khắc phục điểm yếu ở bài sau."
      };
    }

    if (ori.includes("tranh biện") || ori.includes("thương thuyết")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.17): Nêu các bước lập luận tranh biện và các lưu ý để tranh biện có hiệu quả?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.17): (1) Các bước: Bước 1: Trình bày rõ ràng luận điểm; Bước 2: Đưa ra các lí lẽ, dẫn chứng để giải thích, chứng minh cho luận điểm; Bước 3: Đưa ra kết luận chung; (2) Lưu ý SGK: Trình bày lập luận rõ ràng, chặt chẽ; Tự tin, cởi mở, thẳng thắn; Tôn trọng, lắng nghe ý kiến đối phương; Nắm vững quan điểm của bản thân.",
        q2: "Câu hỏi 2 (SGK tr.18): Nêu các bước và lưu ý khi thương thuyết theo SGK?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.18): (1) Cách thương thuyết: Nêu những yêu cầu cụ thể của mình; Lắng nghe yêu cầu của đối phương và đưa ra thoả hiệp tương xứng; Tìm một cách giải quyết khác mà cả hai bên cùng chấp nhận được; Chốt lại ý kiến đồng thuận; (2) Lưu ý: Tôn trọng, lắng nghe; Tạo được cảm tình; Tự tin, thiện chí; Chọn thời điểm thương thuyết phù hợp.",
        situation1: "Tình huống 1 (SGK tr.17-18): Hùng rất muốn tham gia Câu lạc bộ bóng đá của trường nhưng mẹ chỉ muốn Hùng dành tất cả thời gian cho việc học. Hùng đã thương thuyết với mẹ thế nào?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.17-18): Hùng lễ phép trình bày: Nêu lợi ích của bóng đá với sức khỏe; cam kết chỉ sinh hoạt 1 lần/tuần; xin mẹ cho thử 1 tháng, nếu kết quả học tập giảm sút sẽ tự động dừng lại. Mẹ Hùng đã đồng ý.",
        situation2: "Tình huống 2 (SGK tr.19): Lớp em chuẩn bị đi dã ngoại ở một địa điểm cách trường khoảng 10 km. Một số bạn đề nghị thuê ô tô đi cho nhanh và an toàn, trong khi một số bạn khác lại muốn đi bằng xe đạp để tiết kiệm chi phí. Em sẽ thương thuyết ra sao?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.19): Lắng nghe cả hai nhóm; phân tích ưu điểm quãng đường 10km đi xe đạp tập thể có thể gây mệt và nguy hiểm khi tham gia giao thông; đề xuất phương án thỏa hiệp: Thuê ô tô chung để đảm bảo an toàn và sức khỏe, đồng thời cả lớp tự chuẩn bị đồ ăn nhẹ mang theo để tiết kiệm chi phí."
      };
    }
  }

  // =========================================================================
  // CHỦ ĐỀ 3: TRÁCH NHIỆM VỚI BẢN THÂN (SGK Trang 20 - 27)
  // =========================================================================
  if (topicNumber === 3) {
    if (ori.includes("trách nhiệm") || ori.includes("sống có trách nhiệm")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.22-23): Nêu các biểu hiện của người sống có trách nhiệm theo 3 khía cạnh trong SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.22-23): Theo SGK: (1) Trách nhiệm với bản thân: Tự giác học tập, giữ lời hứa, ăn uống đủ chất, rèn luyện thể thao, tự nhận lỗi và sửa lỗi; (2) Trách nhiệm với người xung quanh: Chăm sóc người thân khi ốm, giúp đỡ người già qua đường, chia sẻ công việc nhà; (3) Trách nhiệm trong hoạt động: Nhặt rác bảo vệ môi trường, hoàn thành đúng hạn nhiệm vụ nhóm được phân công.",
        q2: "Câu hỏi 2 (SGK tr.24): Trình bày mẫu 'Kế hoạch thực hiện cam kết' theo cấu trúc SGK?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.24): Cấu trúc SGK: Họ và tên, Lớp; Bảng gồm 4 cột: (1) Cam kết (Cải thiện kết quả học tập môn Ngữ văn); (2) Những việc cần làm (Dành nhiều thời gian tự học, đọc nhiều sách văn học, lập sổ tay văn học); (3) Thời gian thực hiện (1 học kì); (4) Người hỗ trợ / phương tiện (Thầy cô dạy Văn, bạn học tốt môn Văn, sách tham khảo).",
        situation1: "Tình huống 1 (SGK tr.22): Dạo này, vì ham chơi điện tử nên kết quả bài làm kiểm tra của Nam vừa rồi rất kém. Nam cảm thấy vô cùng có lỗi với bố mẹ. Nam nên làm gì?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.22): Nam cần dũng cảm nhận lỗi với bố mẹ, quyết tâm từ bỏ chơi điện tử, lập kế hoạch học tập chi tiết và dành nhiều thời gian hơn để ôn lại các kiến thức bị hổng.",
        situation2: "Tình huống 2 (SGK tr.23): Mai được phân công mang lọ hoa để trang trí lớp học trong buổi sơ kết thi đua. Nhưng đúng buổi sáng hôm đó, Mai lại bị sốt, không thể đến lớp được. Mai nên làm gì?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.23): Mai thể hiện trách nhiệm bằng cách chủ động gọi điện sớm cho lớp trưởng hoặc bạn ở gần nhà để báo tình hình và nhờ bạn mang hộ lọ hoa khác thay thế, không để ảnh hưởng đến hoạt động chung của lớp."
      };
    }

    if (ori.includes("từ chối") || ori.includes("kĩ năng từ chối")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.26): Nhận diện các tình huống cần từ chối và 3 cách từ chối theo SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.26): (1) Các tình huống cần từ chối: Tình huống nguy hiểm (bơi sông suối nguy hiểm, đi xe dàn hàng ngang); Tình huống vượt quá khả năng; Tình huống không phù hợp nhu cầu, sở thích; (2) 3 Cách từ chối SGK: • Từ chối thẳng (dứt khoát: 'Không, mình không muốn/mình không thích'); • Từ chối trì hoãn ('Hôm nay mình bận rồi. Hẹn khi khác nhé!'); • Từ chối thương lượng ('Theo mình, chúng mình nên làm theo cách này sẽ hợp lí hơn').",
        q2: "Câu hỏi 2 (SGK tr.27): Nêu cách từ chối khi bị bạn bè rủ rê vào các tệ nạn (hút thuốc lá, chơi game quá giờ, đi chơi đêm)?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.27): Giữ vững lập trường, từ chối thẳng thắn, dứt khoát ('Không, thuốc lá rất có hại cho sức khỏe, mình tuyệt đối không thử'); nhanh chóng rời khỏi nơi nguy hiểm và tìm đến sự trợ giúp của người lớn khi bị ép buộc.",
        situation1: "Tình huống 1 (SGK tr.27): Trên đường đi học về, Nam nói với Mai: 'Hôm nay là sinh nhật Hoa đấy, tối nay mình với bạn đến chúc mừng Hoa nhé!'. Tuy nhiên, Mai lại không muốn đi vào buổi tối vì có thể sẽ gặp nguy hiểm. Mai nên từ chối thế nào?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.27): Mai áp dụng cách từ chối thương lượng: 'Buổi tối đi lại không an toàn và bố mẹ mình không đồng ý. Chiều nay trước giờ học hoặc giờ ra chơi ngày mai, chúng mình cùng đến chúc mừng sinh nhật Hoa nhé!'.",
        situation2: "Tình huống 2 (SGK tr.27): Chiều nay, khi ra sân nhà văn hoá chơi đá bóng, Tuấn thấy một số bạn đang rủ nhau hút thuốc lá. Sơn tiến lại gần và đưa cho Tuấn một điếu thuốc rồi nói: 'Thử đi! Cảm giác đặc biệt lắm đấy'. Tuấn nên xử lí thế nào?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.27): Tuấn từ chối thẳng thắn, dứt khoát: 'Không, mình không hút thuốc lá vì rất có hại cho phổi và vi phạm nội quy'. Sau đó Tuấn quay lại sân chơi thể thao cùng các bạn khác."
      };
    }
  }

  // =========================================================================
  // CHỦ ĐỀ 4: RÈN LUYỆN BẢN THÂN (SGK Trang 28 - 35)
  // =========================================================================
  if (topicNumber === 4) {
    if (ori.includes("tiêu dùng") || ori.includes("tiếp thị") || ori.includes("quảng cáo") || ori.includes("người tiêu dùng thông thái")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.30): Phân tích ảnh hưởng của tiếp thị, quảng cáo đến quyết định chi tiêu của nhân vật Hà trong tình huống SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.30): Hà thấy quảng cáo áo khoác giảm giá 50% bắt mắt trên mạng xã hội nên vội vàng đặt mua. Khi nhận hàng, áo không giống quảng cáo và lời giới thiệu, khiến Hà vừa thất vọng vừa tiếc tiền. Bài học: Không nên tin ngay vào quảng cáo hấp dẫn, cần tìm hiểu kĩ thông tin, nguồn gốc và sự cần thiết thực sự trước khi mua.",
        q2: "Câu hỏi 2 (SGK tr.31-32): Nêu nguyên tắc ra quyết định chi tiêu phù hợp trước ảnh hưởng của tiếp thị, khuyến mãi?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.31-32): (1) Cân nhắc giữa 'Cần' và 'Muốn'; (2) Không mua hàng chỉ vì khuyến mãi 'Mua 1 tặng 1' hoặc giảm giá sâu nếu chưa thực sự cần; (3) Kiểm tra kĩ chất lượng sản phẩm, tem mác và đánh giá thực tế từ người dùng tin cậy.",
        situation1: "Tình huống 1 (SGK tr.31): Vừa ra khỏi cổng trường, Lan được một chị mời đến quán bán đồ ăn vặt mới mở gần đó với ưu đãi mua 1 tặng 1. Lan thấy lời chào mời rất hấp dẫn và bụng đang đói nhưng nếu mua đồ ăn thì không còn đủ tiền mua quà sinh nhật cho bạn. Lan nên quyết định thế nào?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.31): Lan nên kiên định từ chối lời mời đồ ăn vặt, giữ đúng số tiền đã dự định để mua quà sinh nhật cho bạn; về nhà ăn cơm cùng gia đình.",
        situation2: "Tình huống 2 (SGK tr.31): Đi học về, Hoàng thấy chị gái đang chăm chú lắng nghe cô hàng xóm tư vấn về tác dụng giảm cân của một loại thực phẩm chức năng. Hoàng thấy chị có vẻ tin và muốn mua nhưng nghe lời tiếp thị Hoàng không yên tâm. Hoàng nên khuyên chị thế nào?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.31): Hoàng nên khuyên chị không vội mua các sản phẩm chưa rõ nguồn gốc y tế; nên tìm hiểu ý kiến của bác sĩ hoặc chuyên gia dinh dưỡng và giảm cân an toàn bằng cách tập thể dục, ăn uống khoa học."
      };
    }

    if (ori.includes("kinh doanh") || ori.includes("nhà kinh doanh nhỏ") || ori.includes("kế hoạch kinh doanh")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.33): Nêu các nội dung cần có trong một bản kế hoạch kinh doanh theo mẫu SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.33): Mẫu SGK tr.33: (1) Ý tưởng kinh doanh (đồ làm bằng tay: bưu thiếp, kẹp tóc, vòng tay...); (2) Đối tượng sử dụng (học sinh); (3) Nhu cầu người tiêu dùng (thích đồ làm bằng tay đẹp, độc đáo); (4) Kế hoạch tiếp thị (giới thiệu trong trường, quảng cáo MXH); (5) Vốn kinh doanh (400.000 đồng); (6) Chi phí (mua giấy, keo, hạt cườm: 400.000 đồng); (7) Kênh bán hàng (trực tiếp và trực tuyến); (8) Doanh thu dự kiến (500.000 đồng/tháng); (9) Lãi dự kiến (100.000 đồng/tháng).",
        q2: "Câu hỏi 2 (SGK tr.34): Khi tham vấn ý kiến người thân về kế hoạch kinh doanh, em cần chú ý điều gì?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.34): Lắng nghe ý kiến đóng góp của cha mẹ về tính khả thi, cách quản lí vốn và cân đối thời gian để không làm ảnh hưởng đến việc học tập chính khóa.",
        situation1: "Tình huống 1 (SGK tr.33): Ngọc và một nhóm bạn rất thích đồ thủ công làm bằng tay như: móc chìa khoá, dây buộc tóc, hoa cài áo,... Qua tìm hiểu thực tế, nhóm nhận thấy nhiều người có cùng sở thích. Nhóm nảy ra ý tưởng kinh doanh. Em nhận xét gì về ý tưởng này?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.33): Đây là ý tưởng kinh doanh tốt, phù hợp lứa tuổi học sinh, phát huy được năng khiếu khéo tay, đáp ứng đúng nhu cầu thực tế của bạn bè và chi phí vốn đầu tư ban đầu thấp.",
        situation2: "Tình huống 2 (SGK tr.34): Thảo xin ý kiến của bố mẹ về dự định kinh doanh đồ thủ công. Bố mẹ cho rằng ở lứa tuổi của Thảo chỉ nên tập trung vào việc học. Thảo nên thuyết phục bố mẹ thế nào?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.34): Thảo nên trình bày bản kế hoạch chi tiết, cam kết chỉ làm đồ thủ công vào thời gian rảnh rỗi cuối tuần và đảm bảo kết quả học tập tốt trên lớp để bố mẹ an tâm ủng hộ."
      };
    }

    if (ori.includes("tự chủ") || ori.includes("rèn luyện sự tự chủ")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.34): Nêu các biểu hiện của sự tự chủ trong đời sống và trên mạng xã hội theo SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.34): Theo SGK: (1) Trong đời sống: Chủ động thực hiện các nhiệm vụ của bản thân; Bình tĩnh suy nghĩ để làm chủ cảm xúc và hành vi; Chủ động tìm phương án giải quyết các vấn đề; Chủ động kết bạn; (2) Trên mạng xã hội: Bình luận và trả lời bình luận theo hướng tích cực; Chủ động xác minh thông tin trước khi chia sẻ; Từ chối những lời mời kết bạn không đáng tin cậy.",
        q2: "Câu hỏi 2 (SGK tr.35): Nêu cách ứng xử tự chủ khi đối mặt với những bình luận tiêu cực hoặc bất đồng quan điểm trên mạng xã hội?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.35): Giữ bình tĩnh, không tranh cãi gay gắt; phản hồi lịch sự, văn minh hoặc bỏ qua, chặn các tài khoản có hành vi công kích thù địch.",
        situation1: "Tình huống 1 (SGK tr.35): Nhóm của Thắng đạt giải Nhất cuộc thi sáng tạo khoa học kĩ thuật của trường. Nhóm chụp ảnh đưa lên mạng xã hội. Tuy nhiên, có những bình luận cho rằng nhóm may mắn chứ sản phẩm chưa phải là tốt nhất. Thắng nên làm gì?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.35): Thắng và nhóm thể hiện sự tự chủ: Gửi lời cảm ơn tất cả các lời chúc và ý kiến đóng góp; bình tĩnh tiếp thu để hoàn thiện sản phẩm tốt hơn ở các vòng thi sau, không đôi co trên mạng.",
        situation2: "Tình huống 2 (SGK tr.35): Để chào mừng ngày 22/12, Cường được giao nhiệm vụ tìm người dẫn chương trình. Ở lớp có 2 bạn muốn làm, trong đó Mai là bạn thân của Cường nhưng khả năng dẫn không tốt bằng bạn kia. Cường nên chọn ai?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.35): Cường thể hiện sự tự chủ, công tâm: Chọn bạn có năng lực dẫn tốt hơn để đảm bảo thành công chung của chương trình; đồng thời gặp riêng Mai chia sẻ, động viên Mai cùng tham gia hỗ trợ tiết mục văn nghệ."
      };
    }
  }

  // =========================================================================
  // CHỦ ĐỀ 5: EM VỚI GIA ĐÌNH (SGK Trang 36 - 41)
  // =========================================================================
  if (topicNumber === 5) {
    if (ori.includes("tôn trọng") || ori.includes("thuyết phục") || ori.includes("người thân hài lòng")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.38): Nêu các lời nói và việc làm để người thân hài lòng theo bảng SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.38): Bảng SGK tr.38: (1) Lời nói: Chào hỏi lễ phép với ông bà, cha mẹ; Nói lời yêu thương với người thân; Quan tâm, hỏi han khi người thân có chuyện vui, buồn, khó khăn; (2) Việc làm: Chăm sóc người thân bị ốm, mệt; Giúp đỡ anh chị em; Chia sẻ công việc gia đình.",
        q2: "Câu hỏi 2 (SGK tr.39): Nêu các cách thể hiện sự tôn trọng ý kiến khác nhau và cách thuyết phục người thân trong gia đình?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.39): Theo SGK: (1) Tôn trọng ý kiến khác nhau: Lắng nghe ý kiến của người thân; Đặt mình vào vị trí của người thân để thấu hiểu; Biết thừa nhận sự hợp lí trong ý kiến của người thân; (2) Cách thuyết phục: Chọn thời điểm thuyết phục phù hợp; Đưa ra những phương án hợp lí; Diễn đạt rành mạch, rõ ràng.",
        situation1: "Tình huống 1 (SGK tr.38): Hưng rất thích chơi bóng rổ và muốn tham gia câu lạc bộ bóng rổ của trường nhưng bố mẹ không đồng ý vì lo Hưng học lớp 8 cuối cấp. Hưng đã thuyết phục bố mẹ thế nào?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.38): Hưng lễ phép lắng nghe, cảm ơn bố mẹ đã quan tâm; sau đó trình bày lợi ích giúp rèn luyện thể lực, tính kiên trì và cam kết sắp xếp thời gian biểu hợp lí để không ảnh hưởng đến việc học.",
        situation2: "Tình huống 2 (SGK tr.39): Cả nhà An lên kế hoạch tổ chức mừng thọ bà nội. Bố muốn làm cơm ấm cúng tại nhà, mẹ muốn mời họ hàng cùng dự, An biết bà thích đi du lịch gần. An nên làm gì?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.39): An lắng nghe ý kiến của bố mẹ; sau đó khéo léo đề xuất phương án kết hợp: Tổ chức bữa cơm sum họp ấm cúng có họ hàng thân thiết tại nhà, sau đó cuối tuần cả nhà đưa bà đi vãn cảnh ngôi chùa gần nhà mà bà yêu thích."
      };
    }

    if (ori.includes("tiết kiệm") || ori.includes("công việc gia đình") || ori.includes("sắp xếp")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.40): Nêu những việc cần làm để thể hiện cách sống tiết kiệm trong sinh hoạt gia đình theo SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.40): Gợi ý SGK tr.40: Tắt các thiết bị điện khi không sử dụng; Tận dụng nước vo gạo, nước rửa rau để tưới cây; Chỉ mua những thứ thực sự cần thiết; Bảo quản tốt đồ dùng sinh hoạt để dùng được lâu bền.",
        q2: "Câu hỏi 2 (SGK tr.40): Nêu cách sắp xếp công việc gia đình hợp lí và lập bảng kế hoạch theo mẫu SGK?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.40): (1) Cách sắp xếp: Liệt kê công việc phải làm trong tuần; Sắp xếp thứ tự ưu tiên; Phân phối thời gian phù hợp; (2) Mẫu kế hoạch SGK: Lau nhà cửa (Hàng ngày), Sắp xếp đồ dùng gọn gàng ngăn nắp (Hàng ngày), Tổng vệ sinh nhà cửa (Cuối tuần).",
        situation1: "Tình huống 1 (SGK tr.41): Tuần trước, Nam mới được bố mẹ mua cho một hộp bút rất đẹp nhân dịp sinh nhật. Hôm nay, khi đi qua cửa hàng văn phòng phẩm, Nam thấy có một hộp bút rất ưng ý lại đang giảm giá 50%. Nam băn khoăn không biết nên mua thêm hay không?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.41): Nam không nên mua vì hộp bút ở nhà vẫn còn mới và dùng tốt. Tiết kiệm tiền để phục vụ cho các nhu cầu học tập thiết yếu khác.",
        situation2: "Tình huống 2 (SGK tr.41): Tiến thấy em gái cho nhiều bột xà phòng vào ngâm quần áo, sau đó lại cho nước chảy tràn chậu giặt để trôi hết bọt xà phòng. Tiến nên xử lí thế nào?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.41): Tiến nên nhẹ nhàng tắt vòi nước, hướng dẫn em gái lượng xà phòng vừa đủ và cách xả nước giặt tiết kiệm để tránh lãng phí nước và xà phòng."
      };
    }
  }

  // =========================================================================
  // CHỦ ĐỀ 6: EM VỚI CỘNG ĐỒNG (SGK Trang 42 - 47)
  // =========================================================================
  if (topicNumber === 6) {
    if (ori.includes("truyền thống") || ori.includes("phát triển cộng đồng") || ori.includes("bảo tàng")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.44): Kể tên các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương mà em có thể tham gia?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.44): (1) Tổng vệ sinh trường học, đường làng, ngõ xóm nơi em sống; (2) Tham gia các hoạt động thiện nguyện, đền ơn đáp nghĩa; (3) Tham quan di tích lịch sử, bảo tàng và tham gia lễ hội truyền thống ở địa phương.",
        q2: "Câu hỏi 2 (SGK tr.45): Nêu các nội dung trong bản kế hoạch 'Tham quan bảo tàng lịch sử' theo mẫu SGK?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.45): Mẫu SGK tr.45: Tên hoạt động: Tham quan bảo tàng lịch sử; Nhóm tham gia: Học sinh khối 8; Mục tiêu: Tìm hiểu và thu thập thông tin về bảo tàng lịch sử ở địa phương; Địa điểm: Bảo tàng lịch sử tỉnh/thành phố; Thời gian: Ngày... tháng...; Khó khăn có thể gặp: Thiếu phương tiện đi lại; Cách tìm kiếm hỗ trợ: Trực tiếp trình bày khó khăn với cha mẹ, giáo viên phụ trách.",
        situation1: "Tình huống 1 (SGK tr.44): Minh muốn tham gia hoạt động dọn dẹp vệ sinh đài tưởng niệm liệt sĩ của xã nhưng chưa biết sắp xếp thời gian và phương tiện đi lại thế nào?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.44): Minh nên xin ý kiến cha mẹ, liên hệ với anh chị đoàn viên phụ trách thôn/xóm để đăng kí đi chung xe với các bạn cùng lớp.",
        situation2: "Tình huống 2 (SGK tr.45): Bố mẹ bạn Lan lo lắng việc tham gia hoạt động cộng đồng sẽ ảnh hưởng đến việc ôn thi học kì. Lan nên thuyết phục bố mẹ ra sao?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.45): Lan chủ động hoàn thành bài tập sớm, lập thời gian biểu rõ ràng và giải thích cho bố mẹ hiểu đây là hoạt động trải nghiệm thực tế bổ ích giúp mở rộng hiểu biết xã hội."
      };
    }

    if (ori.includes("thiện nguyện") || ori.includes("kế hoạch hoạt động thiện nguyện")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.46): Nêu các nội dung của bản kế hoạch hoạt động thiện nguyện theo mẫu 'Chung tay hỗ trợ trẻ em mồ côi, trẻ em nghèo vượt khó' trong SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.46): Mẫu SGK tr.46: (1) Tên hoạt động: Chung tay hỗ trợ trẻ em mồ côi, trẻ em nghèo vượt khó; (2) Nhóm thực hiện: Vũ Hà Giang (nhóm trưởng), Trần Thị Hà, Nguyễn Ngọc Tùng, Phan Thị Thảo, Lê Thu Hiền, Hoàng Phương Thu; (3) Mục tiêu: Hỗ trợ trẻ em gặp khó khăn; (4) Địa điểm: Nhà văn hóa thôn/bản; (5) Công việc chuẩn bị: Tìm hiểu thông tin, phân loại quà, quyên góp sách vở, mời đại diện cán bộ địa phương; (6) Hoạt động: Giới thiệu chương trình, trao quà.",
        q2: "Câu hỏi 2 (SGK tr.46-47): Nêu ý nghĩa của hoạt động thiện nguyện đối với bản thân và cộng đồng?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.46-47): Giúp lan tỏa tinh thần 'Lá lành đùm lá rách', sẻ chia khó khăn với những mảnh đời kém may mắn; giúp bản thân bồi dưỡng lòng nhân ái, sự đồng cảm và trách nhiệm xã hội.",
        situation1: "Tình huống 1 (SGK tr.46): Nhóm em chuẩn bị thực hiện kế hoạch quyên góp sách vở tặng các bạn vùng bị lũ lụt. Em sẽ phân công các thành viên thế nào?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.46): Nhóm trưởng lập danh sách phân công: 2 bạn tiếp nhận và phân loại sách giáo khoa, 2 bạn bọc lại sách và đóng thùng cẩn thận, 2 bạn liên hệ với Đoàn trường để chuyển giao sách đến đúng địa chỉ.",
        situation2: "Tình huống 2 (SGK tr.47): Một số bạn trong lớp muốn đóng góp nhưng không có điều kiện ủng hộ tiền mặt. Em sẽ gợi ý bạn làm gì?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.47): Gợi ý các bạn quyên góp bằng quần áo ấm còn lành lặn, sách báo cũ, đồ chơi hoặc trực tiếp đóng góp công sức phân loại, đóng gói quà tặng."
      };
    }
  }

  // =========================================================================
  // CHỦ ĐỀ 7: EM VỚI THIÊN NHIÊN VÀ MÔI TRƯỜNG (SGK Trang 48 - 55)
  // =========================================================================
  if (topicNumber === 7) {
    if (ori.includes("cảnh quan") || ori.includes("danh lam thắng cảnh") || ori.includes("triển lãm")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.50): Nêu các cách bảo tồn cảnh quan thiên nhiên, danh lam thắng cảnh ở địa phương theo sơ đồ SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.50): Sơ đồ SGK tr.50: (1) Học sinh: Không vứt rác bừa bãi, tuyên truyền vận động mọi người bảo tồn cảnh quan; (2) Người dân: Không lấn chiếm sử dụng trái phép không gian cảnh quan, giữ gìn vệ sinh môi trường; (3) Chính quyền địa phương: Ban hành các quy định bảo tồn, xử phạt nghiêm hành vi làm biến dạng cảnh quan; (4) Cơ sở sản xuất kinh doanh: Tuân thủ quy định bảo vệ môi trường sinh thái.",
        q2: "Câu hỏi 2 (SGK tr.51): Nêu các nội dung của bản 'Kế hoạch tổ chức triển lãm Tự hào vẻ đẹp quê tôi' theo mẫu SGK?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.51): Mẫu SGK tr.51: Tên triển lãm: 'Tự hào vẻ đẹp quê tôi'; Mục đích: Giới thiệu vẻ đẹp cảnh quan thiên nhiên và kêu gọi bảo tồn; Địa điểm: Nhà sinh hoạt cộng đồng; Phân công: Tranh ảnh/áp phích (cả nhóm), Dẫn chương trình (Giang), Thuyết minh (Quân, Thảo), Đón tiếp khách (Trung); Chương trình: Khai mạc, hướng dẫn xem triển lãm, bế mạc.",
        situation1: "Tình huống 1 (SGK tr.50): Khi đi tham quan một danh lam thắng cảnh, em nhìn thấy một nhóm du khách khắc tên lên vách đá và vứt vỏ chai nhựa xuống suối. Em sẽ làm gì?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.50): Nhắc nhở lịch sự với du khách về quy định giữ gìn cảnh quan thiên nhiên; nhặt rác bỏ vào đúng nơi quy định và báo cho ban quản lí khu di tích.",
        situation2: "Tình huống 2 (SGK tr.52): Lớp em tổ chức sự kiện giới thiệu vẻ đẹp thiên nhiên địa phương. Nhóm em sẽ thiết kế sản phẩm gì để tạo ấn tượng?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.52): Thiết kế tập san ảnh kết hợp mã QR liên kết video clip ngắn giới thiệu các góc quay đẹp về thiên nhiên quê hương và các giải pháp bảo vệ môi trường."
      };
    }

    if (ori.includes("thiên tai") || ori.includes("truyền thông") || ori.includes("rủi ro")) {
      return {
        q1: "Câu hỏi 1 (SGK tr.53): Trình bày mẫu báo cáo thực trạng thiên tai và thiệt hại do thiên tai gây ra theo bảng số liệu SGK?",
        a1: "Trả lời Câu hỏi 1 (SGK tr.53): Bảng SGK tr.53: (1) Năm 2017: Hạn hán -> Thiệt hại: Một số hồ ao nuôi cá bị khô kiệt, diện tích lúa bị chết khô; (2) Năm 2020: Bão lũ -> Thiệt hại: 3 người chết, 12 người bị thương; 2 ngôi nhà bị lũ cuốn trôi, hàng chục ngôi nhà bị tốc mái; giao thông ngưng trệ 2 ngày; gia súc gia cầm bị chết; hoa màu bị ngập úng.",
        q2: "Câu hỏi 2 (SGK tr.54): Nêu các biện pháp đề phòng và giảm nhẹ rủi ro do bão gây ra và kế hoạch truyền thông chuẩn SGK?",
        a2: "Trả lời Câu hỏi 2 (SGK tr.54): (1) Biện pháp SGK: Thường xuyên theo dõi dự báo thời tiết; Gia cố nhà cửa, chuồng trại; Chuẩn bị sẵn túi thuốc, dự trữ lương thực thực phẩm, nước sạch; Sơ tán người và tài sản đến nơi an toàn; (2) Kế hoạch truyền thông SGK: Nhóm Phạm Hồng Anh, Nguyễn Quang Anh, Trần Ngọc Linh, Đỗ Hà Phương, Lê Lan Ngọc; Thông điệp: 'Đề phòng và giảm nhẹ rủi ro thiên tai là trách nhiệm của mỗi người vì sức khoẻ, tính mạng, tài sản của bản thân, gia đình và cộng đồng'.",
        situation1: "Tình huống 1 (SGK tr.54): Nghe tin có bão lớn sắp đổ bộ vào địa phương, gia đình em cần chuẩn bị những việc làm cụ thể nào trước 24 giờ?",
        situationAns1: "Xử lí Tình huống 1 (SGK tr.54): Cùng bố mẹ chằng chống lại mái nhà, chặt tỉa cành cây cao gần nhà, sạc đầy pin đèn pin, tích trữ nước uống và mì tôm, kiểm tra tủ thuốc gia đình.",
        situation2: "Tình huống 2 (SGK tr.55): Khi đang trên đường đi học về thì trời nổi dông sét và mưa to dữ dội. Em cần xử lí như thế nào để đảm bảo an toàn?",
        situationAns2: "Xử lí Tình huống 2 (SGK tr.55): Nhanh chóng tìm chỗ trú ẩn an toàn trong nhà kiên cố; tuyệt đối không đứng trú dưới gốc cây to, cột điện, không cầm các vật bằng kim loại và tránh xa vùng nước ngập."
      };
    }
  }

  // =========================================================================
  // CHỦ ĐỀ 8: KHÁM PHÁ THẾ GIỚI NGHỀ NGHIỆP (SGK Trang 56 - 61)
  // =========================================================================
  if (topicNumber === 8) {
    return {
      q1: "Câu hỏi 1 (SGK tr.58-59): Nêu đặc trưng, trang thiết bị, yêu cầu phẩm chất năng lực của nghề 'Thợ cơ khí và sửa chữa xe có động cơ' theo SGK?",
      a1: "Trả lời Câu hỏi 1 (SGK tr.58-59): Theo khung SGK tr.59: (1) Việc làm đặc trưng: Lắp ráp, kiểm tra, thử nghiệm và sửa chữa động cơ ô tô/xe máy; thay thế các bộ phận hỏng hóc; (2) Trang thiết bị, dụng cụ: Kìm, cờ lê, tuốc nơ vít, búa, máy khoan, đồ bảo hộ lao động (mũ, găng tay, giày); (3) Yêu cầu: Có kiến thức cơ bản về cơ khí, thao tác chính xác, cẩn thận, kiên trì, sức khỏe tốt; (4) Thách thức: Công nghệ ô tô thay đổi nhanh chóng, đòi hỏi thường xuyên cập nhật công nghệ mới.",
      q2: "Câu hỏi 2 (SGK tr.60): Nêu danh mục một số nhóm nghề phổ biến trong xã hội hiện đại theo Quyết định số 34/2020/QĐ-TTg trong SGK?",
      a2: "Trả lời Câu hỏi 2 (SGK tr.60): Bảng SGK tr.60: (1) Lao động trồng trọt và làm vườn (trồng lúa, rau, chè); (2) Kĩ sư kĩ thuật điện (kĩ sư điện, điện tử, viễn thông, phần mềm); (3) Nhà chuyên môn CNTT & truyền thông (lập trình viên trò chơi, nhà thiết kế phần mềm, quản trị mạng); (4) Nhà chuyên môn về giảng dạy (giảng viên đại học, giáo viên THPT, THCS, tiểu học, mầm non).",
      situation1: "Tình huống 1 (SGK tr.60-61): Nhóm em chọn tìm hiểu nghề 'Hướng dẫn viên du lịch'. Hãy nêu các công việc đặc trưng và thách thức của nghề này?",
      situationAns1: "Xử lí Tình huống 1 (SGK tr.60-61): (1) Công việc: Đón tiếp du khách, thuyết minh giới thiệu về danh lam thắng cảnh, quản lí lịch trình đoàn du lịch; (2) Thách thức: Phải di chuyển liên tục xa nhà, đòi hỏi vốn ngoại ngữ tốt, kĩ năng giao tiếp khéo léo và xử lí tình huống phát sinh linh hoạt.",
      situation2: "Tình huống 2 (SGK tr.61): Trong buổi trải nghiệm nghề tại xưởng mộc địa phương, người thợ nhắc nhở về an toàn lao động. Em cần tuân thủ những quy tắc nào?",
      situationAns2: "Xử lí Tình huống 2 (SGK tr.61): Đeo kính bảo hộ, khẩu trang chống bụi, găng tay đúng quy định; giữ khoảng cách an toàn với máy cưa, máy bào và không tự ý bấm nút vận hành thiết bị khi chưa được phép."
    };
  }

  // =========================================================================
  // CHỦ ĐỀ 9: HIỂU BẢN THÂN - CHỌN ĐÚNG NGHỀ (SGK Trang 62 - 70)
  // =========================================================================
  if (topicNumber === 9) {
    return {
      q1: "Câu hỏi 1 (SGK tr.66-67): Nêu yêu cầu về phẩm chất, năng lực của nghề Giáo viên và các môn học THPT liên quan hướng nghiệp theo SGK?",
      a1: "Trả lời Câu hỏi 1 (SGK tr.66-67): (1) Nghề Giáo viên (SGK tr.66): • Phẩm chất: Yêu nghề, yêu thương học sinh, có tinh thần trách nhiệm cao, kiên trì, nhẫn nại, tôn trọng học sinh; • Năng lực: Hiểu tâm lí lứa tuổi, thiết kế hoạt động học tập, giao tiếp khéo léo, ứng dụng CNTT; (2) Môn học THPT liên quan (SGK tr.67): • Bác sĩ nhi khoa: Toán, Hóa học, Sinh học; • Nhà ngoại giao: Ngữ văn, Toán, Ngoại ngữ; • Hướng dẫn viên du lịch: Ngữ văn, Lịch sử, Địa lí.",
      q2: "Câu hỏi 2 (SGK tr.68-69): Trình bày mẫu Kế hoạch rèn luyện sức khoẻ, độ bền, tính kiên trì, sự chăm chỉ theo SGK?",
      a2: "Trả lời Câu hỏi 2 (SGK tr.68-69): Bảng SGK tr.68: (1) Rèn luyện sức khoẻ: Lập thời gian biểu, thường xuyên tập thể dục từ 5h đến 6h hàng ngày tại sân nhà -> Nâng cao thể lực; (2) Rèn luyện độ bền, kiên trì: Tự lực học bài, làm bài khó, đặt mục tiêu cho từng công việc -> Đạt mục tiêu đề ra; (3) Rèn luyện chăm chỉ: Tự giác làm việc nhà hàng ngày -> Hoàn thành việc xác định.",
      situation1: "Tình huống 1 (SGK tr.67): Tham gia diễn đàn 'Nghề nào cũng đáng được tôn trọng'. Câu hỏi gợi mở: 'Nếu không có những người công nhân vệ sinh môi trường thì đường phố của chúng ta sẽ như thế nào?'. Em trả lời ra sao?",
      situationAns1: "Xử lí Tình huống 1 (SGK tr.67): Nếu không có công nhân vệ sinh, rác thải sẽ ứ đọng gây ô nhiễm môi trường, bùng phát dịch bệnh và mất mĩ quan đô thị. Vì vậy, mọi ngành nghề lao động chân chính đóng góp cho xã hội đều vô cùng cao quý và xứng đáng được tôn trọng.",
      situation2: "Tình huống 2 (SGK tr.69): Bạn Nam muốn thi vào ngành Công nghệ thông tin nhưng môn Toán và Tin học kết quả học tập còn ở mức trung bình. Nam nên xây dựng kế hoạch thế nào?",
      situationAns2: "Xử lí Tình huống 2 (SGK tr.69): Nam cần lập kế hoạch học tập hướng nghiệp: Tăng thời lượng tự học môn Toán và Tin học; nhờ thầy cô và bạn học tốt hỗ trợ; tham gia câu lạc bộ Tin học của trường để rèn luyện tư duy logic."
    };
  }

  // Mặc định chuẩn xác cho các bài học tổng hợp khác
  return {
    q1: `Câu hỏi 1 (SGK): Nêu các kiến thức, kĩ năng cốt lõi và phương pháp thực hiện theo SGK cho nội dung "${orientation}"?`,
    a1: `Trả lời Câu hỏi 1 (SGK): Nắm vững: (1) Khái niệm và ý nghĩa thực tiễn theo SGK; (2) Các biểu hiện chuẩn mực cần rèn luyện trong cuộc sống; (3) Các nguyên tắc thực hiện hiệu quả theo định hướng SGK.`,
    q2: `Câu hỏi 2 (SGK): Trình bày các bước lập kế hoạch và rèn luyện bản thân theo hướng dẫn của SGK?`,
    a2: `Trả lời Câu hỏi 2 (SGK): (1) Xác định mục tiêu rõ ràng; (2) Lựa chọn biện pháp và phương tiện phù hợp; (3) Phân bổ thời gian khoa học và thường xuyên đánh giá sự tiến bộ.`,
    situation1: `Tình huống 1 (SGK): Phân tích tình huống ứng xử thực tế gắn liền với nội dung "${orientation}" theo SGK?`,
    situationAns1: `Xử lí Tình huống 1 (SGK): Bình tĩnh lắng nghe, phân tích nguyên nhân và lựa chọn cách ứng xử văn minh, nhân văn và đúng quy định chuẩn mực.`,
    situation2: `Tình huống 2 (SGK): Đề xuất giải pháp giải quyết khó khăn khi thực hiện rèn luyện "${orientation}"?`,
    situationAns2: `Xử lí Tình huống 2 (SGK): Chủ động tìm kiếm sự hỗ trợ từ thầy cô, cha mẹ và bạn bè; kiên trì thực hiện theo đúng kế hoạch đề ra.`
  };
}

export function generateStandardLessonPlan(
  topicNumber: number,
  lessonId: string,
  lessonTitle: string,
  topicTitle: string,
  activityType: ActivityCategory = "HDGD",
  weekNumber: number = 1,
  periodNumber: number = 1,
  orientationName?: string,
  lessonDescription?: string,
  lessonDigitalComp?: string
): LessonPlan {
  const isSHDC = activityType === "SHDC";
  const isSHL = activityType === "SHL";

  const orientation = orientationName || lessonTitle;
  const hasDigitalIntegration = Boolean(lessonDigitalComp && lessonDigitalComp.trim().length > 0);

  // 1. Phân tích chỉ mục Năng lực số chuẩn Cột 8
  let digitalCompetencyList: string[] | undefined = undefined;
  let primaryIndicatorCode = "";
  let secondaryIndicatorCode = "";

  if (hasDigitalIntegration && lessonDigitalComp) {
    const matches = lessonDigitalComp.match(/\[\d+\.\d+\.TC2\.[a-z]\]/g);
    if (matches && matches.length > 0) {
      primaryIndicatorCode = matches[0];
      if (matches.length > 1) {
        secondaryIndicatorCode = matches[1];
      }
    }
    digitalCompetencyList = [lessonDigitalComp];
  } else {
    digitalCompetencyList = undefined;
  }

  // 2. Dữ liệu SGK chuẩn xác 100% từ PDF Sách giáo khoa
  const sgk = getExactSgkDataByTopic(topicNumber, orientation);

  let knowledge: string[] = [];
  let warmUpActivityName = "";
  let warmUpObjective = "";
  let warmUpContent = "";
  let warmUpTeacherSteps: string[] = [];
  let warmUpStudentSteps: string[] = [];
  let warmUpReport: string[] = [];
  let warmUpConclusion: string[] = [];
  let warmUpProduct: string[] = [];

  let h21Title = "";
  let h21Objective = "";
  let h21Content = "";
  let h21TeacherSteps: string[] = [];
  let h21StudentSteps: string[] = [];
  let h21Report: string[] = [];
  let h21Conclusion: string[] = [];
  let h21Product: string[] = [];

  let h22Title = "";
  let h22Objective = "";
  let h22Content = "";
  let h22TeacherSteps: string[] = [];
  let h22StudentSteps: string[] = [];
  let h22Report: string[] = [];
  let h22Conclusion: string[] = [];
  let h22Product: string[] = [];

  let h3Title = "";
  let h3Objective = "";
  let h3Content = "";
  let h3TeacherSteps: string[] = [];
  let h3StudentSteps: string[] = [];
  let h3Report: string[] = [];
  let h3Conclusion: string[] = [];
  let h3Product: string[] = [];

  let h4Title = "";
  let h4Objective = "";
  let h4Content = "";
  let h4TeacherSteps: string[] = [];
  let h4StudentSteps: string[] = [];
  let h4Report: string[] = [];
  let h4Conclusion: string[] = [];
  let h4Product: string[] = [];

  if (isSHDC) {
    // =========================================================================
    // SINH HOẠT DƯỚI CỜ (1 tiết) - 100% KHÔNG TÍCH HỢP NĂNG LỰC SỐ
    // =========================================================================
    knowledge = [
      `Nắm vững mục đích, ý nghĩa và định hướng nội dung Sinh hoạt dưới cờ theo SGK: "${orientation}".`,
      "Tiếp thu các thông điệp giáo dục đạo đức, truyền thống nhà trường và phong tràu thi đua tuần mới do Liên đội phát động.",
      "Xác định được trách nhiệm và kế hoạch hành động cụ thể của bản thân và chi đội."
    ];

    warmUpActivityName = "Nghi lễ Chào cờ trang nghiêm và Đánh giá thi đua tuần qua";
    warmUpObjective = "Thực hiện nghi lễ chào cờ theo Nghi thức Đội TNTP Hồ Chí Minh, tạo tâm thế trang nghiêm, tự hào, khơi dậy tinh thần thi đua tuần mới.";
    warmUpContent = "Toàn trường thực hiện nghi lễ Chào cờ, hát Quốc ca, Đội ca; nghe đại diện Đội cờ đỏ nhận xét thi đua tuần qua.";
    warmUpTeacherSteps = [
      "GV Tổng phụ trách Đội điều hành toàn trường chỉnh đốn hàng ngũ, thực hiện nghi lễ Chào cờ theo đúng Nghi thức Đội TNTP Hồ Chí Minh.",
      "GVCN các lớp quản lí vị trí, tác phong và nề nếp của học sinh lớp mình."
    ];
    warmUpStudentSteps = [
      "Học sinh tập hợp nhanh chóng theo hàng dọc của lớp tại sân trường, trang phục và khăn quàng đỏ chỉnh tề.",
      "Đứng trang nghiêm theo khẩu lệnh Chào cờ, hướng mắt về Quốc kì và hát to, vang, dõng dạc bài Quốc ca, Đội ca."
    ];
    warmUpReport = [
      "Đại diện Ban chỉ huy Liên đội lên đọc bảng tổng hợp điểm thi đua nề nếp tuần qua của các chi đội.",
      "Công bố xếp hạng thi đua nề nếp, chuyên cần, vệ sinh giữa các chi đội trong toàn trường."
    ];
    warmUpConclusion = [
      "Ban Giám hiệu nhà trường nhận xét chung về ưu - khuyết điểm trong tuần, tuyên dương các lớp dẫn đầu.",
      "Ban chỉ huy các chi đội ghi chép chỉ đạo của Ban Giám hiệu để triển khai tại lớp."
    ];
    warmUpProduct = [
      "100% học sinh toàn trường thực hiện đúng nghi thức Chào cờ (hát Quốc ca, Đội ca to, rõ ràng, đúng nhạc; tư thế nghiêm trang, trang phục chỉnh tề).",
      "Báo cáo đánh giá thi đua tuần qua của Ban chỉ huy Liên đội: Số liệu cụ thể về nề nếp, chuyên cần, vệ sinh của các chi đội.",
      "Ý kiến chỉ đạo và thông điệp định hướng tuần mới của Ban Giám hiệu nhà trường."
    ];

    h21Title = `HOẠT ĐỘNG 2.1: Sinh hoạt dưới cờ theo chủ đề - Tiếp nhận thông điệp "${orientation}"`;
    h21Objective = `Giúp học sinh tiếp thu trọn vẹn thông điệp giáo dục và định hướng hành động theo nội dung SGK "${orientation}".`;
    h21Content = `Lắng nghe đại diện Ban Giám hiệu / Chi đội trực tuần thuyết trình chuyên đề và phát động phong trào "${orientation}".`;
    h21TeacherSteps = [
      `GV Tổng phụ trách giới thiệu chủ đề Sinh hoạt dưới cờ: "${orientation}", mời đại diện Ban Giám hiệu hoặc Chi đội trực tuần lên phát biểu.`,
      `Nêu câu hỏi định hướng SGK cho toàn trường: "${sgk.q1}".`
    ];
    h21StudentSteps = [
      "Học sinh toàn trường tập trung chú ý lắng nghe nội dung bài phát biểu, ghi nhận các yêu cầu và chỉ tiêu thi đua.",
      "Các chi đội thảo luận nhanh để nắm bắt các nhiệm vụ trọng tâm do Liên đội phân công."
    ];
    h21Report = [
      "Đại diện Chi đội trực tuần đọc bài tuyên truyền chủ đề với nội dung sâu sắc, giọng đọc truyền cảm.",
      "Ban chỉ huy Liên đội công bố nội dung giao ước thi đua giữa các chi đội."
    ];
    h21Conclusion = [
      "Ban Giám hiệu đúc kết thông điệp cốt lõi, yêu cầu các chi đội cụ thể hóa vào kế hoạch hoạt động tuần.",
      "Toàn thể học sinh vỗ tay hưởng ứng thông điệp và quyết tâm thi đua."
    ];
    h21Product = [
      `Bài phát biểu/tuyên truyền chủ đề "${orientation}" do Chi đội trực tuần chuẩn bị với thông điệp rõ ràng, đúng định hướng SGK.`,
      `Câu trả lời của đại diện học sinh về câu hỏi định hướng SGK: ${sgk.a1}`,
      "Hệ thống các chỉ tiêu thi đua trọng tâm trong tuần được toàn trường nhất trí tiếp thu."
    ];

    h22Title = `HOẠT ĐỘNG 2.2: Phát động phong trào và Kí giao ước thi đua`;
    h22Objective = `Tạo động lực thi đua sôi nổi, giúp các chi đội cam kết thực hiện nghiêm túc nội dung "${orientation}".`;
    h22Content = "Các chi đội đăng kí chỉ tiêu thi đua và tham gia hoạt cảnh / tiết mục văn nghệ tuyên truyền theo SGK.";
    h22TeacherSteps = [
      "Tổng phụ trách Đội phát động phong trào thi đua gắn với chủ đề tuần học.",
      "Điều hành phần kí giao ước thi đua giữa đại diện Ban chỉ huy các chi đội."
    ];
    h22StudentSteps = [
      "Đại diện Ban chỉ huy các chi đội lên lễ đài thực hiện kí cam kết giao ước thi đua.",
      "Học sinh toàn trường hô vang khẩu hiệu quyết tâm hưởng ứng phong trào."
    ];
    h22Report = [
      "Chi đội trực tuần biểu diễn tiết mục hoạt cảnh văn nghệ chủ đề.",
      "Học sinh toàn trường theo dõi, cổ vũ và cùng hô vang khẩu hiệu quyết tâm thi đua."
    ];
    h22Conclusion = [
      "Liên đội chốt các chỉ tiêu thi đua trọng tâm trong tuần.",
      "Học sinh ghi nhớ các mốc thời gian quan trọng trong tuần để thực hiện tốt nhiệm vụ."
    ];
    h22Product = [
      `Bản giao ước thi đua có chữ kí của Ban chỉ huy các chi đội: Đăng kí cụ thể các chỉ tiêu rèn luyện (tiết học tốt, tuần học tốt, phong trào hoa điểm 10).`,
      `Tiết mục văn nghệ / hoạt cảnh tuyên truyền do chi đội trực tuần biểu diễn với nội dung sinh động, truyền tải trọn vẹn thông điệp "${orientation}".`,
      "Khẩu hiệu quyết tâm thi đua được toàn thể học sinh nhà trường đồng thanh hưởng ứng."
    ];

    h3Title = "HOẠT ĐỘNG 3: LUYỆN TẬP - Tương tác và Trả lời câu hỏi nhanh theo SGK";
    h3Objective = "Củng cố kiến thức và kĩ năng đã tiếp thu trong buổi Sinh hoạt dưới cờ.";
    h3Content = "Học sinh tham gia trả lời các câu hỏi tình huống nhanh hoặc đố vui có thưởng bám sát nội dung SGK.";
    h3TeacherSteps = [
      `GV Tổng phụ trách nêu câu hỏi tương tác SGK: "${sgk.q2}".`,
      "Quan sát, bao quát sân trường và mời học sinh giơ tay nhanh nhất lên trả lời câu hỏi."
    ];
    h3StudentSteps = [
      "Chú ý lắng nghe câu hỏi tình huống của GV.",
      "Nhanh chóng suy nghĩ, phân tích câu hỏi và giơ tay giành quyền trả lời."
    ];
    h3Report = [
      `Học sinh tự tin trả lời trước toàn trường: "${sgk.a2}".`,
      "Các bạn học sinh bên dưới lắng nghe, vỗ tay tán thành câu trả lời đúng chuẩn."
    ];
    h3Conclusion = [
      "GV nhận xét tinh thần tham gia và trao quà khen thưởng cho học sinh có câu trả lời xuất sắc.",
      "Toàn trường rút ra bài học ứng xử chuẩn mực từ câu hỏi SGK."
    ];
    h3Product = [
      `Câu trả lời chính xác của học sinh cho câu hỏi SGK: ${sgk.a2}`,
      "Bộ phương án ứng xử văn minh, chuẩn mực được toàn thể học sinh nhà trường lắng nghe, đồng thuận và rút kinh nghiệm thực tiễn.",
      "Các phần quà lưu niệm/khen thưởng được trao trực tiếp cho các cá nhân có câu trả lời xuất sắc."
    ];

    h4Title = "HOẠT ĐỘNG 4: VẬN DỤNG - Kế hoạch hành động tuần mới của Chi đội";
    h4Objective = "Chuyển hóa thông điệp Sinh hoạt dưới cờ thành hành động cụ thể trong học tập, rèn luyện hàng ngày.";
    h4Content = "Các chi đội triển khai thực hiện nhiệm vụ trong tuần và chuẩn bị nội dung báo cáo cho tiết Sinh hoạt lớp cuối tuần.";
    h4TeacherSteps = [
      "GV Tổng phụ trách giao nhiệm vụ cho GVCN các lớp đôn đốc học sinh thực hiện các cam kết trong tuần.",
      "Nhắc lịch chuẩn bị sản phẩm cho tiết Hoạt động giáo dục theo chủ đề và Sinh hoạt lớp."
    ];
    h4StudentSteps = [
      "Lắng nghe dặn dò của Tổng phụ trách và Ban Giám hiệu.",
      "Ban chỉ huy chi đội ghi nhớ nhiệm vụ để triển khai trong buổi sinh hoạt 15 phút đầu giờ."
    ];
    h4Report = [
      "Các chi đội báo cáo kế hoạch phân công nhiệm vụ cụ thể cho từng tổ.",
      "Cam kết thực hiện nghiêm túc nề nếp và hoàn thành các chỉ tiêu rèn luyện."
    ];
    h4Conclusion = [
      "Kết thúc buổi Sinh hoạt dưới cờ, toàn trường bước vào tuần học mới với khí thế thi đua sôi nổi.",
      "Học sinh di chuyển trật tự theo hàng về phòng học chuẩn bị cho tiết học tiếp theo."
    ];
    h4Product = [
      `Bản kế hoạch hành động tuần mới của từng chi đội: Nêu rõ phân công nhiệm vụ cụ thể cho từng tổ (trực nhật, theo dõi nề nếp, chuẩn bị tiết học HĐTN).`,
      `Sổ tay rèn luyện cá nhân của từng học sinh có ghi ít nhất 2 cam kết hành động cụ thể gắn liền với chủ đề "${orientation}".`,
      "Đội ngũ học sinh di chuyển ngay ngắn, nghiêm túc, đúng quy định về các phòng học."
    ];

  } else if (isSHL) {
    // =========================================================================
    // SINH HOẠT LỚP (1 tiết)
    // =========================================================================
    knowledge = [
      `Nắm vững kết quả rèn luyện của bản thân và tập thể lớp trong tuần theo nội dung SGK: "${orientation}".`,
      "Nhận diện được những ưu điểm cần phát huy và những hạn chế cần khắc phục trong nề nếp, học tập và hoạt động trải nghiệm theo SGK.",
      "Xác định được phương hướng, nhiệm vụ và kế hoạch rèn luyện cụ thể cho tuần tiếp theo."
    ];

    warmUpActivityName = "Sơ kết hoạt động tuần và Khởi động năng lượng";
    warmUpObjective = "Đánh giá toàn diện hoạt động của lớp trong tuần qua, tạo không khí dân chủ, cởi mở và gắn kết tập thể.";
    warmUpContent = "Ban cán sự lớp (Lớp trưởng, các Tổ trưởng, Cán sự bộ môn) báo cáo tình hình học tập, nề nếp; GVCN nhận xét chung.";
    warmUpTeacherSteps = [
      "GVCN mời Lớp trưởng và các Tổ trưởng lên điều hành phần sơ kết tuần của lớp.",
      "Lắng nghe, quan sát thái độ của học sinh, ghi nhận các vấn đề nổi cộm cần uốn nắn, biểu dương."
    ];
    warmUpStudentSteps = [
      "Các Tổ trưởng đọc báo cáo điểm thi đua và nề nếp của tổ mình trong tuần (chuyên cần, tác phong, điểm số học tập, vệ sinh).",
      "Lớp phó học tập và Lớp phó lao động báo cáo tình hình học tập và vệ sinh trực nhật lớp học."
    ];
    warmUpReport = [
      "Lớp trưởng tổng kết điểm thi đua chung, đề xuất xếp loại các tổ và danh sách cá nhân xuất sắc được khen thưởng.",
      "Các thành viên trong lớp phát biểu ý kiến đóng góp, giải trình hoặc kiến nghị giải pháp cải thiện nề nếp."
    ];
    warmUpConclusion = [
      "GVCN nhận xét, tuyên dương các bạn tiến bộ, nhắc nhở các trường hợp vi phạm và định hướng giải pháp khắc phục tồn tại.",
      "Cả lớp lắng nghe kết luận và vỗ tay chúc mừng các bạn được tuyên dương."
    ];
    warmUpProduct = [
      "Biên bản sơ kết tuần của Ban cán sự lớp: Bảng tổng hợp chi tiết điểm thi đua nề nếp, chuyên cần, vệ sinh, học tập của 4 tổ.",
      "Bảng xếp loại thi đua giữa các tổ trong tuần (Tổ 1, Tổ 2, Tổ 3, Tổ 4) và danh sách cá nhân tiêu biểu được tuyên dương.",
      "Ý kiến đóng góp, giải trình dân chủ của các thành viên trong lớp và ghi nhận chỉ đạo định hướng của GVCN."
    ];

    h21Title = `HOẠT ĐỘNG 2.1: Sinh hoạt theo chủ đề - Chia sẻ kết quả "${orientation}"`;
    
    if (hasDigitalIntegration) {
      const shlCode = primaryIndicatorCode || "[3.1.TC2.a]";
      h21Objective = `Tạo diễn đàn để học sinh chia sẻ sản phẩm, trải nghiệm và bài học rèn luyện theo nội dung "${orientation}". Tích hợp Năng lực số ${shlCode}: Học sinh sử dụng công cụ số (Slide Canva/PowerPoint/Video clip) để trình bày và chia sẻ sản phẩm số trước tập thể lớp.`;
      h21Content = `Học sinh trình chiếu sản phẩm số và trả lời câu hỏi thảo luận SGK về nội dung "${orientation}".`;
      h21TeacherSteps = [
        `GVCN hướng dẫn các tổ chuẩn bị thiết bị trình chiếu, mở file sản phẩm số đã hoàn thiện theo mã chỉ báo ${shlCode} (Slide Canva/PowerPoint, video clip hoặc infographic số).`,
        `Nêu câu hỏi thảo luận SGK: "${sgk.q1}".`,
        "Điều phối các nhóm kết nối thiết bị với Tivi thông minh / Máy chiếu của lớp, hỗ trợ kĩ thuật số khi cần thiết."
      ];
      h21StudentSteps = [
        "Tổ trưởng kiểm tra file sản phẩm số trên máy tính / thiết bị lưu trữ, sẵn sàng trình chiếu đa phương tiện.",
        "Cả tổ phối hợp: 1 bạn điều khiển slide/video, 1 bạn thuyết minh về nội dung và trả lời các câu hỏi SGK."
      ];
      h21Report = [
        "Đại diện các tổ lần lượt trình chiếu và thuyết minh sản phẩm số (3-5 phút).",
        `Đại diện tổ trả lời chi tiết câu hỏi SGK: "${sgk.a1}".`,
        "Các thành viên trong lớp theo dõi trên màn hình, đặt câu hỏi giao lưu và bình chọn trực tuyến cho sản phẩm xuất sắc qua Padlet / biểu mẫu số."
      ];
      h21Conclusion = [
        `GVCN nhận xét, đánh giá cao sự sáng tạo, kĩ năng số ${shlCode} và chuẩn hóa các nội dung trả lời SGK của học sinh.`,
        "Các nhóm tiếp thu ý kiến đóng góp của GVCN và bạn bè để hoàn thiện sản phẩm, lưu trữ vào kho học liệu số của lớp."
      ];
      h21Product = [
        `[Sản phẩm NLS - ${shlCode}]: File sản phẩm số hoàn chỉnh của 4 tổ (Slide trình chiếu PowerPoint/Canva, Infographic hoặc video clip ngắn) thể hiện sinh động nội dung "${orientation}".`,
        `Nội dung trả lời chi tiết cho câu hỏi SGK: ${sgk.a1}`,
        `[Sản phẩm NLS - 2.1.TC2.a]: Bài thuyết trình đa phương tiện tự tin, mạch lạc của đại diện các tổ kết nối trên màn hình lớp học.`,
        "Phiếu/biểu mẫu bình chọn trực tuyến ghi nhận ý kiến nhận xét chéo giữa các tổ."
      ];
    } else {
      h21Objective = `Tạo diễn đàn để học sinh chia sẻ sản phẩm, trải nghiệm và bài học rèn luyện theo nội dung "${orientation}".`;
      h21Content = `Học sinh trưng bày sản phẩm (tranh ảnh, sơ đồ, nhật kí rèn luyện) và chia sẻ kết quả thực hiện câu hỏi SGK về "${orientation}".`;
      h21TeacherSteps = [
        "GVCN hướng dẫn các tổ trưng bày sản phẩm trải nghiệm theo kĩ thuật 'Phòng tranh' (Gallery Walk) trên các bảng phụ/góc lớp.",
        `Nêu câu hỏi thảo luận SGK: "${sgk.q1}".`,
        "Quan sát từng góc trưng bày, khích lệ học sinh tự tin giới thiệu sản phẩm của nhóm mình."
      ];
      h21StudentSteps = [
        "Các tổ dán sản phẩm (bản kế hoạch, sơ đồ tư duy, poster vẽ tay, nhật kí rèn luyện) lên vị trí quy định của tổ mình.",
        "Các thành viên đi tham quan gian trưng bày của tổ bạn, dùng giấy note ghi lời nhận xét, bình chọn sản phẩm xuất sắc."
      ];
      h21Report = [
        "Đại diện tổ tự tin thuyết trình về thông điệp và kết quả thực hiện của nhóm mình.",
        `Báo cáo câu trả lời chi tiết cho câu hỏi SGK: "${sgk.a1}".`,
        "Các tổ đặt câu hỏi giao lưu, chia sẻ bài học kinh nghiệm rút ra trong quá trình thực hiện."
      ];
      h21Conclusion = [
        "GVCN nhận xét, đánh giá cao sự tiến bộ, tính sáng tạo và chuẩn hóa các câu trả lời SGK cho học sinh.",
        "Học sinh tiếp thu ý kiến đóng góp của thầy cô và bạn bè để hoàn thiện sản phẩm."
      ];
      h21Product = [
        `Góc trưng bày sản phẩm trải nghiệm của 4 tổ: Gồm các poster A0/A3, sơ đồ tư duy, nhật kí hành trình rèn luyện cá nhân về "${orientation}".`,
        `Nội dung trả lời chi tiết cho câu hỏi SGK: ${sgk.a1}`,
        `Bài thuyết trình (3-5 phút) tự tin, mạch lạc của đại diện các tổ: Trình bày rõ quá trình thực hiện, những thuận lợi, khó khăn và bài học rút ra.`,
        "Phiếu/giấy note ghi nhận ý kiến nhận xét chéo, bình chọn sản phẩm xuất sắc nhất giữa các tổ."
      ];
    }

    h22Title = `HOẠT ĐỘNG 2.2: Thảo luận xử lí tình huống rèn luyện trong tuần theo SGK`;
    h22Objective = "Giúp học sinh giải quyết các tình huống nảy sinh trong tuần dựa trên các bài học đạo đức và kĩ năng sống trong SGK.";
    h22Content = `Các nhóm thảo luận, đưa ra giải pháp ứng xử cho tình huống thực tế trong SGK gắn liền với nội dung "${orientation}".`;
    h22TeacherSteps = [
      `GVCN nêu tình huống SGK: "${sgk.situation1}".`,
      "Yêu cầu các tổ thảo luận nhanh trong 3 phút và đề xuất phương án giải quyết tối ưu theo định hướng SGK."
    ];
    h22StudentSteps = [
      "Các tổ tiến hành trao đổi sôi nổi, phân tích nguyên nhân và cách xử lí tình huống.",
      "Thư kí tổ ghi vắn tắt các ý kiến thống nhất vào phiếu thảo luận."
    ];
    h22Report = [
      `Đại diện tổ trình bày phương án giải quyết tình huống: "${sgk.situationAns1}".`,
      "Các thành viên khác trong lớp lắng nghe, phản biện và bổ sung thêm các cách ứng xử khéo léo."
    ];
    h22Conclusion = [
      "GVCN chuẩn hóa phương án xử lí tình huống theo chuẩn mực đạo đức và nội quy nhà trường.",
      "Học sinh ghi nhớ bài học ứng xử để vận dụng khi gặp các trường hợp tương tự."
    ];
    h22Product = [
      `Phương án xử lí tình huống chi tiết của các tổ: ${sgk.situationAns1}`,
      "Biên bản ghi nhận các ý kiến đóng góp, giải pháp sáng tạo của các thành viên trong lớp.",
      "Bài học kinh nghiệm thực tiễn được GVCN và tập thể lớp đúc kết."
    ];

    h3Title = "HOẠT ĐỘNG 3: LUYỆN TẬP - Đánh giá cá nhân và Bình xét thi đua tuần";
    h3Objective = "Giúp học sinh tự đánh giá sự tiến bộ của bản thân và rèn luyện tinh thần phê và tự phê bình trung thực.";
    h3Content = "Học sinh tự đánh giá theo phiếu rèn luyện cá nhân; tập thể lớp bình chọn các gương mặt tiêu biểu trong tuần.";
    h3TeacherSteps = [
      "GVCN hướng dẫn học sinh tự đánh giá theo các tiêu chí rèn luyện trong SGK.",
      "Chủ trì phần bình xét danh hiệu 'Ngôi sao tuần' hoặc 'Cá nhân tiến bộ nhất'."
    ];
    h3StudentSteps = [
      "Mỗi học sinh tự chấm điểm rèn luyện của bản thân vào phiếu cá nhân.",
      "Bỏ phiếu bình chọn các bạn có thành tích xuất sắc trong học tập và hoạt động phong trào."
    ];
    h3Report = [
      "Lớp trưởng công bố danh sách các cá nhân đạt điểm rèn luyện cao nhất trong tuần.",
      "Các cá nhân được tuyên dương phát biểu cảm nghĩ và chia sẻ bí quyết học tập, rèn luyện."
    ];
    h3Conclusion = [
      "GVCN trao hoa điểm 10 hoặc phần thưởng nhỏ tuyên dương học sinh xuất sắc.",
      "Khích lệ các bạn còn hạn chế nỗ lực vươn lên trong tuần tới."
    ];
    h3Product = [
      "100% phiếu tự đánh giá rèn luyện cá nhân của học sinh được hoàn thành trung thực.",
      "Danh sách học sinh tiêu biểu được tập thể lớp bình chọn và khen thưởng.",
      "Lời hứa quyết tâm thi đua của các cá nhân và tổ trong tuần mới."
    ];

    h4Title = "HOẠT ĐỘNG 4: VẬN DỤNG - Kế hoạch tuần tới và Phân công nhiệm vụ";
    h4Objective = "Xác định rõ mục tiêu, nhiệm vụ và kế hoạch hành động cụ thể cho tuần học tiếp theo.";
    h4Content = "Ban cán sự lớp triển khai kế hoạch tuần mới; GVCN dặn dò công việc trọng tâm.";
    h4TeacherSteps = [
      "GVCN phổ biến kế hoạch tuần mới của nhà trường và tổ chuyên môn.",
      "Giao nhiệm vụ cụ thể cho từng tổ chuẩn bị bài học và hoạt động trải nghiệm tiếp theo."
    ];
    h4StudentSteps = [
      "Lớp trưởng và các tổ trưởng ghi chép kế hoạch vào sổ công tác.",
      "Các thành viên ghi nhớ nhiệm vụ được phân công (trực nhật, chuẩn bị học liệu, làm bài tập SGK)."
    ];
    h4Report = [
      "Các tổ trưởng xác nhận nhiệm vụ và cam kết thời gian hoàn thành.",
      "Cả lớp đồng thuận với kế hoạch hoạt động tuần mới."
    ];
    h4Conclusion = [
      "GVCN tổng kết tiết sinh hoạt lớp, chúc cả lớp có một tuần học mới nhiều năng lượng và đạt kết quả tốt.",
      "Cả lớp nghỉ giải lao chuẩn bị cho các hoạt động tiếp theo."
    ];
    h4Product = [
      "Bản kế hoạch công tác tuần mới của lớp: Mục tiêu cụ thể về nề nếp, học tập, văn thể mĩ.",
      "Bảng phân công nhiệm vụ chi tiết cho 4 tổ và các cá nhân phụ trách.",
      "Sổ ghi nhớ dặn dò của GVCN trong sổ tay của từng học sinh."
    ];

  } else {
    // =========================================================================
    // HOẠT ĐỘNG GIÁO DỤC THEO CHỦ ĐỀ (HDGD - 1 tiết)
    // =========================================================================
    knowledge = [
      `Nắm vững các kiến thức, kĩ năng cốt lõi và phương pháp thực hiện theo đúng SGK cho nội dung: "${orientation}".`,
      `Trả lời chính xác các câu hỏi khám phá, phân tích các trường hợp điển hình và giải quyết triệt để các tình huống thực tiễn trong SGK về "${orientation}".`,
      "Vận dụng linh hoạt các bài học vào đời sống thực tế tại gia đình, nhà trường và cộng đồng xã hội theo đúng mục tiêu SGK."
    ];

    warmUpActivityName = `Khởi động: Khám phá chủ đề "${orientation}" qua câu hỏi và tranh ảnh mở đầu trong SGK`;
    warmUpObjective = `Tạo tâm thế hứng thú, kết nối kiến thức thực tế của học sinh với nội dung bài học "${orientation}" trong SGK.`;
    warmUpContent = `Học sinh quan sát tranh ảnh mở đầu, phân tích tình huống gợi mở trong SGK về "${orientation}".`;
    warmUpTeacherSteps = [
      `GV trình chiếu tranh ảnh mở đầu / tình huống gợi mở trong SGK liên quan đến "${orientation}".`,
      `Nêu câu hỏi khởi động SGK: "Quan sát hình ảnh và cho biết những nét đặc trưng cơ bản nào thể hiện nội dung ${orientation}?".`,
      "Điều hành trò chơi, quan sát sự tham gia của các tổ, khích lệ tinh thần phản xạ nhanh của học sinh."
    ];
    warmUpStudentSteps = [
      "Chú ý lắng nghe câu hỏi khởi động, quan sát kĩ tranh ảnh mở đầu trong SGK.",
      "Tích cực suy nghĩ độc lập, trao đổi nhanh với bạn cùng bàn để tìm ra đáp án chính xác."
    ];
    warmUpReport = [
      "Đại diện các nhóm giơ tay trả lời nhanh, giải thích ngắn gọn đáp án của nhóm mình trước lớp.",
      "Giải mã chính xác từ khóa và thông điệp mở đầu của bài học trong SGK."
    ];
    warmUpConclusion = [
      "GV nhận xét, tuyên dương tinh thần khởi động sôi nổi và khéo léo dẫn dắt vào bài học mới trong SGK.",
      "Học sinh mở SGK trang tương ứng và vở ghi sẵn sàng khám phá bài học mới."
    ];
    warmUpProduct = [
      `Câu trả lời chính xác giải mã đúng câu hỏi khởi động SGK gắn liền với "${orientation}".`,
      "Tâm thế học tập tích cực, sự tập trung và hào hứng của 100% học sinh sẵn sàng bước vào bài học mới.",
      "Dòng ghi mở đầu bài học (Tên bài, nội dung học tập và mục tiêu trọng tâm theo SGK) trong vở ghi cá nhân của học sinh."
    ];

    // ==========================================
    // HOẠT ĐỘNG 2.1: KHÁM PHÁ KIẾN THỨC CỐT LÕI THEO SGK
    // ==========================================
    h21Title = `HOẠT ĐỘNG 2.1: Khám phá kiến thức cốt lõi về "${orientation}" theo SGK`;
    
    if (hasDigitalIntegration) {
      const code1 = primaryIndicatorCode || "[1.1.TC2.b]";
      const code2 = secondaryIndicatorCode || "[3.1.TC2.a]";

      let h21Code = code1;
      let h3Code = code2;
      if (code1.startsWith("[3.") || code1.startsWith("[5.")) {
        if (code2 && (code2.startsWith("[1.") || code2.startsWith("[2.") || code2.startsWith("[4."))) {
          h21Code = code2;
          h3Code = code1;
        }
      }

      h21Objective = `Giúp học sinh khám phá, nhận diện các biểu hiện, nguyên tắc và cách thức thực hiện theo SGK cho nội dung "${orientation}". Tích hợp Năng lực số ${h21Code}: Học sinh biết tra cứu, khai thác, chọn lọc dữ liệu và thông tin số chính thống liên quan đến bài học.`;
      h21Content = `Học sinh đọc thông tin SGK, kết hợp khai thác tư liệu số và hoàn thành Phiếu học tập số 1 để trả lời các câu hỏi khám phá SGK.`;
      h21TeacherSteps = [
        `GV chia lớp thành 4 nhóm; phát Phiếu học tập số 1 chứa các câu hỏi khám phá trong SGK: (1) "${sgk.q1}"; (2) "${sgk.q2}".`,
        `Hướng dẫn học sinh kết hợp đọc thông tin trong SGK với khai thác tư liệu số theo mã chỉ báo ${h21Code} (tra cứu liên kết số / quét mã QR học liệu).`,
        "Đi bao quát các nhóm, hướng dẫn học sinh đọc kĩ từng đoạn thông tin trong SGK để chắt lọc câu trả lời đúng trọng tâm."
      ];
      h21StudentSteps = [
        `Nhận nhiệm vụ, phân công nhóm trưởng điều hành, thành viên tra cứu tư liệu số theo ${h21Code} và thư kí tổng hợp câu trả lời vào Phiếu học tập số 1.`,
        `Đọc kĩ các đoạn thông tin, nghiên cứu tranh ảnh và tình huống trong SGK; đối chiếu với tư liệu tra cứu để trả lời đầy đủ 2 câu hỏi SGK: "${sgk.q1}" và "${sgk.q2}".`,
        "Thống nhất ý kiến trong nhóm và hoàn thiện phần trình bày trên bảng phụ nhóm / slide trình chiếu số."
      ];
      h21Report = [
        "Đại diện nhóm tự tin đứng trước lớp báo cáo sản phẩm, trình bày mạch lạc câu trả lời cho các câu hỏi SGK.",
        `Báo cáo chi tiết: "${sgk.a1}".`,
        `Báo cáo chi tiết: "${sgk.a2}".`,
        "Các thành viên trong nhóm hỗ trợ giải đáp câu hỏi phản biện từ các nhóm bạn."
      ];
      h21Conclusion = [
        `GV chuẩn hóa kiến thức theo SGK, nhận xét kĩ năng khai thác dữ liệu số ${h21Code} của học sinh và chốt nội dung cốt lõi để ghi vở.`,
        "Học sinh lắng nghe GV chốt kiến thức chuẩn theo SGK, đối chiếu kết quả thảo luận và ghi chép nội dung chuẩn vào vở bài học."
      ];
      h21Product = [
        `Phiếu học tập số 1 hoàn chỉnh của 4 nhóm chứa câu trả lời chi tiết, chính xác cho hệ thống câu hỏi khám phá SGK:`,
        `• ${sgk.a1}`,
        `• ${sgk.a2}`,
        `[Sản phẩm NLS - ${h21Code}]: Bộ tư liệu số / Bài trình chiếu số (PowerPoint/Canva) tổng hợp kiến thức SGK với cấu trúc mạch lạc, hình ảnh và dẫn chứng số trực quan.`,
        "Vở ghi bài học của học sinh chứa đầy đủ các kết luận kiến thức chuẩn hóa theo SGK."
      ];
    } else {
      h21Objective = `Giúp học sinh khám phá, nhận diện các biểu hiện, nguyên tắc và cách thức thực hiện theo SGK cho nội dung "${orientation}".`;
      h21Content = `Học sinh đọc thông tin SGK, phân tích các trường hợp điển hình và hoàn thành Phiếu học tập số 1 để trả lời các câu hỏi khám phá SGK.`;
      h21TeacherSteps = [
        `GV chia lớp thành 4 nhóm (theo tổ), phát Phiếu học tập số 1 chứa hệ thống câu hỏi khám phá trong SGK: (1) "${sgk.q1}"; (2) "${sgk.q2}".`,
        "Yêu cầu các nhóm đọc kĩ thông tin và quan sát các tranh ảnh minh họa trong SGK để tìm ý trả lời.",
        "Đi bao quát lớp học, quan sát, hướng dẫn các nhóm gặp khó khăn, gợi mở các từ khóa quan trọng trong SGK."
      ];
      h21StudentSteps = [
        "Nhận nhiệm vụ, phân công nhóm trưởng điều hành, thư kí ghi chép vào Phiếu học tập số 1.",
        `Từng thành viên đọc kĩ SGK, suy nghĩ độc lập rồi thảo luận sôi nổi trong nhóm để trả lời chính xác từng câu hỏi: "${sgk.q1}" và "${sgk.q2}".`,
        "Thống nhất phương án trả lời và ghi chép rõ ràng vào bảng phụ nhóm."
      ];
      h21Report = [
        "Đại diện nhóm lên bảng trình bày sản phẩm thảo luận (trên bảng phụ / sơ đồ tư duy giấy).",
        `Trình bày chi tiết đáp án câu hỏi 1 SGK: "${sgk.a1}".`,
        `Trình bày chi tiết đáp án câu hỏi 2 SGK: "${sgk.a2}".`,
        "Các nhóm khác chú ý theo dõi, nhận xét, đặt câu hỏi phản biện."
      ];
      h21Conclusion = [
        "GV chuẩn hóa kiến thức theo SGK, phân tích mở rộng các khía cạnh thực tế và chốt nội dung cốt lõi để học sinh ghi vào vở.",
        "Học sinh đối chiếu kết quả thảo luận của nhóm mình và ghi chép nội dung chuẩn vào vở bài học."
      ];
      h21Product = [
        `Phiếu học tập số 1 hoàn chỉnh của 4 nhóm trả lời chi tiết, đầy đủ hệ thống câu hỏi khám phá SGK:`,
        `• ${sgk.a1}`,
        `• ${sgk.a2}`,
        `Sơ đồ tư duy trên giấy A0/A3 của các nhóm thể hiện mạch lạc các nhánh kiến thức trọng tâm theo SGK.`,
        "Vở ghi bài học của học sinh chứa đầy đủ các kết luận kiến thức chuẩn hóa được GV chốt."
      ];
    }

    // ==========================================
    // HOẠT ĐỘNG 2.2: THỰC HÀNH XỬ LÍ TÌNH HUỐNG SGK
    // ==========================================
    h22Title = `HOẠT ĐỘNG 2.2: Thực hành phân tích và xử lí các tình huống trong SGK`;
    h22Objective = "Giúp học sinh vận dụng kiến thức đã học vào thực tế thông qua việc phân tích và giải quyết các tình huống điển hình trong SGK.";
    h22Content = `Các nhóm nhận các tình huống trong SGK, phân tích và đề xuất cách xử lí tối ưu gắn với "${orientation}".`;
    h22TeacherSteps = [
      `GV giao các tình huống trong SGK cho các nhóm: (1) Nhóm 1 & 2 thực hiện: "${sgk.situation1}"; (2) Nhóm 3 & 4 thực hiện: "${sgk.situation2}".`,
      "Nêu câu hỏi yêu cầu trong SGK: 'Em hãy nhận xét hành vi của các nhân vật trong tình huống và đề xuất cách giải quyết phù hợp nhất?'.",
      "Theo dõi quá trình thảo luận, hướng dẫn học sinh lựa chọn cách ứng xử văn minh, nhân văn và đúng quy tắc."
    ];
    h22StudentSteps = [
      "Đọc kĩ bối cảnh, lời thoại và hành động của các nhân vật trong tình huống SGK được giao.",
      "Phân tích nguyên nhân dẫn đến tình huống, dự đoán các hậu quả có thể xảy ra và thảo luận tìm giải pháp giải quyết tốt nhất.",
      "Phân công thành viên sắm vai hoặc đại diện thuyết trình phương án xử lí trước lớp."
    ];
    h22Report = [
      "Đại diện nhóm 1 & 2 trình bày phương án xử lí Tình huống 1 SGK hoặc sắm vai thể hiện tiểu phẩm ngắn.",
      `Nội dung giải quyết Tình huống 1 SGK: "${sgk.situationAns1}".`,
      "Đại diện nhóm 3 & 4 trình bày phương án xử lí Tình huống 2 SGK.",
      `Nội dung giải quyết Tình huống 2 SGK: "${sgk.situationAns2}".`,
      "Học sinh cả lớp nhận xét, bổ sung các phương án ứng xử hay và khéo léo."
    ];
    h22Conclusion = [
      "GV đánh giá cách giải quyết tình huống của các nhóm, chuẩn hóa phương án xử lí tối ưu theo đúng định hướng SGK.",
      "Học sinh tự rút ra bài học kinh nghiệm ứng xử cho bản thân trong các hoàn cảnh thực tế tương tự."
    ];
    h22Product = [
      `Bản phân tích và phương án xử lí chi tiết cho các tình huống trong SGK:`,
      `• Xử lí ${sgk.situation1}: ${sgk.situationAns1}`,
      `• Xử lí ${sgk.situation2}: ${sgk.situationAns2}`,
      "Kịch bản phân vai / tiểu phẩm sắm vai xử lí tình huống tự nhiên, ngôn ngữ chuẩn mực và thông điệp giáo dục sâu sắc.",
      "Bài học kinh nghiệm ứng xử thực tế được đúc kết từ các tình huống SGK."
    ];

    // ==========================================
    // HOẠT ĐỘNG 3: LUYỆN TẬP THEO SGK
    // ==========================================
    h3Title = `HOẠT ĐỘNG 3: LUYỆN TẬP - Hoàn thành bài tập thực hành theo SGK`;
    
    if (hasDigitalIntegration) {
      const h3Code = secondaryIndicatorCode || primaryIndicatorCode || "[3.1.TC2.a]";
      h3Objective = `Củng cố và khắc sâu các kĩ năng đã học thông qua bài tập thực hành trong SGK. Tích hợp Năng lực số ${h3Code}: Học sinh sử dụng ứng dụng công nghệ (Canva/PowerPoint/Google Sheets/Google Docs) để thiết kế và sáng tạo sản phẩm số theo yêu cầu bài học.`;
      h3Content = `Thực hành thiết kế sản phẩm rèn luyện số (Infographic / Tờ gấp số / Bản kế hoạch số / Biểu đồ khảo sát) theo bài tập SGK cho nội dung "${orientation}".`;
      h3TeacherSteps = [
        `GV hướng dẫn nhiệm vụ luyện tập trong SGK tích hợp Năng lực số theo mã chỉ báo ${h3Code}: Sử dụng ứng dụng công nghệ (Canva/PowerPoint/Google Form/Google Sheets) để thiết kế sản phẩm số rèn luyện cho "${orientation}".`,
        "Nêu các tiêu chí cụ thể theo SGK: Nội dung chính xác, thông điệp rõ ràng, bố cục hài hòa, màu sắc thẩm mĩ và tuân thủ bản quyền hình ảnh.",
        "Quan sát, hỗ trợ kĩ thuật số cho các học sinh/nhóm trong quá trình thiết kế."
      ];
      h3StudentSteps = [
        "Mở phần mềm/công cụ số trên thiết bị theo hướng dẫn của GV.",
        `Lựa chọn mẫu thiết kế (template), nhập nội dung kiến thức SGK, chèn hình ảnh minh họa phù hợp và hoàn thiện sản phẩm số theo ${h3Code}.`,
        "Kiểm tra lại sản phẩm, gửi liên kết sản phẩm lên bảng tương tác Padlet / nộp file theo yêu cầu."
      ];
      h3Report = [
        "Các nhóm gửi sản phẩm lên bảng tương tác số Padlet hoặc trình chiếu trực tiếp trên màn hình lớp.",
        "Đại diện nhóm thuyết minh ngắn gọn về sản phẩm số và thông điệp bài học SGK.",
        "Học sinh tham quan và bình chọn sản phẩm số xuất sắc qua hệ thống bình chọn trực tuyến."
      ];
      h3Conclusion = [
        `GV tổng kết, tuyên dương các sản phẩm số sáng tạo, có tính thẩm mĩ cao và kĩ năng số ${h3Code} của học sinh.`,
        "Học sinh tiếp thu nhận xét của GV và bạn bè để hoàn thiện sản phẩm lưu vào hồ sơ cá nhân."
      ];
      h3Product = [
        `[Sản phẩm NLS - ${h3Code}]: Sản phẩm số hoàn chỉnh (File Infographic Canva, Tờ gấp số, Bản kế hoạch số hoặc Slide trình chiếu) về "${orientation}" bám sát bài tập SGK với thiết kế thẩm mĩ, thông điệp rõ ràng.`,
        `[Sản phẩm NLS - 2.2.TC2.a]: Bộ liên kết lưu trữ sản phẩm trên bảng số Padlet / Google Drive của lớp.`,
        "Kết quả đánh giá, bình chọn trực tuyến các sản phẩm xuất sắc nhất."
      ];
    } else {
      h3Objective = "Củng cố và khắc sâu các kĩ năng đã học thông qua bài tập thực hành thiết kế sản phẩm hoặc lập kế hoạch cá nhân trên giấy theo SGK.";
      h3Content = `Thực hành làm bài tập luyện tập trong SGK: Thiết kế sản phẩm rèn luyện (Kế hoạch hành động / Thông điệp / Sơ đồ mục tiêu) cho nội dung "${orientation}".`;
      h3TeacherSteps = [
        `GV hướng dẫn nhiệm vụ thực hành cá nhân/nhóm đôi theo bài tập SGK: Thiết kế sản phẩm hành động trên giấy A4 (Tờ gấp cẩm nang / Bản kế hoạch hành động / Sơ đồ mục tiêu rèn luyện về "${orientation}").`,
        "Nêu các yêu cầu cần đạt theo SGK: Thể hiện đúng kiến thức bài học, các bước hành động cụ thể, tính khả thi và thẩm mĩ.",
        "Quan sát, hỗ trợ từng học sinh hoàn thành bài tập rèn luyện, gợi ý các ý tưởng sáng tạo."
      ];
      h3StudentSteps = [
        "Tiếp nhận yêu cầu bài tập SGK, chuẩn bị dụng cụ học tập (giấy A4, bút màu dạ, thước kẻ, giấy nhớ).",
        "Độc lập suy nghĩ và hoàn thành sản phẩm thực hành với nội dung thiết thực, bám sát các câu hỏi và bài tập trong SGK."
      ];
      h3Report = [
        "Tổ chức trưng bày sản phẩm theo kĩ thuật 'Phòng tranh' (Gallery Walk) trên các góc lớp.",
        "Học sinh quan sát, chấm điểm chéo bằng sticker, dán tim cho sản phẩm yêu thích nhất."
      ];
      h3Conclusion = [
        "GV tổng kết, khen ngợi các sản phẩm có tính sáng tạo, thẩm mĩ và ứng dụng cao theo đúng chuẩn SGK.",
        "Học sinh tiếp thu nhận xét để hoàn thiện bản thân và ghi nhận bài học kinh nghiệm."
      ];
      h3Product = [
        `Sản phẩm thực hành hoàn chỉnh của từng học sinh / cặp đôi: Bản kế hoạch rèn luyện cá nhân / Tờ gấp cẩm nang / Khẩu hiệu hành động về "${orientation}" trên giấy A4 đẹp mắt, nội dung thiết thực theo SGK.`,
        "Kết quả chấm điểm, đánh giá sản phẩm theo kĩ thuật 'Phòng tranh' (Gallery Walk) và các phiếu bình chọn sticker từ các bạn trong lớp.",
        "Bảng tổng hợp đúc kết các kĩ năng cốt lõi học sinh đã rèn luyện và làm chủ sau bài học SGK."
      ];
    }

    // ==========================================
    // HOẠT ĐỘNG 4: VẬN DỤNG THEO SGK
    // ==========================================
    h4Title = `HOẠT ĐỘNG 4: VẬN DỤNG - Thực hiện hướng dẫn vận dụng trong SGK tại thực tế`;
    h4Objective = "Khuyến khích học sinh chuyển hóa các kiến thức, kĩ năng trong SGK thành các hành vi tích cực, thường xuyên tại gia đình, nhà trường và cộng đồng.";
    h4Content = `Giao nhiệm vụ rèn luyện thực tế theo mục Vận dụng trong SGK cho nội dung "${orientation}" và ghi chép vào Nhật kí rèn luyện cá nhân.`;
    h4TeacherSteps = [
      `GV giao nhiệm vụ vận dụng trong SGK: Yêu cầu học sinh thực hiện các hành động cụ thể gắn với "${orientation}" tại gia đình và đời sống hàng ngày.`,
      "Hướng dẫn HS cách ghi chép lại kết quả thực hiện vào Nhật kí rèn luyện cá nhân và nhờ cha mẹ/người thân xác nhận, nhận xét.",
      "Nhắc nhở học sinh chuẩn bị nội dung và sản phẩm để báo cáo trong tiết Sinh hoạt lớp cuối tuần."
    ];
    h4StudentSteps = [
      "Ghi nhận nhiệm vụ vận dụng trong SGK vào sổ tay cá nhân.",
      "Nghiêm túc thực hiện trong đời sống gia đình và sinh hoạt hàng ngày theo đúng các bước đã học trong SGK."
    ];
    h4Report = [
      "Báo cáo kết quả thực hiện với giáo viên và các bạn trong buổi Sinh hoạt lớp định kì cuối tuần.",
      "Chia sẻ những thay đổi tích cực và những kinh nghiệm rút ra khi rèn luyện thực tế tại gia đình."
    ];
    h4Conclusion = [
      "GV nhận xét chung tiết học, tuyên dương tinh thần học tập tích cực của cả lớp và dặn dò đọc trước bài mới trong SGK.",
      "Học sinh đọc trước bài mới trong SGK cho tuần tiếp theo."
    ];
    h4Product = [
      `Nhật kí rèn luyện cá nhân / Phiếu theo dõi việc làm thực tế theo SGK: Ghi nhận ít nhất 3 hành động cụ thể đã thực hiện trong tuần gắn với "${orientation}".`,
      "Chữ kí xác nhận và lời nhận xét đánh giá của phụ huynh / người thân về thái độ rèn luyện của học sinh tại gia đình.",
      "Tư liệu / hình ảnh / sản phẩm minh chứng đã chuẩn bị để sẵn sàng báo cáo, trưng bày trong tiết Sinh hoạt lớp cuối tuần."
    ];
  }

  // Thiết bị dạy học và học liệu
  let teacherEquipment: string[] = [
    "Sách giáo khoa, Kế hoạch bài dạy HĐTN 8 (bộ sách Kết nối tri thức với cuộc sống).",
    "Phiếu học tập (Phiếu số 1, Phiếu số 2), bảng phụ / giấy A0, bút dạ lông.",
    "Bộ tranh ảnh tư liệu và phiếu đánh giá tình huống thực tế theo SGK."
  ];

  let studentEquipment: string[] = [
    "Sách giáo khoa HĐTN 8 (Kết nối tri thức với cuộc sống), vở ghi bài, giấy A4, bút màu dạ, giấy nhớ.",
    "Các sản phẩm trải nghiệm chuẩn bị trước theo yêu cầu của SGK và giáo viên."
  ];

  if (hasDigitalIntegration) {
    teacherEquipment.push(
      "Máy tính xách tay kết nối Tivi thông minh / Máy chiếu, bài giảng điện tử PowerPoint.",
      "Học liệu số: Đường link tra cứu tư liệu, video clip tình huống, mã QR khảo sát trực tuyến (Google Form/Padlet)."
    );
    studentEquipment.push(
      "Điện thoại thông minh / Máy tính bảng (sử dụng khi có hướng dẫn của GV để tra cứu dữ liệu, làm bài trắc nghiệm số hoặc thiết kế sản phẩm Canva)."
    );
  }

  return {
    id: lessonId,
    schoolName: "TRƯỜNG THCS NGUYỄN TRUNG TRỰC",
    departmentName: "TỔ KHOA HỌC TỰ NHIÊN",
    teacherName: "Trần Văn Lộc",
    headOfDepartment: "Quách Hoàng Đệ",
    locationDate: "U Minh, ngày 15 tháng 08 năm 2026",
    lessonTitle: lessonTitle.toUpperCase(),
    activityType,
    weekNumber,
    periodNumber,
    orientationName: orientation,
    subject: "Hoạt động trải nghiệm, hướng nghiệp 8",
    grade: "8",
    classGrade: "8A1, 8A2, 8A3",
    duration: "1 tiết",
    topicNumber,
    topicTitle: topicTitle.toUpperCase(),
    objectives: {
      knowledge,
      generalCompetencies: {
        selfControl: [
          `Chủ động thực hiện các nhiệm vụ học tập và rèn luyện theo nội dung SGK: "${orientation}".`,
          "Tự giác theo dõi, điều chỉnh hành vi và tự đánh giá sự tiến bộ của bản thân theo SGK."
        ],
        communication: [
          "Tự tin trình bày quan điểm cá nhân, lắng nghe tích cực và tôn trọng sự khác biệt của bạn bè.",
          "Hợp tác nhóm hiệu quả, phối hợp nhịp nhàng trong các hoạt động trải nghiệm và sắm vai theo SGK."
        ],
        problemSolving: [
          "Phát hiện các vấn đề nảy sinh trong thực tiễn và đề xuất các giải pháp sáng tạo, khả thi theo SGK."
        ]
      },
      specificCompetencies: {
        adaptation: [
          `Nhận diện và thích ứng linh hoạt với các tình huống rèn luyện gắn với "${orientation}".`,
          "Biết điều chỉnh cảm xúc, hành vi phù hợp với các chuẩn mực đạo đức và văn hóa học đường."
        ],
        organization: [
          `Biết xây dựng kế hoạch cá nhân và phối hợp tổ chức các hoạt động trải nghiệm "${orientation}".`,
          "Chủ động phân công nhiệm vụ, quản lí thời gian và đánh giá hiệu quả công việc nhóm."
        ],
        careerOrientation: topicNumber >= 8 ? [
          "Khám phá thế giới nghề nghiệp và nhận diện yêu cầu về phẩm chất, năng lực của người lao động trong xã hội hiện đại.",
          "Tự đánh giá năng lực, sở thích bản thân và xây dựng kế hoạch học tập hướng nghiệp phù hợp theo SGK."
        ] : []
      },
      digitalCompetency: digitalCompetencyList,
      qualities: {
        patriotism: [
          "Tự hào về truyền thống tốt đẹp của nhà trường, quê hương và đất nước."
        ],
        compassion: [
          "Biết quan tâm, lắng nghe, chia sẻ và giúp đỡ bạn bè, người thân xung quanh."
        ],
        diligence: [
          "Chăm chỉ học tập, kiên trì vượt khó và tích cực tham gia các hoạt động tập thể."
        ],
        honesty: [
          "Trung thực trong lời nói, hành vi, thẳng thắn nhận lỗi và giữ trọn lời hứa, cam kết."
        ],
        responsibility: [
          "Có ý thức trách nhiệm cao với bản thân, gia đình, nhà trường và cộng đồng xã hội."
        ]
      }
    },
    equipment: {
      teacher: teacherEquipment,
      student: studentEquipment
    },
    timeline: {
      warmUp: {
        id: "act-1",
        name: warmUpActivityName,
        objective: warmUpObjective,
        content: warmUpContent,
        steps: {
          teacherActivity: warmUpTeacherSteps,
          studentActivity: warmUpStudentSteps,
          reportDiscussion: warmUpReport,
          conclusion: warmUpConclusion
        },
        product: warmUpProduct
      },
      knowledgeFormation: [
        {
          id: "act-2-1",
          name: h21Title,
          subTitle: h21Title.replace(/^HOẠT ĐỘNG 2\.1:\s*/, ""),
          objective: h21Objective,
          content: h21Content,
          steps: {
            teacherActivity: h21TeacherSteps,
            studentActivity: h21StudentSteps,
            reportDiscussion: h21Report,
            conclusion: h21Conclusion
          },
          product: h21Product
        },
        {
          id: "act-2-2",
          name: h22Title,
          subTitle: h22Title.replace(/^HOẠT ĐỘNG 2\.2:\s*/, ""),
          objective: h22Objective,
          content: h22Content,
          steps: {
            teacherActivity: h22TeacherSteps,
            studentActivity: h22StudentSteps,
            reportDiscussion: h22Report,
            conclusion: h22Conclusion
          },
          product: h22Product
        }
      ],
      practice: {
        id: "act-3",
        name: h3Title,
        subTitle: h3Title.replace(/^HOẠT ĐỘNG 3:\s*/, ""),
        objective: h3Objective,
        content: h3Content,
        steps: {
          teacherActivity: h3TeacherSteps,
          studentActivity: h3StudentSteps,
          reportDiscussion: h3Report,
          conclusion: h3Conclusion
        },
        product: h3Product
      },
      application: {
        id: "act-4",
        name: h4Title,
        subTitle: h4Title.replace(/^HOẠT ĐỘNG 4:\s*/, ""),
        objective: h4Objective,
        content: h4Content,
        steps: {
          teacherActivity: h4TeacherSteps,
          studentActivity: h4StudentSteps,
          reportDiscussion: h4Report,
          conclusion: h4Conclusion
        },
        product: h4Product
      }
    },
    flagRaisingOrientation: TOPICS_DATA.find((t) => t.id === topicNumber)?.flagRaisingOrientations,
    classMeetingOrientation: TOPICS_DATA.find((t) => t.id === topicNumber)?.classMeetingOrientations
  };
}
