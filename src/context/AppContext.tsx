import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, Article, UserProfile, LeadSubmission, Certificate, Lesson } from '../types';
import { COURSES, ARTICLES } from '../data/mockData';

export type ActiveView = 
  | 'home' 
  | 'courses' 
  | 'course_detail' 
  | 'services' 
  | 'blog' 
  | 'article_detail' 
  | 'student_portal' 
  | 'admin_portal' 
  | 'contact';

interface AppContextType {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article | null) => void;
  activeLesson: Lesson | null;
  setActiveLesson: (lesson: Lesson | null) => void;
  currentUser: UserProfile;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authMode: 'login' | 'register';
  setAuthMode: (mode: 'login' | 'register') => void;
  isServiceQuoteModalOpen: boolean;
  setIsServiceQuoteModalOpen: (open: boolean) => void;
  selectedCertificate: Certificate | null;
  setSelectedCertificate: (cert: Certificate | null) => void;
  isDocsModalOpen: boolean;
  setIsDocsModalOpen: (open: boolean) => void;
  
  // Actions
  enrollInCourse: (courseId: string) => void;
  toggleCompleteLesson: (lessonId: string) => void;
  toggleFavorite: (courseId: string) => void;
  submitLead: (lead: Omit<LeadSubmission, 'id' | 'date' | 'status'>) => void;
  leadsList: LeadSubmission[];
  allCourses: Course[];
  setAllCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const INITIAL_USER: UserProfile = {
  id: 'usr-101',
  name: 'Carlos Bento',
  email: 'carlos.bento@gmail.com',
  role: 'student',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  phone: '+244 923 456 789',
  enrolledCourseIds: ['curso-01', 'curso-03'],
  completedLessonIds: ['les-01-1', 'les-01-2', 'les-05-1', 'les-05-2'],
  certificates: [
    {
      id: 'cert-8891',
      courseId: 'curso-01',
      courseTitle: 'Como Criar um Delivery do Zero',
      studentName: 'Carlos Bento',
      issueDate: '24 Setembro 2026',
      verificationCode: 'AD-AO-8891-2026',
      grade: 'Distinção (96%)'
    }
  ],
  favorites: ['curso-02', 'curso-04']
};

const INITIAL_LEADS: LeadSubmission[] = [
  {
    id: 'lead-1',
    type: 'contact',
    name: 'Joaquim Silva',
    email: 'joaquim.silva@empresa.ao',
    phone: '+244 912 345 678',
    subject: 'Desenvolvimento de App de Restaurante',
    message: 'Gostaria de solicitar um orçamento para criar a nossa aplicação de entregas para duas filiais em Talatona.',
    date: '28/09/2026',
    status: 'new'
  },
  {
    id: 'lead-2',
    type: 'service_quote',
    name: 'Ana Carolina Santos',
    email: 'ana.santos@doceria.ao',
    phone: '+244 945 889 123',
    selectedServices: ['Criação de Website', 'Automação WhatsApp'],
    estimatedBudget: '250.000 Kz',
    message: 'Pretendo abrir loja de bolos e doces com entregas rápidas.',
    date: '27/09/2026',
    status: 'contacted'
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [allCourses, setAllCourses] = useState<Course[]>(COURSES);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isServiceQuoteModalOpen, setIsServiceQuoteModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [leadsList, setLeadsList] = useState<LeadSubmission[]>(INITIAL_LEADS);

  // Initialize or read from localStorage if present
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('ad_user_profile');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_USER;
  });

  useEffect(() => {
    try {
      localStorage.setItem('ad_user_profile', JSON.stringify(currentUser));
    } catch {
      // ignore
    }
  }, [currentUser]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const scrollToSection = (sectionId: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const enrollInCourse = (courseId: string) => {
    if (currentUser.enrolledCourseIds.includes(courseId)) {
      showToast('Já está inscrito neste curso. A redirecionar para a Área do Aluno...');
      const course = allCourses.find(c => c.id === courseId);
      if (course) setSelectedCourse(course);
      setActiveView('student_portal');
      return;
    }

    const course = allCourses.find(c => c.id === courseId);
    setCurrentUser(prev => ({
      ...prev,
      enrolledCourseIds: [...prev.enrolledCourseIds, courseId]
    }));

    showToast(`Parabéns! Inscrição confirmada no curso: ${course?.title || 'Delivery'}`);
    if (course) setSelectedCourse(course);
    setActiveView('student_portal');
  };

  const toggleCompleteLesson = (lessonId: string) => {
    setCurrentUser(prev => {
      const exists = prev.completedLessonIds.includes(lessonId);
      const updated = exists 
        ? prev.completedLessonIds.filter(id => id !== lessonId)
        : [...prev.completedLessonIds, lessonId];
      return {
        ...prev,
        completedLessonIds: updated
      };
    });
    showToast('Progresso de aula atualizado com sucesso!');
  };

  const toggleFavorite = (courseId: string) => {
    setCurrentUser(prev => {
      const exists = prev.favorites.includes(courseId);
      const updated = exists 
        ? prev.favorites.filter(id => id !== courseId)
        : [...prev.favorites, courseId];
      return {
        ...prev,
        favorites: updated
      };
    });
  };

  const submitLead = (leadData: Omit<LeadSubmission, 'id' | 'date' | 'status'>) => {
    const newLead: LeadSubmission = {
      ...leadData,
      id: `lead-${Date.now()}`,
      date: new Date().toLocaleDateString('pt-AO'),
      status: 'new'
    };
    setLeadsList(prev => [newLead, ...prev]);
    showToast('Mensagem enviada com sucesso! A nossa equipa entrará em contacto brevemente.');
  };

  return (
    <AppContext.Provider
      value={{
        activeView,
        setActiveView,
        selectedCourse,
        setSelectedCourse,
        selectedArticle,
        setSelectedArticle,
        activeLesson,
        setActiveLesson,
        currentUser,
        setCurrentUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authMode,
        setAuthMode,
        isServiceQuoteModalOpen,
        setIsServiceQuoteModalOpen,
        selectedCertificate,
        setSelectedCertificate,
        isDocsModalOpen,
        setIsDocsModalOpen,
        enrollInCourse,
        toggleCompleteLesson,
        toggleFavorite,
        submitLead,
        leadsList,
        allCourses,
        setAllCourses,
        toastMessage,
        showToast,
        scrollToSection
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
