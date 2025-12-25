import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  ClipboardCheck,
  Briefcase,
  Mail,
  GraduationCapIcon,
  Award,
  CreditCard,
  Wallet,
  ClipboardList,
  BookMarked,
  FileSpreadsheet,
} from "lucide-react";
import type { Role } from "@/types/role";

export const mahasiswaMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/mahasiswa",
    icon: LayoutDashboard,
  },
  {
    id: "academic",
    title: "Academic",
    href: "/dashboard/mahasiswa/academic",
    icon: Award,
  },
  {
    id: "exams",
    title: "Exams",
    href: "/dashboard/mahasiswa/exams",
    icon: GraduationCapIcon,
  },
  {
    id: "payment",
    title: "Payment",
    href: "/dashboard/mahasiswa/payment",
    icon: CreditCard,
  },
  {
    id: "kkp",
    title: "KKP",
    href: "/dashboard/mahasiswa/kkp",
    icon: Briefcase,
  },
];

// Menu items for staff (staff_tu)
export const staffTuMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/staff_tu",
    icon: LayoutDashboard,
  },
  {
    id: "student-records",
    title: "Student Data",
    href: "/dashboard/staff_tu/student-records",
    icon: Users,
  },
  {
    id: "correspondence",
    title: "Letter Service",
    href: "/dashboard/staff_tu/correspondence",
    icon: Mail,
  },
  {
    id: "exams",
    title: "Exam Management",
    href: "/dashboard/staff_tu/exams",
    icon: GraduationCapIcon,
  },
  {
    id: "kkp-management",
    title: "KKP Management",
    href: "/dashboard/staff_tu/kkp",
    icon: Briefcase,
  },
];

// Menu items for head of study program (prodi)
export const prodiMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/prodi",
    icon: LayoutDashboard,
  },
  {
    id: "exams",
    title: "Exam Management",
    href: "/dashboard/prodi/exams",
    icon: GraduationCapIcon,
  },
  {
    id: "correspondence",
    title: "Letter Service",
    href: "/dashboard/prodi/correspondence",
    icon: Mail,
  },
  {
    id: "kkp-locations",
    title: "KKP Management",
    href: "/dashboard/prodi/kkp-locations",
    icon: Briefcase,
  },
];

// Menu items for dean (dekan)
export const dekanMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/dekan",
    icon: LayoutDashboard,
  },
  {
    id: "vice-dean-2",
    title: "Finance",
    href: "/dashboard/dekan/vice-dean-2",
    icon: Wallet,
  },
  {
    id: "vice-dean-4",
    title: "Administration",
    href: "/dashboard/dekan/vice-dean-4",
    icon: ClipboardList,
  },
];
export const readingRoomAdminMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/reading_room_admin",
    icon: LayoutDashboard,
  },
  {
    id: "books",
    title: "Books",
    href: "/dashboard/reading_room_admin/books",
    icon: BookOpen,
  },
  {
    id: "borrowing",
    title: "Borrowing",
    href: "/dashboard/reading_room_admin/borrowing",
    icon: BookMarked,
  },
  {
    id: "thesis",
    title: "Thesis",
    href: "/dashboard/reading_room_admin/thesis",
    icon: FileText,
  },
  {
    id: "reports",
    title: "Reports",
    href: "/dashboard/reading_room_admin/reports",
    icon: FileSpreadsheet,
  },
];

// Menu items for KKP staff
export const adminUmumMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/admin_umum",
    icon: LayoutDashboard,
  },
  {
    id: "non-regular-students",
    title: "Non Regular Students",
    href: "/dashboard/admin_umum/non-regular-students",
    icon: Users,
  },
  {
    id: "correspondence",
    title: "Correspondence",
    href: "/dashboard/admin_umum/correspondence",
    icon: Mail,
  },
];

// Menu items for admin
export const adminMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    id: "kkp-requests",
    title: "KKP Requests",
    href: "/dashboard/admin/kkp-requests",
    icon: Briefcase,
  },
];

// Menu items for lecturer
export const lecturerMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/lecturer",
    icon: LayoutDashboard,
  },
  {
    id: "academic-guidance",
    title: "Academic Guidance",
    href: "/dashboard/lecturer/academic-guidance",
    icon: BookOpen,
  },
  {
    id: "exam-guidance",
    title: "Exam Guidance",
    href: "/dashboard/lecturer/exam-guidance",
    icon: GraduationCapIcon,
  },
  {
    id: "kkp-guidance",
    title: "KKP Guidance",
    href: "/dashboard/lecturer/kkp-guidance",
    icon: Briefcase,
  },
  {
    id: "supervisions",
    title: "Supervisions",
    href: "/dashboard/lecturer/supervisions",
    icon: ClipboardCheck,
  },
];

export const laboratoryAdminMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/laboratory_admin",
    icon: LayoutDashboard,
  },
  {
    id: "lab-management",
    title: "Lab Management",
    href: "/dashboard/laboratory_admin/lab-management",
    icon: Briefcase,
  },
  {
    id: "registrations",
    title: "Registrations",
    href: "/dashboard/laboratory_admin/registrations",
    icon: ClipboardList,
  },
  {
    id: "assistants",
    title: "Assistants",
    href: "/dashboard/laboratory_admin/assistants",
    icon: Users,
  },
  {
    id: "practicum",
    title: "Practicum",
    href: "/dashboard/laboratory_admin/practicum",
    icon: BookOpen,
  },
];

export const financeAdminMenuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard/admin_keuangan",
    icon: LayoutDashboard,
  },
  {
    id: "payments",
    title: "Payments",
    href: "/dashboard/admin_keuangan/payments",
    icon: CreditCard,
  },
  {
    id: "reports",
    title: "Reports",
    href: "/dashboard/admin_keuangan/reports",
    icon: FileText,
  },
  {
    id: "budget",
    title: "Budget",
    href: "/dashboard/admin_keuangan/budget",
    icon: Wallet,
  },
];

export const menuItems: Record<Role, typeof adminMenuItems> = {
  admin: adminMenuItems,
  dekan: dekanMenuItems,
  dosen: lecturerMenuItems,
  mahasiswa: mahasiswaMenuItems,
  prodi: prodiMenuItems,
  staff_tu: staffTuMenuItems,
  laboratory_admin: laboratoryAdminMenuItems,
  admin_umum: adminUmumMenuItems,
  reading_room_admin: readingRoomAdminMenuItems,
  admin_keuangan: financeAdminMenuItems,
};
