
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
}

export const TeacherDetails = ({ teacher, onClose }: TeacherDetailsProps) => {
  return (
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl">Teacher Profile</DialogTitle>
        <DialogDescription>View complete teacher information</DialogDescription>
      </DialogHeader>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center space-y-3">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src={teacher.avatar} />
            <AvatarFallback>{teacher.name.charAt(0)}{teacher.lastName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-xl font-bold">{teacher.name} {teacher.lastName}</h2>
            <p className="text-muted-foreground">{teacher.id}</p>
          </div>
          <div className="w-full space-y-2">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span>{teacher.position}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>Gender: {teacher.gender}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>DOJ: {teacher.dateOfJoining}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 justify-center mt-3">
            {teacher.subjects.map((subject, index) => (
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
                  <span>{teacher.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{teacher.email}</span>
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
                <p>{teacher.qualification}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p>{teacher.experience} years</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Salary</p>
                <p>₹{teacher.salary.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date of Joining</p>
                <p>{teacher.dateOfJoining}</p>
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
              {teacher.subjects.map((subject, idx) => (
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
