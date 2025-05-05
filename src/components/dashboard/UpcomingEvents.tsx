
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Trophy, BookOpen, ClipboardList } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  type: "sports" | "class" | "exam" | "holiday";
}

const events: Event[] = [
  {
    id: "1",
    title: "Basketball Tournament",
    date: "May 10, 2025",
    time: "3:00 PM",
    type: "sports"
  },
  {
    id: "2",
    title: "Math Final Exam",
    date: "May 12, 2025",
    time: "9:00 AM",
    type: "exam"
  },
  {
    id: "3",
    title: "Science Fair",
    date: "May 15, 2025",
    time: "1:00 PM",
    type: "class"
  },
  {
    id: "4",
    title: "Summer Break Begins",
    date: "May 25, 2025",
    type: "holiday"
  }
];

export const UpcomingEvents = () => {
  return (
    <Card className="card-hover h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Upcoming Events</CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${
                event.type === 'sports' 
                  ? 'bg-edu-green/20 text-edu-green' 
                  : event.type === 'exam' 
                  ? 'bg-edu-orange/20 text-edu-orange'
                  : event.type === 'class'
                  ? 'bg-edu-purple/20 text-edu-purple'
                  : 'bg-edu-blue/20 text-edu-blue'
              }`}>
                {event.type === "sports" && <Trophy size={18} />}
                {event.type === "exam" && <ClipboardList size={18} />}
                {event.type === "class" && <BookOpen size={18} />}
                {event.type === "holiday" && <Calendar size={18} />}
              </div>
              <div className="space-y-1">
                <p className="font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground">
                  {event.date}{event.time ? `, ${event.time}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
