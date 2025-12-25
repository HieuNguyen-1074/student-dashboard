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
  MapPin,
  Users,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
} from "lucide-react";

export default function ExamScheduleManager() {
  const schedules = [
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
      students: 45,
      invigilators: ["Prof. Michael Brown", "Dr. Sarah Wilson"],
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
      students: 38,
      invigilators: ["Dr. Robert Johnson"],
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
      students: 42,
      invigilators: ["Ms. Emily Davis"],
      status: "pending",
    },
  ];

  const scheduledExams = schedules.filter((s) => s.status === "scheduled");
  const pendingExams = schedules.filter((s) => s.status === "pending");
  const totalStudents = schedules.reduce((sum, s) => sum + s.students, 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Scheduled</Badge>
        );
      case "pending":
        return <Badge variant="default">Pending</Badge>;
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
          <h1 className="text-3xl font-bold">Exam Schedule Manager</h1>
          <p className="text-muted-foreground mt-2">
            Create and manage exam schedules
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Exam
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schedules.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scheduledExams.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingExams.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Schedules</CardTitle>
          <CardDescription>
            All scheduled and pending examinations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="p-4 border rounded-lg">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold">{schedule.course}</h3>
                        <Badge variant="outline">{schedule.courseCode}</Badge>
                        {getStatusBadge(schedule.status)}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {schedule.examType}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(schedule.date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>
                            {schedule.time} ({schedule.duration})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {schedule.location}, {schedule.building}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{schedule.students} students</span>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">
                          Instructor:
                        </span>{" "}
                        {schedule.instructor}
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">
                          Invigilators:
                        </span>{" "}
                        {schedule.invigilators.join(", ")}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {schedules.slice(0, 3).map((schedule) => (
                <div
                  key={schedule.id}
                  className="flex justify-between items-center text-sm"
                >
                  <div>
                    <p className="font-medium">{schedule.course}</p>
                    <p className="text-muted-foreground text-xs">
                      {new Date(schedule.date).toLocaleDateString()} at{" "}
                      {schedule.time}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              View Calendar
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MapPin className="mr-2 h-4 w-4" />
              Check Room Availability
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Assign Invigilators
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
