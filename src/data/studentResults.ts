
export interface Subject {
  name: string;
  marks: number;
  maxMarks: number;
  grade: string;
}

export interface StudentResult {
  rollNumber: string;
  dateOfBirth: string; // Format: YYYY-MM-DD
  name: string;
  class: string;
  section: string;
  subjects: Subject[];
  totalMarks: number;
  maxTotalMarks: number;
  percentage: number;
  overallGrade: string;
  passStatus: boolean;
  semester: string;
  examType: string;
  schoolName: string;
}

// Helper function to calculate grade based on percentage
const calculateGrade = (percentage: number): string => {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B+";
  if (percentage >= 60) return "B";
  if (percentage >= 50) return "C";
  if (percentage >= 40) return "D";
  return "F";
};

// Mock data for student results
export const studentResults: StudentResult[] = [
  {
    rollNumber: "1001",
    dateOfBirth: "2005-05-15",
    name: "John Smith",
    class: "10",
    section: "A",
    subjects: [
      { name: "Mathematics", marks: 85, maxMarks: 100, grade: "A" },
      { name: "Science", marks: 92, maxMarks: 100, grade: "A+" },
      { name: "English", marks: 78, maxMarks: 100, grade: "B+" },
      { name: "Social Studies", marks: 88, maxMarks: 100, grade: "A" },
      { name: "Computer Science", marks: 95, maxMarks: 100, grade: "A+" },
    ],
    totalMarks: 438,
    maxTotalMarks: 500,
    percentage: 87.6,
    overallGrade: "A",
    passStatus: true,
    semester: "Spring 2024",
    examType: "Final Examination",
    schoolName: "Springfield High School"
  },
  {
    rollNumber: "1002",
    dateOfBirth: "2004-08-22",
    name: "Emily Johnson",
    class: "11",
    section: "B",
    subjects: [
      { name: "Mathematics", marks: 72, maxMarks: 100, grade: "B+" },
      { name: "Physics", marks: 68, maxMarks: 100, grade: "B" },
      { name: "Chemistry", marks: 75, maxMarks: 100, grade: "B+" },
      { name: "English", marks: 82, maxMarks: 100, grade: "A" },
      { name: "Computer Science", marks: 90, maxMarks: 100, grade: "A+" },
    ],
    totalMarks: 387,
    maxTotalMarks: 500,
    percentage: 77.4,
    overallGrade: "B+",
    passStatus: true,
    semester: "Spring 2024",
    examType: "Final Examination",
    schoolName: "Springfield High School"
  },
  {
    rollNumber: "1003",
    dateOfBirth: "2006-02-14",
    name: "Michael Brown",
    class: "9",
    section: "C",
    subjects: [
      { name: "Mathematics", marks: 35, maxMarks: 100, grade: "F" },
      { name: "Science", marks: 42, maxMarks: 100, grade: "D" },
      { name: "English", marks: 55, maxMarks: 100, grade: "C" },
      { name: "Social Studies", marks: 48, maxMarks: 100, grade: "D" },
      { name: "Computer Science", marks: 60, maxMarks: 100, grade: "B" },
    ],
    totalMarks: 240,
    maxTotalMarks: 500,
    percentage: 48.0,
    overallGrade: "D",
    passStatus: false,
    semester: "Spring 2024",
    examType: "Final Examination",
    schoolName: "Springfield High School"
  },
  {
    rollNumber: "1004",
    dateOfBirth: "2005-11-30",
    name: "Sophia Lee",
    class: "10",
    section: "A",
    subjects: [
      { name: "Mathematics", marks: 98, maxMarks: 100, grade: "A+" },
      { name: "Science", marks: 96, maxMarks: 100, grade: "A+" },
      { name: "English", marks: 94, maxMarks: 100, grade: "A+" },
      { name: "Social Studies", marks: 92, maxMarks: 100, grade: "A+" },
      { name: "Computer Science", marks: 100, maxMarks: 100, grade: "A+" },
    ],
    totalMarks: 480,
    maxTotalMarks: 500,
    percentage: 96.0,
    overallGrade: "A+",
    passStatus: true,
    semester: "Spring 2024",
    examType: "Final Examination",
    schoolName: "Springfield High School"
  },
  {
    rollNumber: "1005",
    dateOfBirth: "2006-07-10",
    name: "Daniel Wilson",
    class: "9",
    section: "B",
    subjects: [
      { name: "Mathematics", marks: 75, maxMarks: 100, grade: "B+" },
      { name: "Science", marks: 68, maxMarks: 100, grade: "B" },
      { name: "English", marks: 79, maxMarks: 100, grade: "B+" },
      { name: "Social Studies", marks: 72, maxMarks: 100, grade: "B+" },
      { name: "Computer Science", marks: 85, maxMarks: 100, grade: "A" },
    ],
    totalMarks: 379,
    maxTotalMarks: 500,
    percentage: 75.8,
    overallGrade: "B+",
    passStatus: true,
    semester: "Spring 2024",
    examType: "Final Examination",
    schoolName: "Springfield High School"
  }
];

// Function to find student by roll number and date of birth
export const findStudentResult = (
  rollNumber: string,
  dateOfBirth: string
): StudentResult | undefined => {
  return studentResults.find(
    (student) => 
      student.rollNumber === rollNumber && 
      student.dateOfBirth === dateOfBirth
  );
};
