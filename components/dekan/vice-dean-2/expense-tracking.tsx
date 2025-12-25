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
import { Calendar, DollarSign, FileText, TrendingDown } from "lucide-react";

export function ExpenseTracking() {
  const expenses = [
    {
      id: "1",
      description: "Laboratory Equipment Purchase",
      amount: 15000,
      category: "Equipment",
      date: "2025-01-10",
      status: "approved",
    },
    {
      id: "2",
      description: "Conference Travel Expenses",
      amount: 3500,
      category: "Travel",
      date: "2025-01-08",
      status: "pending",
    },
    {
      id: "3",
      description: "Software Licenses",
      amount: 2800,
      category: "Operations",
      date: "2025-01-05",
      status: "approved",
    },
    {
      id: "4",
      description: "Research Materials",
      amount: 4200,
      category: "Research",
      date: "2025-01-03",
      status: "approved",
    },
  ];

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const approvedExpenses = expenses
    .filter((e) => e.status === "approved")
    .reduce((sum, exp) => sum + exp.amount, 0);
  const pendingExpenses = expenses
    .filter((e) => e.status === "pending")
    .reduce((sum, exp) => sum + exp.amount, 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Approved</Badge>
        );
      case "pending":
        return <Badge variant="default">Pending</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Expense Tracking</h1>
        <p className="text-muted-foreground mt-2">
          Monitor and manage faculty expenses
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Expenses
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalExpenses.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${approvedExpenses.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${pendingExpenses.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expenses.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Expenses</CardTitle>
          <CardDescription>
            Latest expense transactions and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{expense.description}</h3>
                    {getStatusBadge(expense.status)}
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      ${expense.amount.toLocaleString()}
                    </span>
                    <span>{expense.category}</span>
                    <span>{new Date(expense.date).toLocaleDateString()}</span>
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
