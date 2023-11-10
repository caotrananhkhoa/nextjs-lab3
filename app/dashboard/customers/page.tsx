import { Metadata } from "next";

// Add metadata with template in Root layout
export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
    return <p>Customers Page</p>;
  }