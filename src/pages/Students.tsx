
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { StudentCard } from "@/components/students/StudentCard";
import { Plus, Search } from "lucide-react";
import { Student } from "@/types/student";

// Mock data
const studentsData: Student[] = [
  {
    id: "STU001",
    name: "Emma",
    lastName: "Wilson",
    grade: 10,
    class: "10-A",
    avatar: "https://i.pravatar.cc/150?img=1",
    tags: ["Math Club", "Basketball"],
    attendance: 95,
    gpa: 3.8
  },
  {
    id: "STU002",
    name: "James",
    lastName: "Smith",
    grade: 10,
    class: "10-B",
    avatar: "https://i.pravatar.cc/150?img=3",
    tags: ["Science Club", "Swimming"],
    attendance: 92,
    gpa: 3.6
  },
  {
    id: "STU003",
    name: "Sophia",
    lastName: "Lee",
    grade: 11,
    class: "11-A",
    avatar: "https://i.pravatar.cc/150?img=5",
    tags: ["Debate Team", "Chess Club"],
    attendance: 98,
    gpa: 4.0
  },
  {
    id: "STU004",
    name: "Michael",
    lastName: "Brown",
    grade: 11,
    class: "11-C",
    avatar: "https://i.pravatar.cc/150?img=4",
    tags: ["Football", "Art Club"],
    attendance: 89,
    gpa: 3.3
  },
  {
    id: "STU005",
    name: "Olivia",
    lastName: "Davis",
    grade: 9,
    class: "9-B",
    avatar: "https://i.pravatar.cc/150?img=9",
    tags: ["Drama Club", "Choir"],
    attendance: 97,
    gpa: 3.9
  },
  {
    id: "STU006",
    name: "Ethan",
    lastName: "Martinez",
    grade: 9,
    class: "9-A",
    avatar: "https://i.pravatar.cc/150?img=7",
    tags: ["Robotics", "Soccer"],
    attendance: 94,
    gpa: 3.7
  },
];

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  
  // Filter students based on search term and selected grade
  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = `${student.name} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === "all" || student.grade.toString() === selectedGrade;
    return matchesSearch && matchesGrade;
  });
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Students</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Student
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedGrade} onValueChange={setSelectedGrade}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Grades</SelectItem>
            <SelectGroup>
              <SelectLabel>Grades</SelectLabel>
              <SelectItem value="9">Grade 9</SelectItem>
              <SelectItem value="10">Grade 10</SelectItem>
              <SelectItem value="11">Grade 11</SelectItem>
              <SelectItem value="12">Grade 12</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      {filteredStudents.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-xl font-medium">No students found</p>
          <p className="text-muted-foreground">Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  );
};

export default Students;
