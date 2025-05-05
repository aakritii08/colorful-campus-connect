import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { ImageUpload } from "@/components/common/ImageUpload";
import { Award, Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Sport {
  id: string;
  name: string;
  coach: {
    name: string;
    avatar?: string;
  };
  members: number;
  meetingDays: string;
  meetingTime: string;
  location: string;
  achievements: string[];
  image: string;
}

// Mock data
const sportsData: Sport[] = [
  {
    id: "SP001",
    name: "Basketball",
    coach: {
      name: "David Martinez",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    members: 15,
    meetingDays: "Monday, Wednesday",
    meetingTime: "3:30 PM - 5:30 PM",
    location: "Main Gymnasium",
    achievements: [
      "City Champions 2024",
      "State Semifinalists 2023"
    ],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SP002",
    name: "Soccer",
    coach: {
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    members: 22,
    meetingDays: "Tuesday, Thursday",
    meetingTime: "3:30 PM - 5:30 PM",
    location: "Soccer Field",
    achievements: [
      "Regional Champions 2024",
      "City Tournament Winners 2023"
    ],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SP003",
    name: "Swimming",
    coach: {
      name: "Jennifer Wilson",
      avatar: "https://i.pravatar.cc/150?img=20"
    },
    members: 18,
    meetingDays: "Monday, Wednesday, Friday",
    meetingTime: "4:00 PM - 6:00 PM",
    location: "Aquatic Center",
    achievements: [
      "State Champions 2024",
      "4 Individual National Qualifiers 2023"
    ],
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SP004",
    name: "Track & Field",
    coach: {
      name: "Sarah Davis",
      avatar: "https://i.pravatar.cc/150?img=16"
    },
    members: 25,
    meetingDays: "Tuesday, Thursday, Friday",
    meetingTime: "3:45 PM - 5:45 PM",
    location: "Track Field",
    achievements: [
      "3 State Medalists 2024",
      "Regional Champions 2023"
    ],
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const Sports = () => {
  const [sports, setSports] = useState<Sport[]>(sportsData);
  const [editingSportId, setEditingSportId] = useState<string | null>(null);

  const handleImageUpdate = (sportId: string, newImage: string) => {
    setSports(prevSports => 
      prevSports.map(sport => 
        sport.id === sportId ? { ...sport, image: newImage } : sport
      )
    );
    setEditingSportId(null);
  };

  const handleCoachImageUpdate = (sportId: string, newImage: string) => {
    setSports(prevSports => 
      prevSports.map(sport => 
        sport.id === sportId 
          ? { ...sport, coach: { ...sport.coach, avatar: newImage } } 
          : sport
      )
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Sports Programs</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {sports.map((sport) => (
          <Card key={sport.id} className="card-hover overflow-hidden">
            <div className="h-48 overflow-hidden relative">
              {editingSportId === sport.id ? (
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center p-4">
                  <div className="bg-card p-4 rounded-lg shadow-lg w-full max-w-md">
                    <h3 className="font-medium mb-3">Update Sport Image</h3>
                    <ImageUpload
                      currentImage={sport.image}
                      onImageChange={(url) => handleImageUpdate(sport.id, url)}
                      fallback={sport.name.charAt(0)}
                      className="h-20 w-20 mx-auto"
                    />
                    <div className="flex justify-end mt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setEditingSportId(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <img 
                    src={sport.image} 
                    alt={sport.name} 
                    className="w-full h-full object-cover"
                  />
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="absolute top-2 right-2 bg-background/80"
                    onClick={() => setEditingSportId(sport.id)}
                  >
                    Change Image
                  </Button>
                </>
              )}
            </div>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Award className="h-5 w-5 text-edu-green" />
                {sport.name}
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <div className="relative">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={sport.coach.avatar} alt={sport.coach.name} />
                    <AvatarFallback>{sport.coach.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="absolute -bottom-1 -right-1 h-4 w-4 p-0 rounded-full bg-muted"
                    onClick={() => {
                      const newImage = prompt("Enter coach image URL:", sport.coach.avatar);
                      if (newImage) handleCoachImageUpdate(sport.id, newImage);
                    }}
                  >
                    <span className="sr-only">Edit coach image</span>
                    <span className="text-xs">+</span>
                  </Button>
                </div>
                <span>Coach: {sport.coach.name}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-muted-foreground" />
                  <span>{sport.members} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-muted-foreground" />
                  <span>{sport.meetingDays}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-muted-foreground" />
                  <span>{sport.meetingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-muted-foreground" />
                  <span>{sport.location}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Registration</span>
                  <span className="text-sm text-muted-foreground">{Math.floor(Math.random() * 20) + 5}/{sport.members + 10}</span>
                </div>
                <Progress value={(Math.floor(Math.random() * 20) + 5) / (sport.members + 10) * 100} className="h-2" />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                  <Trophy size={16} className="text-edu-orange" />
                  Recent Achievements
                </h4>
                <ul className="text-sm space-y-1">
                  {sport.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-edu-purple"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sports;
