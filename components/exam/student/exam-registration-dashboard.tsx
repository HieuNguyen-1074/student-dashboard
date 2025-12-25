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
import { Calendar, Clock, Users, CheckCircle, XCircle } from "lucide-react";

export default function ExamRegistrationDashboard() {
  const availableExams = [
    {
      id: "1",
      course: "Data Structures",
      type: "Midterm Exam",
      date: "2025-01-15",
      time: "09:00 - 11:00",
      location: "Room A-201",
      capacity: 50,
      registered: 35,
      status: "open",
      deadline: "2025-01-10",
    },
    {
      id: "2",
      course: "Database Systems",
      type: "Final Exam",
      date: "2025-01-20",
      time: "13:00 - 15:00",
      location: "Room B-105",
      capacity: 40,
      registered: 28,
      status: "open",
      deadline: "2025-01-15",
    },
    {
      id: "3",
      course: "Web Programming",
      type: "Final Exam",
      date: "2025-01-25",
      time: "10:00 - 12:00",
      location: "Room C-301",
      capacity: 45,
      registered: 45,
      status: "full",
      deadline: "2025-01-20",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-green-500 hover:bg-green-600">Open</Badge>;
      case "full":
        return <Badge variant="destructive">Full</Badge>;
      case "closed":
        return <Badge variant="secondary">Closed</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Exam Registration</h1>
        <p className="text-muted-foreground mt-2">
          Register for upcoming exams
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Available Exams
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {availableExams.filter((e) => e.status === "open").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Registered</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{availableExams.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Exams</CardTitle>
          <CardDescription>
            Register for exams before the deadline
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {availableExams.map((exam) => (
              <div
                key={exam.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{exam.course}</h3>
                    {getStatusBadge(exam.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{exam.type}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
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
                      <Users className="h-4 w-4" />
                      <span>
                        {exam.registered}/{exam.capacity} registered
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Registration deadline:{" "}
                    {new Date(exam.deadline).toLocaleDateString()}
                  </p>
                </div>
                <Button
                  disabled={exam.status !== "open"}
                  size="sm"
                  className="mt-4 sm:mt-0"
                >
                  {exam.status === "open"
                    ? "Register"
                    : exam.status === "full"
                    ? "Full"
                    : "Closed"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
