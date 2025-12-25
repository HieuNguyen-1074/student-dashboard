"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Wallet, TrendingUp, Plus } from "lucide-react";

export function BudgetManagement() {
  const budgetCategories = [
    { name: "Research & Development", allocated: 80000, spent: 65000 },
    { name: "Staff Salaries", allocated: 120000, spent: 120000 },
    { name: "Equipment", allocated: 30000, spent: 18000 },
    { name: "Operations", allocated: 20000, spent: 12000 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Budget Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage and allocate faculty budget
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Budget Category
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Allocated
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              $
              {budgetCategories
                .reduce((sum, cat) => sum + cat.allocated, 0)
                .toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              $
              {budgetCategories
                .reduce((sum, cat) => sum + cat.spent, 0)
                .toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{budgetCategories.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Budget Allocation by Category</CardTitle>
          <CardDescription>
            Overview of budget distribution across categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {budgetCategories.map((category, index) => {
              const percentage = (category.spent / category.allocated) * 100;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ${category.spent.toLocaleString()} / $
                      {category.allocated.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {percentage.toFixed(1)}% used
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
