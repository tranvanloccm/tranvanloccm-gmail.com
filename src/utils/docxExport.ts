import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  HeadingLevel,
} from "docx";
import saveAs from "file-saver";
import { LessonPlan, TeachingActivity } from "../types";

export async function exportLessonPlanToDocx(lesson: LessonPlan) {
  const font = "Times New Roman";
  const bodySize = 26; // 13pt
  const headingSize = 28; // 14pt
  const titleSize = 32; // 16pt

  // Helper to create regular paragraph
  const p = (
    text: string,
    isBold = false,
    isItalic = false,
    align = AlignmentType.LEFT,
    textColor?: string
  ) => {
    return new Paragraph({
      alignment: align,
      spacing: { after: 120, line: 276 }, // 1.15 line spacing
      children: [
        new TextRun({
          text,
          font,
          size: bodySize,
          bold: isBold,
          italics: isItalic,
          color: textColor,
        }),
      ],
    });
  };

  // Helper to create objective paragraph with digital highlight
  const pObjective = (objectiveText: string) => {
    if (objectiveText.includes("Tích hợp Năng lực số") || objectiveText.includes(".TC2.")) {
      const parts = objectiveText.split(/(Tích hợp Năng lực số.*)/);
      if (parts.length > 1) {
        return new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 120, line: 276 },
          children: [
            new TextRun({
              text: "a) Mục tiêu: ",
              font,
              size: bodySize,
              bold: true,
            }),
            new TextRun({
              text: parts[0],
              font,
              size: bodySize,
            }),
            new TextRun({
              text: parts[1],
              font,
              size: bodySize,
              color: "1D4ED8",
              bold: true,
            }),
          ],
        });
      }
    }

    return new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 120, line: 276 },
      children: [
        new TextRun({
          text: "a) Mục tiêu: ",
          font,
          size: bodySize,
          bold: true,
        }),
        new TextRun({
          text: objectiveText,
          font,
          size: bodySize,
        }),
      ],
    });
  };

  // Helper to create heading
  const h = (text: string, isBold = true) => {
    return new Paragraph({
      spacing: { before: 180, after: 120 },
      children: [
        new TextRun({
          text,
          font,
          size: headingSize,
          bold: isBold,
        }),
      ],
    });
  };

  // Helper for bullet items
  const bullet = (text: string, prefix = "- ", textColor?: string, isBold = false) => {
    return new Paragraph({
      spacing: { after: 80, line: 260 },
      indent: { left: 360 },
      children: [
        new TextRun({
          text: `${prefix}${text}`,
          font,
          size: bodySize,
          color: textColor,
          bold: isBold,
        }),
      ],
    });
  };

  // Helper to check if a string contains digital competency indicators
  const isDigitalLine = (text: string) => {
    return (
      text.includes("[NLS") ||
      text.includes(".TC2.") ||
      text.includes("[Sản phẩm NLS") ||
      text.includes("Tích hợp NLS") ||
      text.includes("Thao tác số") ||
      text.includes("Xử lí số") ||
      text.includes("Thiết kế số") ||
      text.includes("Chia sẻ số") ||
      text.includes("Báo cáo số") ||
      text.includes("Hoàn thiện số")
    );
  };

  // Create standard 2-column table for 5512 activities with distinct color for digital competency
  const createActivityTable = (act: TeachingActivity) => {
    const headerRow = new TableRow({
      children: [
        new TableCell({
          width: { size: 60, type: WidthType.PERCENTAGE },
          shading: { fill: "F2F2F2" },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Hoạt động của GV và HS",
                  font,
                  size: bodySize,
                  bold: true,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 40, type: WidthType.PERCENTAGE },
          shading: { fill: "F2F2F2" },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Sản phẩm",
                  font,
                  size: bodySize,
                  bold: true,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    const createGvHsStepLines = (title: string, lines: string[]) => {
      return [
        new Paragraph({
          spacing: { before: 100, after: 40 },
          children: [
            new TextRun({
              text: title,
              font,
              size: bodySize,
              bold: true,
            }),
          ],
        }),
        ...lines.map((line) => {
          const digital = isDigitalLine(line);
          return new Paragraph({
            indent: { left: 240 },
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: `- ${line}`,
                font,
                size: bodySize,
                color: digital ? "1D4ED8" : undefined,
                bold: digital,
              }),
            ],
          });
        }),
      ];
    };

    const gvHsParagraphs: Paragraph[] = [
      ...createGvHsStepLines("* Bước 1: Chuyển giao nhiệm vụ:", act.steps.teacherActivity),
      ...createGvHsStepLines("* Bước 2: Thực hiện nhiệm vụ:", act.steps.studentActivity),
      ...createGvHsStepLines("* Bước 3: Báo cáo, thảo luận:", act.steps.reportDiscussion),
      ...createGvHsStepLines("* Bước 4: Kết luận, nhận định:", act.steps.conclusion),
    ];

    const productParagraphs: Paragraph[] = act.product.map((prod) => {
      const digital = isDigitalLine(prod);
      return new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun({
            text: `- ${prod}`,
            font,
            size: bodySize,
            color: digital ? "1D4ED8" : undefined,
            bold: digital,
          }),
        ],
      });
    });

    const contentRow = new TableRow({
      children: [
        new TableCell({
          width: { size: 60, type: WidthType.PERCENTAGE },
          children: gvHsParagraphs,
        }),
        new TableCell({
          width: { size: 40, type: WidthType.PERCENTAGE },
          children: productParagraphs,
        }),
      ],
    });

    return new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [headerRow, contentRow],
    });
  };

  // Build full document sections
  const docElements: any[] = [];

  // 1. Header Information
  docElements.push(
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: lesson.schoolName.toUpperCase(),
          font,
          size: bodySize,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: lesson.departmentName.toUpperCase(),
          font,
          size: bodySize,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 240 },
      children: [
        new TextRun({
          text: `Giáo viên: ${lesson.teacherName}`,
          font,
          size: bodySize,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 180, after: 60 },
      children: [
        new TextRun({
          text: lesson.topicTitle.toUpperCase(),
          font,
          size: bodySize + 2,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: (
            lesson.activityType === "SHDC"
              ? "NỘI DUNG 1: SINH HOẠT DƯỚI CỜ"
              : lesson.activityType === "HDGD"
              ? "NỘI DUNG 2: HOẠT ĐỘNG GIÁO DỤC THEO CHỦ ĐỀ"
              : "NỘI DUNG 3: SINH HOẠT LỚP"
          ),
          font,
          size: bodySize,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: `KẾ HOẠCH BÀI DẠY: ${lesson.lessonTitle.toUpperCase()}`,
          font,
          size: titleSize,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: `Môn học/Hoạt động giáo dục: ${lesson.subject}; Lớp: ${lesson.classGrade}`,
          font,
          size: bodySize,
          italics: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: `Thời gian thực hiện: ${lesson.duration} (Tiết ${lesson.periodNumber || 1}, Tuần ${lesson.weekNumber || 1})`,
          font,
          size: bodySize,
          italics: true,
        }),
      ],
    })
  );

  // 2. Section I: Mục tiêu
  docElements.push(
    h("I. Mục tiêu"),
    p("1. Kiến thức:", true),
    ...lesson.objectives.knowledge.map((k) => bullet(k, "+ ")),
    p("2. Năng lực:", true),
    p("2.1 Năng lực chung:", true),
    bullet(
      `Tự chủ và tự học: ${lesson.objectives.generalCompetencies.selfControl.join(
        "; "
      )}`,
      "+ "
    ),
    bullet(
      `Giao tiếp và hợp tác: ${lesson.objectives.generalCompetencies.communication.join(
        "; "
      )}`,
      "+ "
    ),
    bullet(
      `Giải quyết vấn đề và sáng tạo: ${lesson.objectives.generalCompetencies.problemSolving.join(
        "; "
      )}`,
      "+ "
    ),
    p("2.2 Năng lực đặc thù (Năng lực riêng):", true),
    ...(lesson.objectives.specificCompetencies.adaptation.length
      ? [
          bullet(
            `Năng lực thích ứng với cuộc sống: ${lesson.objectives.specificCompetencies.adaptation.join(
              "; "
            )}`,
            "+ "
          ),
        ]
      : []),
    ...(lesson.objectives.specificCompetencies.organization.length
      ? [
          bullet(
            `Năng lực thiết kế và tổ chức hoạt động: ${lesson.objectives.specificCompetencies.organization.join(
              "; "
            )}`,
            "+ "
          ),
        ]
      : []),
    ...(lesson.objectives.specificCompetencies.careerOrientation.length
      ? [
          bullet(
            `Năng lực định hướng nghề nghiệp: ${lesson.objectives.specificCompetencies.careerOrientation.join(
              "; "
            )}`,
            "+ "
          ),
        ]
      : []),
    ...(lesson.objectives.digitalCompetency && lesson.objectives.digitalCompetency.length > 0
      ? [
          p("2.3 Năng lực số (Tích hợp theo PPCT cột 8 - Chuẩn Phụ lục I [*.*.TC2.*]):", true, false, AlignmentType.LEFT, "1D4ED8"),
          ...lesson.objectives.digitalCompetency.map((comp) => bullet(comp, "+ ", "1D4ED8", true)),
        ]
      : []),
    p("3. Phẩm chất:", true),
    ...(lesson.objectives.qualities.patriotism?.length
      ? [bullet(`Yêu nước: ${lesson.objectives.qualities.patriotism.join("; ")}`, "+ ")]
      : []),
    ...(lesson.objectives.qualities.compassion?.length
      ? [bullet(`Nhân ái: ${lesson.objectives.qualities.compassion.join("; ")}`, "+ ")]
      : []),
    ...(lesson.objectives.qualities.diligence?.length
      ? [bullet(`Chăm chỉ: ${lesson.objectives.qualities.diligence.join("; ")}`, "+ ")]
      : []),
    ...(lesson.objectives.qualities.honesty?.length
      ? [bullet(`Trung thực: ${lesson.objectives.qualities.honesty.join("; ")}`, "+ ")]
      : []),
    ...(lesson.objectives.qualities.responsibility?.length
      ? [bullet(`Trách nhiệm: ${lesson.objectives.qualities.responsibility.join("; ")}`, "+ ")]
      : [])
  );

  // 3. Section II: Thiết bị dạy học và học liệu
  docElements.push(
    h("II. Thiết bị dạy học và học liệu"),
    p("1. Giáo viên:", true),
    ...lesson.equipment.teacher.map((eq) => bullet(eq)),
    p("2. Học sinh:", true),
    ...lesson.equipment.student.map((eq) => bullet(eq))
  );

  // 4. Section III: Tiến trình dạy học
  docElements.push(h("III. Tiến trình dạy học"));

  // 4.1 HOẠT ĐỘNG 1: MỞ ĐẦU
  docElements.push(
    p("1. HOẠT ĐỘNG 1: MỞ ĐẦU (Khởi động)", true),
    pObjective(lesson.timeline.warmUp.objective),
    p(`b) Nội dung: ${lesson.timeline.warmUp.content}`),
    p("c) Tổ chức thực hiện và sản phẩm:", true),
    createActivityTable(lesson.timeline.warmUp)
  );

  // 4.2 HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI
  docElements.push(
    new Paragraph({ spacing: { before: 180 } }),
    p("2. HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI", true)
  );

  lesson.timeline.knowledgeFormation.forEach((act, idx) => {
    docElements.push(
      p(`HOẠT ĐỘNG 2.${idx + 1}: ${act.subTitle || act.name}`, true),
      pObjective(act.objective),
      p(`b) Nội dung: ${act.content}`),
      p("c) Tổ chức thực hiện và sản phẩm:", true),
      createActivityTable(act),
      new Paragraph({ spacing: { before: 140 } })
    );
  });

  // 4.3 HOẠT ĐỘNG 3: LUYỆN TẬP
  docElements.push(
    p("3. HOẠT ĐỘNG 3: LUYỆN TẬP", true),
    pObjective(lesson.timeline.practice.objective),
    p(`b) Nội dung: ${lesson.timeline.practice.content}`),
    p("c) Tổ chức thực hiện và sản phẩm:", true),
    createActivityTable(lesson.timeline.practice),
    new Paragraph({ spacing: { before: 140 } })
  );

  // 4.4 HOẠT ĐỘNG 4: VẬN DỤNG
  docElements.push(
    p("4. HOẠT ĐỘNG 4: VẬN DỤNG", true),
    pObjective(lesson.timeline.application.objective),
    p(`b) Nội dung: ${lesson.timeline.application.content}`),
    p("c) Tổ chức thực hiện và sản phẩm:", true),
    createActivityTable(lesson.timeline.application)
  );

  // 5. Footer Signatures (2 columns)
  const signTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "TỔ TRƯỞNG KÝ DUYỆT",
                    font,
                    size: bodySize,
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "(Ký và ghi rõ họ tên)",
                    font,
                    size: bodySize,
                    italics: true,
                  }),
                ],
              }),
              new Paragraph({ spacing: { before: 800 } }), // Space for signature
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: lesson.headOfDepartment,
                    font,
                    size: bodySize,
                    bold: true,
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: lesson.locationDate,
                    font,
                    size: bodySize,
                    italics: true,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "GIÁO VIÊN SOẠN BÀI",
                    font,
                    size: bodySize,
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "(Ký và ghi rõ họ tên)",
                    font,
                    size: bodySize,
                    italics: true,
                  }),
                ],
              }),
              new Paragraph({ spacing: { before: 800 } }), // Space for signature
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: lesson.teacherName,
                    font,
                    size: bodySize,
                    bold: true,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  docElements.push(new Paragraph({ spacing: { before: 300 } }), signTable);

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1134, // 2 cm (1134 dxa)
              bottom: 1134,
              left: 1701, // 3 cm (1701 dxa)
              right: 1134, // 2 cm
            },
          },
        },
        children: docElements,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const cleanTitle = lesson.lessonTitle
    .replace(/[^a-zA-Z0-9\u00C0-\u1EF9]/g, "_")
    .replace(/_+/g, "_");
  const fileName = `KHBD_HDTN8_${cleanTitle}_Tuan${lesson.weekNumber || 1}.docx`;
  saveAs(blob, fileName);
}
