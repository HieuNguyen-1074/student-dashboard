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
  FileText,
  Users,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function ProdiExamSection() {
  const examStats = {
    totalExams: 24,
    scheduled: 18,
    pendingApproval: 6,
    completed: 12,
  };

  const recentExams = [
    {
      id: "1",
      course: "Data Structures",
      examType: "Midterm Exam",
      date: "2025-01-15",
      students: 45,
      status: "scheduled",
    },
    {
      id: "2",
      course: "Database Systems",
      examType: "Final Exam",
      date: "2025-01-20",
      students: 38,
      status: "scheduled",
    },
    {
      id: "3",
      course: "Web Programming",
      examType: "Quiz 4",
      date: "2025-01-12",
      students: 42,
      status: "scheduled",
    },
  ];

  const pendingApprovals = [
    {
      id: "1",
      course: "Operating Systems",
      requestedBy: "Dr. Sarah Williams",
      requestDate: "2024-12-20",
    },
    {
      id: "2",
      course: "Software Engineering",
      requestedBy: "Prof. Michael Brown",
      requestDate: "2024-12-21",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Exam Management</h1>
        <p className="text-muted-foreground mt-2">
          Manage and oversee all examinations
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{examStats.totalExams}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{examStats.scheduled}</div>
            <p className="text-xs text-muted-foreground">Upcoming exams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Approval
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {examStats.pendingApproval}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{examStats.completed}</div>
            <p className="text-xs text-muted-foreground">Finished exams</p>
          </CardContent>
        </Card>
      </div>

      {pendingApprovals.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>
                  Exam requests requiring your attention
                </CardDescription>
              </div>
              <Link href="/dashboard/prodi/exams/approval">
                <Button size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingApprovals.map((approval) => (
                <div
                  key={approval.id}
                  className="flex items-center justify-between p-3 border rounded-lg bg-blue-50/50"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                      <h4 className="font-semibold text-sm">
                        {approval.course}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Requested by {approval.requestedBy} on{" "}
                      {new Date(approval.requestDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Scheduled Exams</CardTitle>
              <CardDescription>Upcoming examinations</CardDescription>
            </div>
            <Link href="/dashboard/prodi/exams/schedule">
              <Button size="sm" variant="outline">
                View Schedule
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentExams.map((exam) => (
              <div
                key={exam.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{exam.course}</h3>
                    <Badge>Scheduled</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exam.examType}
                  </p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(exam.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{exam.students} students</span>
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

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/dashboard/prodi/exams/approval">
              <Button variant="outline" className="w-full justify-start">
                <AlertCircle className="mr-2 h-4 w-4" />
                Review Exam Requests
              </Button>
            </Link>
            <Link href="/dashboard/prodi/exams/schedule">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                View Exam Schedule
              </Button>
            </Link>
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Generate Reports
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium">Exam Approved</p>
                <p className="text-muted-foreground text-xs">
                  Web Programming Quiz 4 - 2 hours ago
                </p>
              </div>
              <div className="text-sm">
                <p className="font-medium">New Request</p>
                <p className="text-muted-foreground text-xs">
                  Operating Systems Midterm - 5 hours ago
                </p>
              </div>
              <div className="text-sm">
                <p className="font-medium">Schedule Updated</p>
                <p className="text-muted-foreground text-xs">
                  Database Systems Final - Yesterday
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
