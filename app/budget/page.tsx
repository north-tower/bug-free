'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';


import {  columns } from "./columns"
import { DataTable } from "./../orders/data-table"

interface Expense {
  id: string;
  description: string;
  amount: string;
  category: string;
}

function Budget() {
  const [newExpense, setNewExpense] = useState<Expense>({id: '', description: '', amount: '' , category: ''});
  return (
    <div>
 <div className="mx-auto max-w-2xl bg-white">
        <h1 className="mt-5 ml-5 text-2xl font-bold text-gray-900">
          Budgets
        </h1>
        <div className="bg-white py-2 px-3">
          {/* <nav className="flex flex-wrap gap-4">
          
            <Popover>
              <PopoverTrigger>Add Budget</PopoverTrigger>
              <PopoverContent>
              <p className="mt-4 pl-4 text-xl font-bold">Add Budget</p>
              <div className="flex flex-col items-center px-8 py-10">
                  <label className="block w-full" >
                    <p className="mb-1 text-sm text-gray-600">Description</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter Description" />
                  </label>
                  <label className="block w-full">
                    <p className="mb-1 text-sm text-gray-600">Enter Amount</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter Amount" />
                  </label>
                  <label className="mt-4 block w-full" >
                    <p className="mb-1 text-sm text-gray-600">Assign Category</p>
                    <select className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" >
                      <option value="Marketing">Marketing</option>
                      <option value="Designing">Designing</option>
                    </select>
                  </label>
                  <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                  <button className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">Add Budget</button>
                  
                </div>

              </div>
              </PopoverContent>
            </Popover> 
          </nav> */}
        </div>
        <div className="container mx-auto py-10">
      <DataTable columns={columns} data={newExpense} />
    </div>
        </div>
        
      </div>
  )
}

export default Budget;