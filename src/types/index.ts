export type UserRole = 'guest' | 'student' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  phone?: string;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  certificates: Certificate[];
  favorites: string[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'article' | 'quiz' | 'tool';
  contentSummary: string;
  videoUrl?: string;
  notes?: string;
  resources?: { name: string; url: string; size: string }[];
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: 'Iniciante' | 'Intermédio' | 'Avançado' | 'Marketing' | 'Gestão' | 'Tecnologia' | 'Empreendedorismo';
  description: string;
  longDescription: string;
  level: 'Iniciante' | 'Intermédio' | 'Avançado';
  duration: string;
  totalLessons: number;
  priceKz: number;
  priceFormatted: string;
  rating: number;
  reviewsCount: number;
  image: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  highlights: string[];
  modules: CourseModule[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
}

export interface Certificate {
  id: string;
  courseId: string;
  courseTitle: string;
  studentName: string;
  issueDate: string;
  verificationCode: string;
  grade: string;
}

export interface LeadSubmission {
  id: string;
  type: 'contact' | 'newsletter' | 'service_quote';
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  selectedServices?: string[];
  estimatedBudget?: string;
  date: string;
  status: 'new' | 'contacted' | 'resolved';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  estimatedPriceKz: number;
  iconName: string;
  category: 'tech' | 'growth' | 'operations';
}
