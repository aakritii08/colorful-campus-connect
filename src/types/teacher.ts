
export interface Teacher {
  id: string;
  name: string;
  lastName: string;
  position: string;
  subjects: string[];
  avatar?: string;
  email: string;
  phone: string;
  experience: number;
  
  // Additional fields
  gender: string;
  qualification: string;
  salary: number;
  dateOfJoining: string;
}
