
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TeacherCard } from "@/components/teachers/TeacherCard";
import { TeacherDetails } from "@/components/teachers/TeacherDetails";
import { Plus, Search } from "lucide-react";
import { Teacher } from "@/types/teacher";
import { Dialog } from "@/components/ui/dialog";
import { teachersData } from "@/data/teachersData";

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  
  // Filter teachers based on search term
  const filteredTeachers = teachersData.filter(teacher => {
    return `${teacher.name} ${teacher.lastName} ${teacher.subjects.join(" ")}`.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  const handleViewDetails = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setShowDetails(true);
  };

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
            <TeacherCard 
              key={teacher.id} 
              teacher={teacher} 
              onViewDetails={() => handleViewDetails(teacher)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-xl font-medium">No teachers found</p>
          <p className="text-muted-foreground">Try adjusting your search</p>
        </div>
      )}

      {showDetails && selectedTeacher && (
        <Dialog open={showDetails} onOpenChange={setShowDetails}>
          <TeacherDetails teacher={selectedTeacher} onClose={() => setShowDetails(false)} />
        </Dialog>
      )}
    </div>
  );
};

export default Teachers;
