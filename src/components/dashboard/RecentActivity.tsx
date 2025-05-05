
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Activity {
  id: string;
  user: {
    name: string;
    image?: string;
    role: string;
  };
  action: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: "1",
    user: {
      name: "Emma Wilson",
      image: "https://i.pravatar.cc/150?img=1",
      role: "student"
    },
    action: "submitted Math assignment",
    time: "5 minutes ago"
  },
  {
    id: "2",
    user: {
      name: "Robert Johnson",
      image: "https://i.pravatar.cc/150?img=2",
      role: "teacher"
    },
    action: "posted new grades for Science class",
    time: "20 minutes ago"
  },
  {
    id: "3", 
    user: {
      name: "John Smith",
      role: "parent"
    },
    action: "scheduled a meeting with Ms. Davis",
    time: "1 hour ago"
  },
  {
    id: "4",
    user: {
      name: "Sophia Lee",
      image: "https://i.pravatar.cc/150?img=5",
      role: "student"
    },
    action: "borrowed 'The Great Gatsby' from library",
    time: "2 hours ago"
  }
];

export const RecentActivity = () => {
  return (
    <Card className="card-hover h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={activity.user.image} alt={activity.user.name} />
              <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{activity.user.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activity.user.role === 'student' 
                    ? 'bg-edu-purple/20 text-edu-purple' 
                    : activity.user.role === 'teacher' 
                    ? 'bg-edu-orange/20 text-edu-orange'
                    : 'bg-edu-green/20 text-edu-green'
                }`}>
                  {activity.user.role}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{activity.action}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
