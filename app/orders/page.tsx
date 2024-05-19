'use client'

import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface Expense {
  id: string;
  description: string;
  amount: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  budget: string;
}


function Orders() {

  const [newExpense, setNewExpense] = useState<Expense>({id: '', description: '', amount: '' , category: ''});
  const [newCategory, setNewCategory] = useState<Category>({id: '', name: '', budget: ''});
  const [newBudget, setNewBudget] = useState<Category>({id: '', name: '', budget: ''});

  const [categories, setCategories] = useState<string[]>([]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewExpense(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCategory(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://supreme-goggles-beta.vercel.app/api/v1/addDriver', newExpense);
      // Display success message
      window.alert('Expense added successfully');
      // Redirect to Drivers page
      window.location.reload();
   
    } catch (error) {
      console.error('Error adding new driver:', error);
    }
  };

  const handleCategory = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://supreme-goggles-beta.vercel.app/api/v1/addCategory', newCategory);
      // Display success message
      window.alert('Expense added successfully');
      // Redirect to Drivers page
      window.location.reload();
   
    } catch (error) {
      console.error('Error adding new driver:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api'); // Adjust the URL as necessary
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setNewExpense(result.data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  

    fetchData();
  }, []);



  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await fetch('/api2'); // Adjust the URL as necessary
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setCategories(result.data);
       console.log(result.data[0].name)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  

    fetchData2();
  }, []);



  

  return (
    <>
      <div className="mx-auto max-w-4xl bg-white">
        <h1 className="mt-10  ml-5 text-2xl font-bold text-gray-900">
          Expense Management
        </h1>
        <div className="bg-white py-2 px-3">
          <nav className="flex flex-wrap gap-4">
          
            <Popover>
              <PopoverTrigger>Add Expense</PopoverTrigger>
              <PopoverContent>
              <p className="mt-4 pl-4 text-xl font-bold">Add Expense</p>
              <div className="flex flex-col items-center px-8 py-10">
              <form onSubmit={handleSubmit}>
                  <label htmlFor="description" className="block w-full" >
                    <p className="mb-1 text-sm text-gray-600">Description</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none 
                    ring-blue-600 focus:ring-1" type="text"
                    id="description"
                    name="description"
                    value={newExpense.description}
                    onChange={handleInputChange} placeholder="Enter Description" />
                  </label>
                  <label htmlFor="amount" className="block w-full" >
                    <p className="mb-1 text-sm text-gray-600">Enter Amount</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none
                     ring-blue-600 focus:ring-1" type="text"
                     id="amount"
                     name="amount"
                     value={newExpense.amount}
                     onChange={handleInputChange} placeholder="Enter Amount" />
                  </label>
                  <label className="mt-4 block w-full" >
                    <p className="mb-1 text-sm text-gray-600">Assign Category</p>
                    
                    {/* <select className="w-full rounded-md border bg-white py-2 px-2 outline-none
                     ring-blue-600 focus:ring-1" 
                     id="category"
                     name="category"
                     value={newExpense.category}
                     onChange={handleInputChange} > 
                     
                     {categories.map((categories) => (

                      <option value="categories.name">{categories.name}</option>
                    ))}
                    </select> */}
                    <Select  
                     name="category"
                     value={newExpense.category}
                     onChange={handleInputChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                      {categories.map((categories) => (
                        <SelectItem value="categories.name">{categories.name}</SelectItem>
                      ))}
                      </SelectContent>
                    </Select>

                  </label>
                  <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                  <button type='submit' className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">Add Expense</button>
                </div>
                </form>

              </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>Add Expense Category</PopoverTrigger>
              <PopoverContent>
              <p className="mt-4 pl-4 text-xl font-bold">Add Category</p>
              <div className="flex flex-col items-center px-8 py-10">
              <form onSubmit={handleCategory}>
                  <label className="block w-full">
                    <p className="mb-1 text-sm text-gray-600">Enter Category Name</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                       id="name"
                       name="name"
                       value={newCategory.name}
                       onChange={handleCategoryChange}
                    type="text" placeholder="Enter Category Name" />
                  </label>
                  <label className="block w-full">
                    <p className="mb-1 text-sm text-gray-600">Enter Category Budget</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                     id="budget"
                     name="budget"
                     value={newCategory.budget}
                     onChange={handleCategoryChange}
                    type="text" placeholder="Enter Category Budget" />
                  </label>
                 
                  <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                  <button className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">Add Category</button>
                </div>
                </form>

              </div>
              </PopoverContent>
            </Popover>

            

          
          </nav>
        </div>
        <div className="container mx-auto py-10">
      <DataTable columns={columns} data={newExpense} />
    </div>
        
      </div>
    
    </>
  );
}

export default Orders;
