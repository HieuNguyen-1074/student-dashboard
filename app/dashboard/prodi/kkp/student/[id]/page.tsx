"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronLeft,
  Building,
  User,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  FileText,
  Download,
  Users,
  FileCheck,
  RotateCcw,
  AlertCircle,
  Home,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  Bookmark,
  FileSymlink,
} from "lucide-react";

export default function StudentKkpDetailPage() {
  return <></>;
}

function LoadingSkeleton() {
  return (
    <div className="container py-6 mx-auto">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" className="gap-1" disabled>
          <ChevronLeft className="w-4 h-4" />
          Back to List
        </Button>
      </div>

      <div className="mb-6">
        <Skeleton className="w-64 h-10 mb-2" />
        <div className="flex items-center gap-2">
          <Skeleton className="w-24 h-6" />
          <Skeleton className="w-32 h-6" />
          <Skeleton className="h-6 w-28" />
        </div>
      </div>

      <div className="mb-4">
        <Skeleton className="h-10 w-96" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-64" />
      </div>
    </div>
  );
}
