"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  FileText,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface ExamSchedule {
  id: string;
  course: string;
  type: string;
  date: string;
  time: string;
  location: string;
  status: "upcoming" | "completed" | "ongoing";
  score?: number;
}

const mockExams: ExamSchedule[] = [
  {
    id: "1",
    course: "Data Structures",
    type: "Midterm Exam",
    date: "2025-01-15",
    time: "09:00 - 11:00",
    location: "Room A-201",
    status: "upcoming",
  },
  {
    id: "2",
    course: "Database Systems",
    type: "Final Exam",
    date: "2025-01-20",
    time: "13:00 - 15:00",
    location: "Room B-105",
    status: "upcoming",
  },
  {
    id: "3",
    course: "Web Programming",
    type: "Midterm Exam",
    date: "2024-12-10",
    time: "10:00 - 12:00",
    location: "Room C-301",
    status: "completed",
    score: 85,
  },
  {
    id: "4",
    course: "Operating Systems",
    type: "Quiz",
    date: "2024-12-15",
    time: "14:00 - 15:00",
    location: "Room A-102",
    status: "completed",
    score: 92,
  },
];

export default function StudentExamDashboard() {
  const upcomingExams = mockExams.filter((exam) => exam.status === "upcoming");
  const completedExams = mockExams.filter(
    (exam) => exam.status === "completed"
  );
  const averageScore =
    completedExams.length > 0
      ? Math.round(
          completedExams.reduce((sum, exam) => sum + (exam.score || 0), 0) /
            completedExams.length
        )
      : 0;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge variant="default">Upcoming</Badge>;
      case "completed":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
        );
      case "ongoing":
        return <Badge variant="destructive">Ongoing</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Exam Schedule</h1>
        <p className="text-muted-foreground mt-2">
          View your exam schedule and results
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Exams
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingExams.length}</div>
            <p className="text-xs text-muted-foreground">Scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Exams
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedExams.length}</div>
            <p className="text-xs text-muted-foreground">Finished</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageScore}</div>
            <p className="text-xs text-muted-foreground">Out of 100</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Exams */}
      {upcomingExams.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Exams</CardTitle>
            <CardDescription>
              Exams scheduled for the near future
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingExams.map((exam) => (
                <div
                  key={exam.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{exam.course}</h3>
                      {getStatusBadge(exam.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{exam.type}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(exam.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{exam.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>{exam.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 sm:mt-0">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Completed Exams */}
      {completedExams.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Completed Exams</CardTitle>
            <CardDescription>Exams you have already taken</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {completedExams.map((exam) => (
                <div
                  key={exam.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{exam.course}</h3>
                      {getStatusBadge(exam.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{exam.type}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(exam.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{exam.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>{exam.location}</span>
                      </div>
                      {exam.score !== undefined && (
                        <div className="flex items-center gap-1 font-medium">
                          <span>Score: {exam.score}/100</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 sm:mt-0">
                    View Result
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {mockExams.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Exams Scheduled</h3>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              You don't have any exams scheduled at the moment. Check back later
              for updates.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
