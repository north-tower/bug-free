import { Payment } from "../orders/columns";


export const dynamic = 'force-dynamic'; // defaults to auto

interface OrdersProps {
    data: Payment[];
}

async function getData(): Promise<Payment[]> {
    const url = 'https://supreme-goggles-beta.vercel.app/api/v1/getData'; // Replace with your API URL
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}

export async function GET() {
    const data = await getData();

    return new Response(JSON.stringify({ data }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
