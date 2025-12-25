"use client";

import { useState, useEffect } from "react";
import { createContext, useContext, type ReactNode } from "react";

// Define the available roles
export type Role =
  | "mahasiswa"
  | "staff_tu"
  | "prodi"
  | "dekan"
  | "admin"
  | "lecturer"
  | "kepala_jurusan"
  | "laboratory_admin"
  | "lecturer";

// Configuration for each role
export const roleConfigs = {
  mahasiswa: {
    path: "/dashboard/mahasiswa",
    displayName: "Student",
  },
  staff_tu: {
    path: "/dashboard/staff_tu",
    displayName: "Program Admin",
  },
  prodi: {
    path: "/dashboard/prodi",
    displayName: "Head of Study Program",
  },
  dekan: {
    path: "/dashboard/dekan",
    displayName: "Dean",
  },
  admin: {
    path: "/dashboard/admin",
    displayName: "Admin",
  },
  lecturer: {
    path: "/dashboard/lecturer",
    displayName: "Lecturer",
  },
  kepala_jurusan: {
    path: "/dashboard/kepala_jurusan",
    displayName: "Head of Department",
  },
  laboratory_admin: {
    path: "/dashboard/laboratory_admin",
    displayName: "Laboratory Admin",
  },
};

// Labels for role selection
export const roleLabels: Record<Role, string> = {
  mahasiswa: "Student",
  staff_tu: "Program Admin",
  prodi: "Head of Study Program",
  dekan: "Dean",
  admin: "Admin",
  lecturer: "Lecturer",
  kepala_jurusan: "Head of Department",
  laboratory_admin: "Laboratory Admin",
};

interface RoleContextType {
  role: Role | null;
  setRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(null);

  // Check for user in localStorage and sync role
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          if (user && user.role) {
            setRole(user.role);
          }
        } catch (error) {
          console.error("Error parsing user from localStorage:", error);
        }
      }
    }
  }, []);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
}

export function getRolePath(role: Role) {
  return roleConfigs[role].path;
}

export function getRoleDisplayName(role: Role) {
  return roleConfigs[role].displayName;
}
