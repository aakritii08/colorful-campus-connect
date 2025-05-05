
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Plus, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImageUpload } from "@/components/common/ImageUpload";

interface Parent {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  children: string[];
  avatar?: string;
}

// Mock data
const parentsData: Parent[] = [
  {
    id: "PAR001",
    name: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "555-1234",
    children: ["Emma Smith (Grade 10)", "Jacob Smith (Grade 8)"],
    avatar: "https://i.pravatar.cc/150?img=60"
  },
  {
    id: "PAR002",
    name: "Maria",
    lastName: "Garcia",
    email: "maria.garcia@example.com",
    phone: "555-2345",
    children: ["Sofia Garcia (Grade 11)"],
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    id: "PAR003",
    name: "Robert",
    lastName: "Johnson",
    email: "robert.johnson@example.com",
    phone: "555-3456",
    children: ["Michael Johnson (Grade 9)"],
    avatar: "https://i.pravatar.cc/150?img=59"
  },
  {
    id: "PAR004",
    name: "Lisa",
    lastName: "Brown",
    email: "lisa.brown@example.com",
    phone: "555-4567",
    children: ["Emily Brown (Grade 12)", "David Brown (Grade 10)"],
    avatar: "https://i.pravatar.cc/150?img=48"
  },
  {
    id: "PAR005",
    name: "James",
    lastName: "Wilson",
    email: "james.wilson@example.com",
    phone: "555-5678",
    children: ["Olivia Wilson (Grade 9)"],
    avatar: "https://i.pravatar.cc/150?img=53"
  },
];

const Parents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [parents, setParents] = useState<Parent[]>(parentsData);
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  
  // Filter parents based on search term
  const filteredParents = parents.filter(parent => {
    const searchText = `${parent.name} ${parent.lastName} ${parent.email} ${parent.children.join(" ")}`.toLowerCase();
    return searchText.includes(searchTerm.toLowerCase());
  });

  const handleImageUpdate = (newImageUrl: string) => {
    if (selectedParent) {
      const updatedParent = { ...selectedParent, avatar: newImageUrl };
      setParents(parents.map(p => p.id === selectedParent.id ? updatedParent : p));
      setSelectedParent(null);
      setIsImageDialogOpen(false);
    }
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Parents</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Parent
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, email or student..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="rounded-md border shadow">
        <Table>
          <TableCaption>List of registered parents and guardians</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Children</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredParents.map((parent) => (
              <TableRow key={parent.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={parent.avatar} alt={parent.name} />
                        <AvatarFallback>{parent.name.charAt(0)}{parent.lastName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute -bottom-1 -right-1 h-4 w-4 p-0 rounded-full bg-muted hover:bg-muted-foreground/20"
                        onClick={() => {
                          setSelectedParent(parent);
                          setIsImageDialogOpen(true);
                        }}
                      >
                        <Upload className="h-2 w-2" />
                        <span className="sr-only">Change image</span>
                      </Button>
                    </div>
                    {parent.name} {parent.lastName}
                  </div>
                </TableCell>
                <TableCell>{parent.email}</TableCell>
                <TableCell>{parent.phone}</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside">
                    {parent.children.map((child, index) => (
                      <li key={index} className="text-sm">{child}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Profile Image</DialogTitle>
          </DialogHeader>
          {selectedParent && (
            <div className="flex flex-col items-center space-y-4">
              <ImageUpload
                currentImage={selectedParent.avatar}
                onImageChange={handleImageUpdate}
                fallback={`${selectedParent.name.charAt(0)}${selectedParent.lastName.charAt(0)}`}
                className="h-32 w-32"
              />
              <p className="text-center text-sm text-muted-foreground">
                Enter the URL of the image you want to use for {selectedParent.name} {selectedParent.lastName}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Parents;
