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
  CheckCircle,
  XCircle,
  AlertCircle,
  FileText,
} from "lucide-react";

export default function ProdiExamApprovalDashboard() {
  const examRequests = [
    {
      id: "1",
      course: "Data Structures",
      courseCode: "CS201",
      examType: "Midterm Exam",
      requestedBy: "Dr. John Smith",
      requestDate: "2024-12-20",
      proposedDate: "2025-01-15",
      proposedTime: "09:00 - 11:00",
      location: "Room A-201",
      studentsCount: 45,
      status: "pending",
    },
    {
      id: "2",
      course: "Database Systems",
      courseCode: "CS301",
      examType: "Final Exam",
      requestedBy: "Prof. Jane Doe",
      requestDate: "2024-12-18",
      proposedDate: "2025-01-20",
      proposedTime: "13:00 - 15:00",
      location: "Room B-105",
      studentsCount: 38,
      status: "pending",
    },
    {
      id: "3",
      course: "Web Programming",
      courseCode: "CS202",
      examType: "Quiz 4",
      requestedBy: "Dr. Robert Johnson",
      requestDate: "2024-12-15",
      proposedDate: "2025-01-12",
      proposedTime: "10:00 - 11:00",
      location: "Room C-301",
      studentsCount: 42,
      status: "approved",
    },
    {
      id: "4",
      course: "Operating Systems",
      courseCode: "CS302",
      examType: "Midterm Exam",
      requestedBy: "Dr. Sarah Williams",
      requestDate: "2024-12-10",
      proposedDate: "2025-01-08",
      proposedTime: "14:00 - 16:00",
      location: "Room A-102",
      studentsCount: 35,
      status: "rejected",
    },
  ];

  const pendingRequests = examRequests.filter((r) => r.status === "pending");
  const approvedRequests = examRequests.filter((r) => r.status === "approved");
  const rejectedRequests = examRequests.filter((r) => r.status === "rejected");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="default">Pending Review</Badge>;
      case "approved":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Approved</Badge>
        );
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <AlertCircle className="h-4 w-4 text-blue-500" />;
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Exam Approval</h1>
        <p className="text-muted-foreground mt-2">
          Review and approve exam requests
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Requests
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{examRequests.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingRequests.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvedRequests.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rejectedRequests.length}</div>
          </CardContent>
        </Card>
      </div>

      {pendingRequests.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
            <CardDescription>
              Exam requests awaiting your approval
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 border rounded-lg border-blue-200 bg-blue-50/50"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {getStatusIcon(request.status)}
                          <h3 className="font-semibold">{request.course}</h3>
                          <Badge variant="outline">{request.courseCode}</Badge>
                          {getStatusBadge(request.status)}
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {request.examType}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              Proposed:{" "}
                              {new Date(
                                request.proposedDate
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{request.proposedTime}</span>
                          </div>
                          <div>Location: {request.location}</div>
                          <div>Students: {request.studentsCount}</div>
                          <div>Requested by: {request.requestedBy}</div>
                          <div>
                            Request date:{" "}
                            {new Date(request.requestDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600"
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <XCircle className="mr-2 h-4 w-4" />
                        Reject
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>All Exam Requests</CardTitle>
          <CardDescription>
            Complete history of exam approval requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {examRequests.map((request) => (
              <div key={request.id} className="p-4 border rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {getStatusIcon(request.status)}
                      <h3 className="font-semibold">{request.course}</h3>
                      <Badge variant="outline">{request.courseCode}</Badge>
                      {getStatusBadge(request.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {request.examType}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>
                        {new Date(request.proposedDate).toLocaleDateString()}
                      </span>
                      <span>{request.proposedTime}</span>
                      <span>{request.location}</span>
                      <span>{request.studentsCount} students</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Requested by {request.requestedBy} on{" "}
                      {new Date(request.requestDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
