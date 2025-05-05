
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  ClipboardList, 
  Clock, 
  FileText, 
  GraduationCap 
} from "lucide-react";

interface Exam {
  id: string;
  name: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  grade: number;
  room: string;
  status: "upcoming" | "completed" | "ongoing";
}

// Mock data
const examsData: Exam[] = [
  {
    id: "EX001",
    name: "Midterm Exam",
    subject: "Mathematics",
    date: "May 10, 2025",
    time: "09:00 AM",
    duration: "2 hours",
    grade: 10,
    room: "Room 101",
    status: "upcoming"
  },
  {
    id: "EX002",
    name: "Final Exam",
    subject: "Physics",
    date: "May 12, 2025",
    time: "10:00 AM",
    duration: "3 hours",
    grade: 11,
    room: "Lab 3",
    status: "upcoming"
  },
  {
    id: "EX003",
    name: "Weekly Quiz",
    subject: "English Literature",
    date: "May 7, 2025",
    time: "02:00 PM",
    duration: "1 hour",
    grade: 9,
    room: "Room 203",
    status: "upcoming"
  },
  {
    id: "EX004",
    name: "Chapter Test",
    subject: "Chemistry",
    date: "May 3, 2025",
    time: "11:00 AM",
    duration: "1.5 hours",
    grade: 10,
    room: "Lab 2",
    status: "completed"
  },
  {
    id: "EX005",
    name: "Final Exam",
    subject: "History",
    date: "May 15, 2025",
    time: "09:30 AM",
    duration: "2.5 hours",
    grade: 12,
    room: "Room 305",
    status: "upcoming"
  },
  {
    id: "EX006",
    name: "AP Practice Exam",
    subject: "Computer Science",
    date: "May 5, 2025",
    time: "01:00 PM",
    duration: "3 hours",
    grade: 11,
    room: "Computer Lab",
    status: "completed"
  },
  {
    id: "EX007",
    name: "Final Project Presentation",
    subject: "Art & Design",
    date: "May 18, 2025",
    time: "10:00 AM",
    duration: "4 hours",
    grade: 12,
    room: "Art Studio",
    status: "upcoming"
  },
  {
    id: "EX008",
    name: "Semester Exam",
    subject: "Biology",
    date: "May 5, 2025",
    time: "08:00 AM",
    duration: "2 hours",
    grade: 10,
    room: "Lab 1",
    status: "ongoing"
  }
];

const Exams = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed" | "ongoing">("all");
  
  // Filter exams based on status filter
  const filteredExams = examsData.filter(exam => {
    if (filter === "all") return true;
    return exam.status === filter;
  });
  
  // Get status color
  const getStatusColor = (status: string) => {
    switch(status) {
      case "upcoming":
        return "bg-edu-blue/20 text-edu-blue";
      case "ongoing":
        return "bg-edu-orange/20 text-edu-orange";
      case "completed":
        return "bg-edu-green/20 text-edu-green";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Exams & Assessments</h1>
      
      <Tabs defaultValue="all" onValueChange={(value) => setFilter(value as any)}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-edu-purple/20 to-edu-blue/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{examsData.length}</div>
            <FileText className="absolute top-4 right-4 h-4 w-4 text-edu-purple" />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-edu-blue/20 to-edu-green/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {examsData.filter(exam => exam.status === "upcoming").length}
            </div>
            <Calendar className="absolute top-4 right-4 h-4 w-4 text-edu-blue" />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-edu-orange/20 to-edu-pink/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ongoing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {examsData.filter(exam => exam.status === "ongoing").length}
            </div>
            <Clock className="absolute top-4 right-4 h-4 w-4 text-edu-orange" />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-edu-green/20 to-edu-blue/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {examsData.filter(exam => exam.status === "completed").length}
            </div>
            <ClipboardList className="absolute top-4 right-4 h-4 w-4 text-edu-green" />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Exam Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Exam</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredExams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell className="font-medium">{exam.name}</TableCell>
                  <TableCell>{exam.subject}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <GraduationCap size={14} className="text-muted-foreground" />
                      <span>{exam.grade}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-muted-foreground" />
                        <span>{exam.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-muted-foreground" />
                        <span>{exam.time} ({exam.duration})</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{exam.room}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(exam.status)}>
                      {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Exams;
