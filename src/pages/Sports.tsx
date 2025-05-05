
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { ImageUpload } from "@/components/common/ImageUpload";
import { Award, Calendar, Clock, MapPin, Plus, Trophy, Users } from "lucide-react";
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

const Sports = () => {
  const [sports, setSports] = useState<Sport[]>([]);
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
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sports Programs</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Sport
        </Button>
      </div>

      {sports.length > 0 ? (
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
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <Award size={64} className="text-muted-foreground mb-4" />
          <p className="text-xl font-medium">No sports programs found</p>
          <p className="text-muted-foreground">Add sports programs to see them here</p>
        </div>
      )}
    </div>
  );
};

export default Sports;
