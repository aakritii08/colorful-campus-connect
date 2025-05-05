
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
import { StudentDetails } from "@/components/students/StudentDetails";
import { StudentForm } from "@/components/students/StudentForm";
import { Plus, Search } from "lucide-react";
import { Student } from "@/types/student";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { studentsData } from "@/data/studentsData";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [students, setStudents] = useState<Student[]>(studentsData);
  
  // Filter students based on search term and selected grade
  const filteredStudents = students.filter(student => {
    const matchesSearch = `${student.name} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === "all" || student.grade.toString() === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  const handleViewDetails = (student: Student) => {
    setSelectedStudent(student);
    setShowDetails(true);
  };

  const handleAddStudent = (newStudent: Student) => {
    setStudents([...students, newStudent]);
    setShowAddForm(false);
  };

  const handleUpdateStudent = (updatedStudent: Student) => {
    setStudents(students.map(s => 
      s.id === updatedStudent.id ? updatedStudent : s
    ));
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Students</h1>
        <Button onClick={() => setShowAddForm(true)}>
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
            <StudentCard 
              key={student.id} 
              student={student} 
              onViewDetails={() => handleViewDetails(student)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-xl font-medium">No students found</p>
          <p className="text-muted-foreground">Try adjusting your search or filter</p>
        </div>
      )}

      {showDetails && selectedStudent && (
        <Dialog open={showDetails} onOpenChange={setShowDetails}>
          <StudentDetails 
            student={selectedStudent} 
            onClose={() => setShowDetails(false)} 
            onUpdate={handleUpdateStudent}
          />
        </Dialog>
      )}

      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Add New Student</DialogTitle>
          </DialogHeader>
          <StudentForm 
            onSubmit={handleAddStudent} 
            onCancel={() => setShowAddForm(false)} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Students;
