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
import { FileText, Upload, CheckCircle, Clock, XCircle } from "lucide-react";

export default function ExamSubmissionsDashboard() {
  const submissions = [
    {
      id: "1",
      course: "Data Structures",
      examType: "Midterm Exam",
      submittedDate: "2024-12-15",
      status: "graded",
      score: 85,
      maxScore: 100,
    },
    {
      id: "2",
      course: "Web Programming",
      examType: "Final Project",
      submittedDate: "2024-12-20",
      status: "pending",
      score: null,
      maxScore: 100,
    },
    {
      id: "3",
      course: "Operating Systems",
      examType: "Quiz 3",
      submittedDate: "2024-12-18",
      status: "graded",
      score: 92,
      maxScore: 100,
    },
  ];

  const pendingSubmissions = [
    {
      id: "1",
      course: "Database Systems",
      examType: "Final Exam",
      dueDate: "2025-01-20",
      status: "not_submitted",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "graded":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Graded</Badge>
        );
      case "pending":
        return <Badge variant="default">Pending Review</Badge>;
      case "not_submitted":
        return <Badge variant="destructive">Not Submitted</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "graded":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "not_submitted":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Exam Submissions</h1>
        <p className="text-muted-foreground mt-2">
          View your exam submissions and grades
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Submissions
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Graded</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {submissions.filter((s) => s.status === "graded").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {submissions.filter((s) => s.status === "pending").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {submissions.filter((s) => s.score !== null).length > 0
                ? Math.round(
                    submissions
                      .filter((s) => s.score !== null)
                      .reduce((sum, s) => sum + (s.score || 0), 0) /
                      submissions.filter((s) => s.score !== null).length
                  )
                : 0}
            </div>
          </CardContent>
        </Card>
      </div>

      {pendingSubmissions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Submissions</CardTitle>
            <CardDescription>
              Exams that require your submission
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg border-destructive/50"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{submission.course}</h3>
                      {getStatusBadge(submission.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {submission.examType}
                    </p>
                    <p className="text-sm text-destructive">
                      Due: {new Date(submission.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Button size="sm" className="mt-4 sm:mt-0">
                    <Upload className="mr-2 h-4 w-4" />
                    Submit
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Submission History</CardTitle>
          <CardDescription>
            Your past exam submissions and grades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(submission.status)}
                    <h3 className="font-semibold">{submission.course}</h3>
                    {getStatusBadge(submission.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {submission.examType}
                  </p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>
                      Submitted:{" "}
                      {new Date(submission.submittedDate).toLocaleDateString()}
                    </span>
                    {submission.score !== null && (
                      <span className="font-medium text-foreground">
                        Score: {submission.score}/{submission.maxScore}
                      </span>
                    )}
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
    </div>
  );
}
