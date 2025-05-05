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
  Mail,
  Phone,
  User,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { Teacher } from "@/types/teacher";

interface TeacherDetailsProps {
  teacher: Teacher;
  onClose: () => void;
  onUpdate?: (updatedTeacher: Teacher) => void;
}

export const TeacherDetails = ({ teacher, onClose, onUpdate }: TeacherDetailsProps) => {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState<Teacher>(teacher);

  const handleImageUpdate = (newImageUrl: string) => {
    const updatedTeacher = { ...currentTeacher, avatar: newImageUrl };
    setCurrentTeacher(updatedTeacher);
    
    if (onUpdate) {
      onUpdate(updatedTeacher);
    }
    
    setIsEditingImage(false);
  };

  return (
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl">Teacher Profile</DialogTitle>
        <DialogDescription>View complete teacher information</DialogDescription>
      </DialogHeader>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center space-y-3">
          {isEditingImage ? (
            <ImageUpload
              currentImage={currentTeacher.avatar}
              onImageChange={handleImageUpdate}
              fallback={`${currentTeacher.name.charAt(0)}${currentTeacher.lastName.charAt(0)}`}
              className="h-32 w-32"
            />
          ) : (
            <>
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage src={currentTeacher.avatar} />
                <AvatarFallback>{currentTeacher.name.charAt(0)}{currentTeacher.lastName.charAt(0)}</AvatarFallback>
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
            <h2 className="text-xl font-bold">{currentTeacher.name} {currentTeacher.lastName}</h2>
            <p className="text-muted-foreground">{currentTeacher.id}</p>
          </div>
          <div className="w-full space-y-2">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span>{currentTeacher.position}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>Gender: {currentTeacher.gender}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>DOJ: {currentTeacher.dateOfJoining}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 justify-center mt-3">
            {currentTeacher.subjects.map((subject, index) => (
              <Badge key={index} variant="secondary">
                {subject}
              </Badge>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div className="bg-muted p-3 rounded-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{currentTeacher.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{currentTeacher.email}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Professional Information
            </h3>
            <div className="bg-muted p-3 rounded-md grid grid-cols-2 gap-3">
              <div>
                <p className="text-sm text-muted-foreground">Qualification</p>
                <p>{currentTeacher.qualification}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p>{currentTeacher.experience} years</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Salary</p>
                <p>₹{currentTeacher.salary.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date of Joining</p>
                <p>{currentTeacher.dateOfJoining}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Teaching Subjects
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {currentTeacher.subjects.map((subject, idx) => (
                <div key={idx} className="bg-muted p-2 rounded-md">
                  {subject}
                </div>
              ))}
            </div>
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
