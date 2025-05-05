
import React from "react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Students" 
          value="1,283" 
          icon={<GraduationCap className="h-4 w-4 text-edu-purple" />} 
          className="border-l-4 border-edu-purple" 
        />
        <StatsCard 
          title="Teachers" 
          value="78" 
          icon={<Users className="h-4 w-4 text-edu-pink" />} 
          className="border-l-4 border-edu-pink" 
        />
        <StatsCard 
          title="Sports Teams" 
          value="12" 
          icon={<Award className="h-4 w-4 text-edu-green" />} 
          className="border-l-4 border-edu-green" 
        />
        <StatsCard 
          title="Library Books" 
          value="8,500+" 
          icon={<BookOpen className="h-4 w-4 text-edu-blue" />} 
          className="border-l-4 border-edu-blue" 
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <RecentActivity />
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Dashboard;
