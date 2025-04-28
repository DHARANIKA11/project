import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StudentResult } from "@/data/studentResults";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  result: StudentResult;
}

const ResultCard = ({ result }: ResultCardProps) => {
  return (
    <Card className="w-full shadow-lg border-t-4 border-t-education-500 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <CardHeader className="bg-gray-50 pb-2">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <div>
            <CardTitle className="text-xl md:text-2xl font-bold text-education-800">
              {result.name}
            </CardTitle>
            <p className="text-sm text-gray-500">
              Class {result.class} {result.section} | Roll Number: {result.rollNumber}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={result.passStatus ? "default" : "destructive"} className={result.passStatus ? "bg-green-500" : ""}>
              {result.passStatus ? "PASSED" : "FAILED"}
            </Badge>
            <Badge variant="outline" className="border-education-500 text-education-700">
              {result.examType}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-education-800">Overall Performance</h3>
            <span className="font-bold text-lg">{result.percentage.toFixed(1)}%</span>
          </div>
          <Progress 
            value={result.percentage} 
            className={cn(
              "h-2",
              result.passStatus 
                ? "bg-gradient-to-r from-education-400 to-education-600" 
                : "bg-red-500"
            )}
          />
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm text-gray-500">
              {result.totalMarks} / {result.maxTotalMarks} marks
            </div>
            <div className="text-sm font-medium px-2 py-0.5 rounded-md bg-gray-100">
              Grade: <span className="font-bold text-education-700">{result.overallGrade}</span>
            </div>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div>
          <h3 className="font-semibold text-education-800 mb-2">Subject-wise Performance</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead className="text-right">Marks</TableHead>
                <TableHead className="text-right">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result.subjects.map((subject, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{subject.name}</TableCell>
                  <TableCell className="text-right">{subject.marks} / {subject.maxMarks}</TableCell>
                  <TableCell className="text-right">
                    <span className={`font-bold ${subject.grade === 'F' ? 'text-red-500' : 'text-education-700'}`}>
                      {subject.grade}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <Separator className="my-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p><span className="font-semibold">School:</span> {result.schoolName}</p>
            <p><span className="font-semibold">Semester:</span> {result.semester}</p>
          </div>
          <div>
            <p><span className="font-semibold">Exam Type:</span> {result.examType}</p>
            <p><span className="font-semibold">Result Date:</span> {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
