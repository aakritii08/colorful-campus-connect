
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Student } from "@/types/student";

interface StudentCardProps {
  student: Student;
}

export const StudentCard = ({ student }: StudentCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-32 bg-gradient-to-r from-edu-blue/40 to-edu-purple/40"></div>
      </CardHeader>
      <CardContent className="pt-0 -mt-12 text-center">
        <Avatar className="h-24 w-24 border-4 border-background mx-auto">
          <AvatarImage src={student.avatar} alt={student.name} />
          <AvatarFallback>{student.name.charAt(0)}{student.lastName.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold mt-2">{student.name} {student.lastName}</h3>
        <p className="text-sm text-muted-foreground">Grade {student.grade}</p>
        <div className="flex flex-wrap gap-2 justify-center mt-3">
          {student.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-muted">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="text-left">
            <p className="text-muted-foreground">ID</p>
            <p className="font-medium">{student.id}</p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground">Class</p>
            <p className="font-medium">{student.class}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Profile</Button>
        <Button size="sm">View Details</Button>
      </CardFooter>
    </Card>
  );
};
