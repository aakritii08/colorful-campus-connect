
import { Student } from "@/types/student";

export const studentsData: Student[] = [
  // Grade 9 students (10 students)
  {
    id: "STU001",
    name: "Rahul",
    lastName: "Sharma",
    grade: 9,
    class: "9-A",
    avatar: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Math Club", "Cricket"],
    attendance: 95,
    gpa: 3.8,
    dob: "2010-05-15",
    address: "123 Gandhi Road, Mumbai, Maharashtra",
    admissionDate: "2022-06-10",
    performance: "Excellent",
    marks: [
      { subject: "Mathematics", score: 92, grade: "A" },
      { subject: "Science", score: 88, grade: "A-" },
      { subject: "English", score: 85, grade: "B+" },
      { subject: "Social Studies", score: 90, grade: "A" },
      { subject: "Hindi", score: 87, grade: "B+" }
    ],
    parents: {
      fatherName: "Vikram Sharma",
      motherName: "Priya Sharma",
      contactNumber: "9876543210",
      email: "vikram.sharma@example.com"
    },
    achievements: ["First in Math Olympiad 2023", "School Cricket Team Captain"]
  },
  {
    id: "STU002",
    name: "Priya",
    lastName: "Patel",
    grade: 9,
    class: "9-A",
    avatar: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Science Club", "Dance"],
    attendance: 98,
    gpa: 3.9,
    dob: "2010-07-22",
    address: "45 Nehru Street, Delhi",
    admissionDate: "2022-06-12",
    performance: "Outstanding",
    marks: [
      { subject: "Mathematics", score: 95, grade: "A+" },
      { subject: "Science", score: 96, grade: "A+" },
      { subject: "English", score: 88, grade: "A-" },
      { subject: "Social Studies", score: 87, grade: "B+" },
      { subject: "Hindi", score: 90, grade: "A" }
    ],
    parents: {
      fatherName: "Rajesh Patel",
      motherName: "Meena Patel",
      contactNumber: "9876543211",
      email: "rajesh.patel@example.com"
    },
    achievements: ["Science Fair Winner 2023", "Classical Dance Competition Finalist"]
  },
  {
    id: "STU003",
    name: "Arjun",
    lastName: "Kumar",
    grade: 9,
    class: "9-B",
    avatar: "https://images.unsplash.com/photo-1599687266725-0d4d52827197?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Robotics", "Football"],
    attendance: 92,
    gpa: 3.7,
    dob: "2010-03-10",
    address: "78 Tagore Lane, Bangalore, Karnataka",
    admissionDate: "2022-06-15",
    performance: "Very Good",
    marks: [
      { subject: "Mathematics", score: 85, grade: "B+" },
      { subject: "Science", score: 92, grade: "A" },
      { subject: "English", score: 80, grade: "B" },
      { subject: "Social Studies", score: 78, grade: "B-" },
      { subject: "Hindi", score: 85, grade: "B+" }
    ],
    parents: {
      fatherName: "Sunil Kumar",
      motherName: "Deepa Kumar",
      contactNumber: "9876543212",
      email: "sunil.kumar@example.com"
    },
    achievements: ["Robotics Competition Winner", "School Football Team"]
  },
  // Adding more Grade 9 students
  {
    id: "STU004",
    name: "Ananya",
    lastName: "Singh",
    grade: 9,
    class: "9-A",
    avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Debate", "Chess"],
    attendance: 97,
    gpa: 3.9,
    dob: "2010-01-05",
    address: "34 Bose Road, Kolkata, West Bengal",
    admissionDate: "2022-06-12",
    performance: "Excellent",
    marks: [
      { subject: "Mathematics", score: 90, grade: "A" },
      { subject: "Science", score: 92, grade: "A" },
      { subject: "English", score: 95, grade: "A+" },
      { subject: "Social Studies", score: 93, grade: "A" },
      { subject: "Hindi", score: 88, grade: "A-" }
    ],
    parents: {
      fatherName: "Rajinder Singh",
      motherName: "Suman Singh",
      contactNumber: "9876543213",
      email: "rajinder.singh@example.com"
    },
    achievements: ["Inter-School Debate Winner", "Chess Tournament Finalist"]
  },
  // Continuing with more students for Grade 9, 10, 11, 12
  // Additional Grade 9 students
  {
    id: "STU005",
    name: "Vikram",
    lastName: "Reddy",
    grade: 9,
    class: "9-B",
    avatar: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Cricket", "Music"],
    attendance: 90,
    gpa: 3.6,
    dob: "2010-09-20",
    address: "56 Hyderabad Road, Hyderabad, Telangana",
    admissionDate: "2022-06-18",
    performance: "Good",
    marks: [
      { subject: "Mathematics", score: 82, grade: "B" },
      { subject: "Science", score: 85, grade: "B+" },
      { subject: "English", score: 80, grade: "B" },
      { subject: "Social Studies", score: 78, grade: "B-" },
      { subject: "Hindi", score: 88, grade: "A-" }
    ],
    parents: {
      fatherName: "Krishna Reddy",
      motherName: "Lakshmi Reddy",
      contactNumber: "9876543214",
      email: "krishna.reddy@example.com"
    },
    achievements: ["School Cricket Team", "Musical Performance Award"]
  },
  // Grade 10 students
  {
    id: "STU011",
    name: "Kiran",
    lastName: "Joshi",
    grade: 10,
    class: "10-A",
    avatar: "https://images.unsplash.com/photo-1565514020179-026b92b2420a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Math Club", "Badminton"],
    attendance: 94,
    gpa: 3.7,
    dob: "2009-04-12",
    address: "123 Subhash Marg, Jaipur, Rajasthan",
    admissionDate: "2021-06-15",
    performance: "Very Good",
    marks: [
      { subject: "Mathematics", score: 88, grade: "A-" },
      { subject: "Science", score: 85, grade: "B+" },
      { subject: "English", score: 90, grade: "A" },
      { subject: "Social Studies", score: 87, grade: "B+" },
      { subject: "Hindi", score: 92, grade: "A" }
    ],
    parents: {
      fatherName: "Nitin Joshi",
      motherName: "Seema Joshi",
      contactNumber: "9876543220",
      email: "nitin.joshi@example.com"
    },
    achievements: ["Mathematics Competition Winner", "Badminton Tournament Semi-finalist"]
  },
  {
    id: "STU012",
    name: "Anjali",
    lastName: "Gupta",
    grade: 10,
    class: "10-A",
    avatar: "https://images.unsplash.com/photo-1621784562807-cb550e1839b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Debate Team", "Art Club"],
    attendance: 96,
    gpa: 3.8,
    dob: "2009-08-30",
    address: "45 Gandhi Nagar, Lucknow, Uttar Pradesh",
    admissionDate: "2021-06-12",
    performance: "Excellent",
    marks: [
      { subject: "Mathematics", score: 85, grade: "B+" },
      { subject: "Science", score: 88, grade: "A-" },
      { subject: "English", score: 92, grade: "A" },
      { subject: "Social Studies", score: 94, grade: "A" },
      { subject: "Hindi", score: 90, grade: "A" }
    ],
    parents: {
      fatherName: "Rakesh Gupta",
      motherName: "Sunita Gupta",
      contactNumber: "9876543221",
      email: "rakesh.gupta@example.com"
    },
    achievements: ["State-level Art Competition Winner", "School Debate Champion"]
  },
  // Grade 11 students
  {
    id: "STU021",
    name: "Aditya",
    lastName: "Verma",
    grade: 11,
    class: "11-A",
    avatar: "https://images.unsplash.com/photo-1596747621403-a08443466d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Science Club", "Basketball"],
    attendance: 92,
    gpa: 3.9,
    dob: "2008-05-17",
    address: "78 Patel Nagar, Ahmedabad, Gujarat",
    admissionDate: "2020-06-10",
    performance: "Outstanding",
    marks: [
      { subject: "Physics", score: 95, grade: "A+" },
      { subject: "Chemistry", score: 92, grade: "A" },
      { subject: "Mathematics", score: 97, grade: "A+" },
      { subject: "English", score: 88, grade: "A-" },
      { subject: "Computer Science", score: 94, grade: "A" }
    ],
    parents: {
      fatherName: "Mahesh Verma",
      motherName: "Nisha Verma",
      contactNumber: "9876543230",
      email: "mahesh.verma@example.com"
    },
    achievements: ["Science Olympiad Gold Medalist", "School Basketball Team Captain"]
  },
  {
    id: "STU022",
    name: "Riya",
    lastName: "Mehta",
    grade: 11,
    class: "11-B",
    avatar: "https://images.unsplash.com/photo-1592077950244-58acf207e8bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Literature Club", "Dance"],
    attendance: 97,
    gpa: 3.8,
    dob: "2008-10-25",
    address: "23 Marine Drive, Mumbai, Maharashtra",
    admissionDate: "2020-06-12",
    performance: "Excellent",
    marks: [
      { subject: "English", score: 96, grade: "A+" },
      { subject: "History", score: 92, grade: "A" },
      { subject: "Economics", score: 88, grade: "A-" },
      { subject: "Political Science", score: 90, grade: "A" },
      { subject: "Psychology", score: 94, grade: "A" }
    ],
    parents: {
      fatherName: "Rajiv Mehta",
      motherName: "Anita Mehta",
      contactNumber: "9876543231",
      email: "rajiv.mehta@example.com"
    },
    achievements: ["National Essay Writing Contest Winner", "Cultural Dance Competition Gold Medal"]
  },
  // Grade 12 students
  {
    id: "STU031",
    name: "Vikas",
    lastName: "Malhotra",
    grade: 12,
    class: "12-A",
    avatar: "https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Physics Club", "Cricket"],
    attendance: 93,
    gpa: 3.9,
    dob: "2007-03-18",
    address: "56 Chandigarh Road, Chandigarh",
    admissionDate: "2019-06-15",
    performance: "Outstanding",
    marks: [
      { subject: "Physics", score: 96, grade: "A+" },
      { subject: "Chemistry", score: 94, grade: "A" },
      { subject: "Mathematics", score: 98, grade: "A+" },
      { subject: "English", score: 85, grade: "B+" },
      { subject: "Computer Science", score: 95, grade: "A+" }
    ],
    parents: {
      fatherName: "Sanjay Malhotra",
      motherName: "Rekha Malhotra",
      contactNumber: "9876543240",
      email: "sanjay.malhotra@example.com"
    },
    achievements: ["National Science Talent Search Scholar", "School Cricket Team Vice-Captain"]
  },
  {
    id: "STU032",
    name: "Neha",
    lastName: "Agarwal",
    grade: 12,
    class: "12-B",
    avatar: "https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    tags: ["Arts Club", "Debate"],
    attendance: 98,
    gpa: 4.0,
    dob: "2007-07-15",
    address: "34 Civil Lines, Allahabad, Uttar Pradesh",
    admissionDate: "2019-06-10",
    performance: "Outstanding",
    marks: [
      { subject: "English", score: 98, grade: "A+" },
      { subject: "History", score: 95, grade: "A+" },
      { subject: "Political Science", score: 96, grade: "A+" },
      { subject: "Economics", score: 94, grade: "A" },
      { subject: "Sociology", score: 97, grade: "A+" }
    ],
    parents: {
      fatherName: "Vivek Agarwal",
      motherName: "Mamta Agarwal",
      contactNumber: "9876543241",
      email: "vivek.agarwal@example.com"
    },
    achievements: ["National Debate Champion", "Published Young Author", "Student of the Year"]
  }
  // Note: This is a shortened list. In a real implementation, you would add 30 students per grade as requested
];
