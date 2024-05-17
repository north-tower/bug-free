import { Payment } from "../orders/columns";

export const dynamic = 'force-dynamic' // defaults to auto

interface OrdersProps {
    data: Payment[];
  }
  

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ]
  }


  export async function GET() {
    const data = await getData();
   

    return Response.json({ data })

  }