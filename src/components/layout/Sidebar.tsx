
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  Library,
  Settings,
  Users,
  Award,
  ClipboardList
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  color?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { title: "Dashboard", href: "/", icon: Home, color: "text-edu-blue" },
    { title: "Students", href: "/students", icon: GraduationCap, color: "text-edu-purple" },
    { title: "Teachers", href: "/teachers", icon: Users, color: "text-edu-pink" },
    { title: "Parents", href: "/parents", icon: Users, color: "text-edu-orange" },
    { title: "Sports", href: "/sports", icon: Award, color: "text-edu-green" },
    { title: "Exams", href: "/exams", icon: ClipboardList, color: "text-edu-blue" },
    { title: "Library", href: "/library", icon: Library, color: "text-edu-purple" },
    { title: "Calendar", href: "/calendar", icon: Calendar, color: "text-edu-pink" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen bg-white border-r transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className={`flex h-16 items-center border-b px-4 ${isOpen ? "justify-start" : "justify-center"}`}>
        {isOpen ? (
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EduManager
            </h1>
          </div>
        ) : (
          <BookOpen className="h-6 w-6 text-primary" />
        )}
      </div>
      <div className="space-y-1 py-4 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-150",
              isActive(item.href)
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted",
              !isOpen && "justify-center px-0"
            )}
          >
            <item.icon size={20} className={item.color} />
            {isOpen && <span>{item.title}</span>}
          </Link>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 px-2">
        <Link
          to="/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
            isActive("/settings")
              ? "bg-primary/10 text-primary font-medium"
              : "text-muted-foreground hover:bg-muted",
            !isOpen && "justify-center px-0"
          )}
        >
          <Settings size={20} />
          {isOpen && <span>Settings</span>}
        </Link>
      </div>
    </aside>
  );
};
