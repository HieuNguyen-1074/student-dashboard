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
import { Users, Shield, Edit, Plus, UserCheck } from "lucide-react";

export default function ProdiExamRoleDashboard() {
  const roles = [
    {
      id: "1",
      name: "Exam Coordinator",
      description: "Oversees all exam scheduling and logistics",
      assignedTo: "Dr. John Smith",
      permissions: ["Schedule Exams", "Approve Venues", "Manage Invigilators"],
      status: "active",
    },
    {
      id: "2",
      name: "Chief Invigilator",
      description: "Supervises exam invigilation teams",
      assignedTo: "Prof. Jane Doe",
      permissions: ["Assign Invigilators", "Monitor Exams", "Report Issues"],
      status: "active",
    },
    {
      id: "3",
      name: "Exam Secretary",
      description: "Handles exam documentation and records",
      assignedTo: "Ms. Sarah Williams",
      permissions: ["Manage Documents", "Generate Reports", "Update Records"],
      status: "active",
    },
    {
      id: "4",
      name: "Technical Support",
      description: "Provides technical assistance during exams",
      assignedTo: "Mr. Robert Johnson",
      permissions: [
        "Setup Equipment",
        "Troubleshoot Issues",
        "Maintain Systems",
      ],
      status: "active",
    },
  ];

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
          <h1 className="text-3xl font-bold">Exam Role Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage exam-related roles and permissions
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Role
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Roles</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{roles.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Roles</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {roles.filter((r) => r.status === "active").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assigned</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {roles.filter((r) => r.assignedTo).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Permissions</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {roles.reduce((sum, r) => sum + r.permissions.length, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Roles</CardTitle>
          <CardDescription>
            Roles and their assignments for exam management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.id} className="p-4 border rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Shield className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">{role.name}</h3>
                      {getStatusBadge(role.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {role.description}
                    </p>
                    {role.assignedTo && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4" />
                        <span className="font-medium">Assigned to:</span>
                        <span className="text-muted-foreground">
                          {role.assignedTo}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-sm font-medium">Permissions:</span>
                      {role.permissions.map((permission, index) => (
                        <Badge key={index} variant="outline">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Assign
                    </Button>
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
            <CardTitle>Role Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold text-sm mb-1">
                  Standard Exam Team
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Coordinator, Chief Invigilator, and Secretary
                </p>
                <Button variant="outline" size="sm">
                  Use Template
                </Button>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Full Exam Team</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  All roles including technical support
                </p>
                <Button variant="outline" size="sm">
                  Use Template
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              View All Assignments
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Shield className="mr-2 h-4 w-4" />
              Manage Permissions
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Edit className="mr-2 h-4 w-4" />
              Edit Role Descriptions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
