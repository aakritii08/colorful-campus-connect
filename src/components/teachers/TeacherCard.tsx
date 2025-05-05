
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Teacher } from "@/types/teacher";

interface TeacherCardProps {
  teacher: Teacher;
  onViewDetails: () => void;
}

export const TeacherCard = ({ teacher, onViewDetails }: TeacherCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-32 bg-gradient-to-r from-edu-pink/40 to-edu-purple/40"></div>
      </CardHeader>
      <CardContent className="pt-0 -mt-12 text-center">
        <Avatar className="h-24 w-24 border-4 border-background mx-auto">
          <AvatarImage src={teacher.avatar} alt={teacher.name} />
          <AvatarFallback>{teacher.name.charAt(0)}{teacher.lastName.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold mt-2">{teacher.name} {teacher.lastName}</h3>
        <p className="text-sm text-muted-foreground">{teacher.position}</p>
        <div className="flex flex-wrap gap-2 justify-center mt-3">
          {teacher.subjects.map((subject, index) => (
            <Badge key={index} variant="secondary" className="bg-muted">
              {subject}
            </Badge>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="text-left">
            <p className="text-muted-foreground">Email</p>
            <p className="font-medium">{teacher.email}</p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground">Experience</p>
            <p className="font-medium">{teacher.experience} years</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Profile</Button>
        <Button size="sm" onClick={onViewDetails}>View Details</Button>
      </CardFooter>
    </Card>
  );
};
