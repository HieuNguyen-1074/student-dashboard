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
  FileText,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function ExamRequirementsManagement() {
  const requirements = [
    {
      id: "1",
      name: "Minimum Attendance",
      description: "Student must have at least 75% attendance",
      examTypes: ["Midterm", "Final"],
      mandatory: true,
      status: "active",
    },
    {
      id: "2",
      name: "Completed Assignments",
      description: "All assignments must be submitted before exam",
      examTypes: ["Final"],
      mandatory: true,
      status: "active",
    },
    {
      id: "3",
      name: "Lab Work Completion",
      description: "All lab sessions must be completed",
      examTypes: ["Final"],
      mandatory: false,
      status: "active",
    },
    {
      id: "4",
      name: "Payment Verification",
      description: "Tuition fees must be paid in full",
      examTypes: ["Midterm", "Final"],
      mandatory: true,
      status: "active",
    },
  ];

  const activeRequirements = requirements.filter((r) => r.status === "active");
  const mandatoryRequirements = requirements.filter((r) => r.mandatory);

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
    ) : (
      <Badge variant="secondary">Inactive</Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Exam Requirements Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage requirements for exam eligibility
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Requirement
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Requirements
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{requirements.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activeRequirements.length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mandatory</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mandatoryRequirements.length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Requirements</CardTitle>
          <CardDescription>
            Requirements that students must meet to be eligible for exams
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {requirements.map((requirement) => (
              <div
                key={requirement.id}
                className="flex flex-col sm:flex-row sm:items-start justify-between p-4 border rounded-lg"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold">{requirement.name}</h3>
                    {getStatusBadge(requirement.status)}
                    {requirement.mandatory && (
                      <Badge variant="destructive">Mandatory</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {requirement.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {requirement.examTypes.map((type, index) => (
                      <Badge key={index} variant="outline">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Requirement Templates</CardTitle>
          <CardDescription>
            Common requirement templates you can use
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">
                Standard Academic Requirements
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Includes attendance, assignments, and payment verification
              </p>
              <Button variant="outline" size="sm">
                Use Template
              </Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">
                Technical Course Requirements
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Includes lab work completion and project submissions
              </p>
              <Button variant="outline" size="sm">
                Use Template
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
