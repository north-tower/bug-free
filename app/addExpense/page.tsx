'use client'

import axios from 'axios'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from '@/components/ui/popover';

export type Expenses = {
    id: string
    description: string
    amount: string
    status: string
    category: string
    email: string
  }

function page() {

  const [newExpenses, setNewExpenses] = useState<Expenses>({id: '', description: '', amount: '',status:'' , category: '', email:''});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewExpenses(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://supreme-goggles-beta.vercel.app/api/v1/addDriver', newExpenses);
      // Display success message
      window.alert('Expense added successfully');
      // Redirect to Drivers page
      window.location.reload();
   
    } catch (error) {
      console.error('Error adding new driver:', error);
    }
  };

  return (
    <div>
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
                  value={newExpenses.description}
                  onChange={handleInputChange} placeholder="Enter Description" />
                </label>
                <label htmlFor="amount" className="block w-full" >
                  <p className="mb-1 text-sm text-gray-600">Enter Amount</p>
                  <input className="w-full rounded-md border bg-white py-2 px-2 outline-none
                   ring-blue-600 focus:ring-1" type="text"
                   id="amount"
                   name="amount"
                   value={newExpenses.amount}
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

                    <option key={categories.name} value={categories.name}>{categories.name}</option>
                  ))}
                  </select>  */}
                  {/* <Select  
                   name="category"
                   value={newExpense.category}
                   onChange={handleInputChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name}>{category.name}</SelectItem>
                    ))}
                    </SelectContent>
                  </Select> */}

                </label>
                <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <button type='submit' className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">Add Expense</button>
              </div>
              </form>

            </div>
            </PopoverContent>
          </Popover>

          {/* <Popover>
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
          </Popover>           */}
        </nav>
    </div>
  )
}

export default page