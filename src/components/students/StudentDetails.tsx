import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { ImageUpload } from "@/components/common/ImageUpload";
import {
  Calendar,
  GraduationCap,
  Home,
  Award,
  BookOpen,
  Users,
} from "lucide-react";
import { Student } from "@/types/student";

interface StudentDetailsProps {
  student: Student;
  onClose: () => void;
  onUpdate?: (updatedStudent: Student) => void;
}

export const StudentDetails = ({ student, onClose, onUpdate }: StudentDetailsProps) => {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<Student>(student);

  const handleImageUpdate = (newImageUrl: string) => {
    const updatedStudent = { ...currentStudent, avatar: newImageUrl };
    setCurrentStudent(updatedStudent);
    
    if (onUpdate) {
      onUpdate(updatedStudent);
    }
    
    setIsEditingImage(false);
  };

  return (
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl">Student Profile</DialogTitle>
        <DialogDescription>View complete student information</DialogDescription>
      </DialogHeader>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center space-y-3">
          {isEditingImage ? (
            <ImageUpload
              currentImage={currentStudent.avatar}
              onImageChange={handleImageUpdate}
              fallback={`${currentStudent.name.charAt(0)}${currentStudent.lastName.charAt(0)}`}
              className="h-32 w-32"
            />
          ) : (
            <>
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage src={currentStudent.avatar} />
                <AvatarFallback>{currentStudent.name.charAt(0)}{currentStudent.lastName.charAt(0)}</AvatarFallback>
              </Avatar>
              {onUpdate && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs" 
                  onClick={() => setIsEditingImage(true)}
                >
                  Change Image
                </Button>
              )}
            </>
          )}
          <div className="text-center">
            <h2 className="text-xl font-bold">{currentStudent.name} {currentStudent.lastName}</h2>
            <p className="text-muted-foreground">{currentStudent.id}</p>
          </div>
          <div className="w-full space-y-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              <span>Grade {currentStudent.grade}, Class {currentStudent.class}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>DOB: {currentStudent.dob}</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{currentStudent.address}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 justify-center mt-3">
            {currentStudent.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Academic Information</h3>
            <div className="bg-muted p-3 rounded-md">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <p className="text-sm text-muted-foreground">Admission Date</p>
                  <p>{currentStudent.admissionDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Performance</p>
                  <p>{currentStudent.performance}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                  <p>{currentStudent.attendance}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GPA</p>
                  <p>{currentStudent.gpa}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Academic Marks
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-2">Subject</th>
                  <th className="text-center p-2">Score</th>
                  <th className="text-right p-2">Grade</th>
                </tr>
              </thead>
              <tbody>
                {currentStudent.marks.map((mark, idx) => (
                  <tr key={idx} className="border-b border-border">
                    <td className="p-2">{mark.subject}</td>
                    <td className="text-center p-2">{mark.score}</td>
                    <td className="text-right p-2">{mark.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Parents Information
            </h3>
            <div className="bg-muted p-3 rounded-md grid grid-cols-2 gap-3">
              <div>
                <p className="text-sm text-muted-foreground">Father's Name</p>
                <p>{currentStudent.parents.fatherName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mother's Name</p>
                <p>{currentStudent.parents.motherName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact Number</p>
                <p>{currentStudent.parents.contactNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="truncate">{currentStudent.parents.email}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Award className="h-4 w-4" />
              Achievements
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {currentStudent.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <DialogFooter className="mt-6">
        <Button variant="outline" onClick={onClose}>Close</Button>
        <Button>Edit Profile</Button>
      </DialogFooter>
    </DialogContent>
  );
};
