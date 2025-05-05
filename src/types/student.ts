
export interface Student {
  id: string;
  name: string;
  lastName: string;
  grade: number;
  class: string;
  avatar?: string;
  tags: string[];
  attendance: number;
  gpa: number;
  
  // Additional fields
  dob: string;
  address: string;
  admissionDate: string;
  performance: string;
  marks: {
    subject: string;
    score: number;
    grade: string;
  }[];
  parents: {
    fatherName: string;
    motherName: string;
    contactNumber: string;
    email: string;
  };
  achievements: string[];
}
