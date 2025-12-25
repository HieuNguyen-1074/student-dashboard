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
  MapPin,
  Building,
  Users,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
} from "lucide-react";

export default function KKPLocationsDashboard() {
  const locations = [
    {
      id: "1",
      name: "PT. Telkom Indonesia",
      type: "Company",
      address: "Jl. Gatot Subroto No. 52, Jakarta",
      capacity: 10,
      currentStudents: 8,
      supervisor: "Mr. Ahmad Hassan",
      contact: "+62 21 1234567",
      status: "active",
    },
    {
      id: "2",
      name: "Bank Mandiri HQ",
      type: "Company",
      address: "Jl. Jenderal Gatot Subroto Kav. 36-38, Jakarta",
      capacity: 5,
      currentStudents: 5,
      supervisor: "Ms. Siti Nurhaliza",
      contact: "+62 21 2345678",
      status: "full",
    },
    {
      id: "3",
      name: "Universitas Muhammadiyah Makassar",
      type: "University",
      address: "Jl. Sultan Alauddin No. 259, Makassar",
      capacity: 15,
      currentStudents: 12,
      supervisor: "Dr. Abdullah Rahman",
      contact: "+62 411 866720",
      status: "active",
    },
    {
      id: "4",
      name: "PT. Pertamina Region VII",
      type: "Company",
      address: "Jl. Ahmad Yani, Makassar",
      capacity: 8,
      currentStudents: 6,
      supervisor: "Mr. Budi Santoso",
      contact: "+62 411 456789",
      status: "active",
    },
  ];

  const activeLocations = locations.filter((l) => l.status === "active");
  const fullLocations = locations.filter((l) => l.status === "full");
  const totalCapacity = locations.reduce((sum, l) => sum + l.capacity, 0);
  const totalStudents = locations.reduce(
    (sum, l) => sum + l.currentStudents,
    0
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
        );
      case "full":
        return <Badge variant="destructive">Full</Badge>;
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return null;
    }
  };

  const getTypeBadge = (type: string) => {
    return type === "Company" ? (
      <Badge variant="outline">Company</Badge>
    ) : (
      <Badge variant="outline">University</Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">KKP Locations</h1>
          <p className="text-muted-foreground mt-2">
            Manage internship placement locations
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Location
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Locations
            </CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{locations.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeLocations.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Capacity
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCapacity}</div>
            <p className="text-xs text-muted-foreground">
              {totalStudents} students placed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Full Locations
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fullLocations.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>KKP Partner Locations</CardTitle>
          <CardDescription>
            Companies and institutions accepting KKP students
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {locations.map((location) => (
              <div key={location.id} className="p-4 border rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Building className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">{location.name}</h3>
                      {getTypeBadge(location.type)}
                      {getStatusBadge(location.status)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{location.address}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>
                          Capacity: {location.currentStudents}/
                          {location.capacity}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Supervisor:
                        </span>{" "}
                        {location.supervisor}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Contact:</span>{" "}
                        {location.contact}
                      </div>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 mt-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${
                            (location.currentStudents / location.capacity) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
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
            <CardTitle>Location Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Companies</span>
                <span className="font-semibold">
                  {locations.filter((l) => l.type === "Company").length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Universities
                </span>
                <span className="font-semibold">
                  {locations.filter((l) => l.type === "University").length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Utilization Rate
                </span>
                <span className="font-semibold">
                  {Math.round((totalStudents / totalCapacity) * 100)}%
                </span>
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
              <MapPin className="mr-2 h-4 w-4" />
              View Map
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Assign Students
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Building className="mr-2 h-4 w-4" />
              Export Location List
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
