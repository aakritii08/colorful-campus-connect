
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar as CalendarIcon, School, Trophy, FileText } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

interface Event {
  id: string;
  title: string;
  date: Date;
  type: "class" | "exam" | "sports" | "holiday";
  description?: string;
}

// Helper function to create dates for the current month
const createDate = (day: number): Date => {
  const date = new Date();
  date.setDate(day);
  return date;
};

// Mock data
const eventsData: Event[] = [
  {
    id: "EV001",
    title: "Math Final Exam",
    date: createDate(12),
    type: "exam",
    description: "Grade 10 Mathematics final assessment"
  },
  {
    id: "EV002",
    title: "Basketball Tournament",
    date: createDate(15),
    type: "sports",
    description: "Regional basketball tournament - Home game"
  },
  {
    id: "EV003",
    title: "Science Fair",
    date: createDate(18),
    type: "class",
    description: "Annual science fair for all grades"
  },
  {
    id: "EV004",
    title: "Memorial Day",
    date: createDate(25),
    type: "holiday",
    description: "School closed"
  },
  {
    id: "EV005",
    title: "English Literature Exam",
    date: createDate(10),
    type: "exam",
    description: "Grade 11 Literature assessment"
  },
  {
    id: "EV006",
    title: "Swimming Competition",
    date: createDate(22),
    type: "sports",
    description: "State swimming competition"
  }
];

// Function to get events for a specific date
const getEventsForDate = (date: Date): Event[] => {
  return eventsData.filter(event => 
    event.date.getDate() === date.getDate() && 
    event.date.getMonth() === date.getMonth() && 
    event.date.getFullYear() === date.getFullYear()
  );
};

// Function to check if a date has events
const hasEvents = (date: Date): boolean => {
  return getEventsForDate(date).length > 0;
};

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());
  
  // Get events for selected date
  const eventsForSelectedDate = selectedDate ? getEventsForDate(selectedDate) : [];
  
  // Function to get icon based on event type
  const getEventIcon = (type: string) => {
    switch(type) {
      case "class":
        return <School size={18} />;
      case "exam":
        return <FileText size={18} />;
      case "sports":
        return <Trophy size={18} />;
      case "holiday":
        return <CalendarIcon size={18} />;
      default:
        return <BookOpen size={18} />;
    }
  };
  
  // Function to get color based on event type
  const getEventColor = (type: string) => {
    switch(type) {
      case "class":
        return "bg-edu-purple/20 text-edu-purple";
      case "exam":
        return "bg-edu-orange/20 text-edu-orange";
      case "sports":
        return "bg-edu-green/20 text-edu-green";
      case "holiday":
        return "bg-edu-blue/20 text-edu-blue";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">School Calendar</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="flex-1 p-4">
          <CalendarComponent
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            modifiers={{
              hasEvents: (date) => hasEvents(date),
            }}
            modifiersStyles={{
              hasEvents: {
                fontWeight: 'bold',
                backgroundColor: 'hsl(var(--primary) / 0.1)',
                color: 'hsl(var(--primary))',
              }
            }}
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-edu-purple/80"></span>
              <span className="text-xs">Class</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-edu-orange/80"></span>
              <span className="text-xs">Exam</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-edu-green/80"></span>
              <span className="text-xs">Sports</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-edu-blue/80"></span>
              <span className="text-xs">Holiday</span>
            </div>
          </div>
        </Card>
        
        <Card className="flex-1 p-4">
          <h2 className="text-xl font-semibold mb-4">
            {selectedDate?.toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric'
            })}
          </h2>
          
          {eventsForSelectedDate.length > 0 ? (
            <div className="space-y-4">
              {eventsForSelectedDate.map((event) => (
                <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className={`p-2 rounded-lg ${getEventColor(event.type)}`}>
                    {getEventIcon(event.type)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{event.title}</h3>
                      <Badge className={getEventColor(event.type)}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                    {event.description && (
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {event.date.toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CalendarIcon size={48} className="text-muted-foreground mb-4" />
              <p className="text-xl font-medium">No events scheduled</p>
              <p className="text-muted-foreground">There are no events scheduled for this date.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default CalendarPage;
