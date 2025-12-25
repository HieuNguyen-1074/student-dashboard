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
import { Calendar, Clock, MapPin, BookOpen, Filter } from "lucide-react";

export default function ExamScheduleDashboard() {
  const schedule = [
    {
      id: "1",
      course: "Data Structures",
      courseCode: "CS201",
      examType: "Midterm Exam",
      date: "2025-01-15",
      time: "09:00 - 11:00",
      duration: "120 minutes",
      location: "Room A-201",
      building: "Engineering Building A",
      instructor: "Dr. John Smith",
      status: "scheduled",
    },
    {
      id: "2",
      course: "Database Systems",
      courseCode: "CS301",
      examType: "Final Exam",
      date: "2025-01-20",
      time: "13:00 - 15:00",
      duration: "120 minutes",
      location: "Room B-105",
      building: "Engineering Building B",
      instructor: "Prof. Jane Doe",
      status: "scheduled",
    },
    {
      id: "3",
      course: "Web Programming",
      courseCode: "CS202",
      examType: "Quiz 4",
      date: "2025-01-12",
      time: "10:00 - 11:00",
      duration: "60 minutes",
      location: "Room C-301",
      building: "Engineering Building C",
      instructor: "Dr. Robert Johnson",
      status: "scheduled",
    },
    {
      id: "4",
      course: "Operating Systems",
      courseCode: "CS302",
      examType: "Midterm Exam",
      date: "2024-12-18",
      time: "14:00 - 16:00",
      duration: "120 minutes",
      location: "Room A-102",
      building: "Engineering Building A",
      instructor: "Dr. Sarah Williams",
      status: "completed",
    },
  ];

  const upcomingExams = schedule.filter((e) => e.status === "scheduled");
  const completedExams = schedule.filter((e) => e.status === "completed");
  const thisWeekExams = upcomingExams.filter((e) => {
    const examDate = new Date(e.date);
    const today = new Date();
    const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return examDate >= today && examDate <= weekFromNow;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge variant="default">Scheduled</Badge>;
      case "completed":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
        );
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Exam Schedule</h1>
          <p className="text-muted-foreground mt-2">
            View your complete exam schedule
          </p>
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schedule.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingExams.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{thisWeekExams.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedExams.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Exams</CardTitle>
          <CardDescription>Your scheduled examinations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingExams.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No upcoming exams scheduled
              </p>
            ) : (
              upcomingExams.map((exam) => (
                <div
                  key={exam.id}
                  className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold">{exam.course}</h3>
                        <Badge variant="outline">{exam.courseCode}</Badge>
                        {getStatusBadge(exam.status)}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {exam.examType}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(exam.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>
                            {exam.time} ({exam.duration})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {exam.location}, {exam.building}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          <span>{exam.instructor}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {completedExams.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Completed Exams</CardTitle>
            <CardDescription>Past examinations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {completedExams.map((exam) => (
                <div key={exam.id} className="p-4 border rounded-lg opacity-75">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{exam.course}</h3>
                        <Badge variant="outline">{exam.courseCode}</Badge>
                        {getStatusBadge(exam.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exam.examType}
                      </p>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{new Date(exam.date).toLocaleDateString()}</span>
                        <span>{exam.time}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Result
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
