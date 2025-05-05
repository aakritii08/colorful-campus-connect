
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, BookOpen, Search, Clock, BookOpenCheck } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  isbn: string;
  publishYear: number;
  available: boolean;
  cover: string;
  dueDate?: string;
  borrowedBy?: string;
}

// Mock data
const booksData: Book[] = [
  {
    id: "BK001",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    isbn: "978-0446310789",
    publishYear: 1960,
    available: true,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "BK002",
    title: "1984",
    author: "George Orwell",
    category: "Science Fiction",
    isbn: "978-0451524935",
    publishYear: 1949,
    available: false,
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    dueDate: "May 15, 2025",
    borrowedBy: "Emma Wilson"
  },
  {
    id: "BK003",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    isbn: "978-0743273565",
    publishYear: 1925,
    available: true,
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "BK004",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    isbn: "978-0316769488",
    publishYear: 1951,
    available: false,
    cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    dueDate: "May 12, 2025",
    borrowedBy: "Michael Brown"
  },
  {
    id: "BK005",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    isbn: "978-0747532699",
    publishYear: 1997,
    available: true,
    cover: "https://images.unsplash.com/photo-1606311698062-92aad0825b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "BK006",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Classic",
    isbn: "978-0141439518",
    publishYear: 1813,
    available: true,
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "available" | "borrowed">("all");
  
  // Filter books based on search term and availability
  const filteredBooks = booksData.filter(book => {
    const matchesSearch = `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || 
      (filter === "available" && book.available) || 
      (filter === "borrowed" && !book.available);
    
    return matchesSearch && matchesFilter;
  });
  
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Library</h1>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title, author or category..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" onValueChange={(value) => setFilter(value as any)} className="w-full sm:w-auto">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="available" className="flex-1">Available</TabsTrigger>
            <TabsTrigger value="borrowed" className="flex-1">Borrowed</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="card-hover overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden bg-muted">
              {book.cover ? (
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Book size={48} className="text-muted-foreground" />
                </div>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="line-clamp-2 text-lg">{book.title}</CardTitle>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
            </CardHeader>
            <CardContent className="space-y-2 flex-grow">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{book.category}</Badge>
                <Badge className={book.available ? "bg-edu-green/20 text-edu-green" : "bg-edu-orange/20 text-edu-orange"}>
                  {book.available ? 'Available' : 'Borrowed'}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">ISBN</p>
                  <p>{book.isbn}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Year</p>
                  <p>{book.publishYear}</p>
                </div>
              </div>
              
              {!book.available && book.dueDate && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-muted-foreground" />
                  <div>
                    <span className="text-muted-foreground">Due: </span>
                    <span>{book.dueDate}</span>
                  </div>
                </div>
              )}
              
              {!book.available && book.borrowedBy && (
                <div className="flex items-center gap-2 text-sm">
                  <BookOpenCheck size={16} className="text-muted-foreground" />
                  <div>
                    <span className="text-muted-foreground">Borrowed by: </span>
                    <span>{book.borrowedBy}</span>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={book.available ? "default" : "outline"}>
                {book.available ? 'Borrow' : 'Reserve'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filteredBooks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <BookOpen size={48} className="text-muted-foreground mb-4" />
          <p className="text-xl font-medium">No books found</p>
          <p className="text-muted-foreground">Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  );
};

export default Library;
