
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TeacherCard } from "@/components/teachers/TeacherCard";
import { Plus, Search } from "lucide-react";
import { Teacher } from "@/types/teacher";

// Mock data
const teachersData: Teacher[] = [
  {
    id: "TCH001",
    name: "Robert",
    lastName: "Johnson",
    position: "Math Teacher",
    subjects: ["Mathematics", "Advanced Algebra"],
    avatar: "https://i.pravatar.cc/150?img=11",
    email: "robert.j@school.edu",
    phone: "555-0123",
    experience: 8
  },
  {
    id: "TCH002",
    name: "Sarah",
    lastName: "Davis",
    position: "Science Teacher",
    subjects: ["Physics", "Chemistry"],
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "sarah.d@school.edu",
    phone: "555-0124",
    experience: 12
  },
  {
    id: "TCH003",
    name: "Michael",
    lastName: "Brown",
    position: "English Teacher",
    subjects: ["English Literature", "Creative Writing"],
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "michael.b@school.edu",
    phone: "555-0125",
    experience: 15
  },
  {
    id: "TCH004",
    name: "Jennifer",
    lastName: "Wilson",
    position: "History Teacher",
    subjects: ["World History", "American History"],
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "jennifer.w@school.edu",
    phone: "555-0126",
    experience: 10
  },
  {
    id: "TCH005",
    name: "David",
    lastName: "Martinez",
    position: "Physical Education",
    subjects: ["PE", "Health Education"],
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "david.m@school.edu",
    phone: "555-0127",
    experience: 7
  },
  {
    id: "TCH006",
    name: "Emily",
    lastName: "Thompson",
    position: "Art Teacher",
    subjects: ["Art", "Design"],
    avatar: "https://i.pravatar.cc/150?img=19",
    email: "emily.t@school.edu",
    phone: "555-0128",
    experience: 6
  },
];

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter teachers based on search term
  const filteredTeachers = teachersData.filter(teacher => {
    return `${teacher.name} ${teacher.lastName} ${teacher.subjects.join(" ")}`.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Teachers</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Teacher
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name or subject..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {filteredTeachers.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-xl font-medium">No teachers found</p>
          <p className="text-muted-foreground">Try adjusting your search</p>
        </div>
      )}
    </div>
  );
};

export default Teachers;
