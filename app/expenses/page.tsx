'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import { Expense, columns } from "./columns"
import { DataTable } from "./data-table"




async function getData(): Promise<Expense[]> {

  try {
    // Replace 'your-api-endpoint' with the actual URL of your API
    const response = await fetch('https://supreme-goggles-beta.vercel.app/api/v1/getData');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Expense[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return [];
  }
}


export default async function DemoPage() {
  const data = await getData();
  
  return (
    
    <div className="container mx-auto py-10">
       
      <DataTable columns={columns} data={data} />
    </div>
  )
}
