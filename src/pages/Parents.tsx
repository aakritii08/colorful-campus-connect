
import React from "react";
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
import { Search, Plus } from "lucide-react";

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
  
  // Filter parents based on search term
  const filteredParents = parentsData.filter(parent => {
    const searchText = `${parent.name} ${parent.lastName} ${parent.email} ${parent.children.join(" ")}`.toLowerCase();
    return searchText.includes(searchTerm.toLowerCase());
  });
  
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
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={parent.avatar} alt={parent.name} />
                      <AvatarFallback>{parent.name.charAt(0)}{parent.lastName.charAt(0)}</AvatarFallback>
                    </Avatar>
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
    </div>
  );
};

export default Parents;
