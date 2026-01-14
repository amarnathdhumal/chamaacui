"use client";

import InvoiceCard from "./invoice-card";

export default function InvoiceCardDemo() {
  return (
    <InvoiceCard
      title="Invoice"
      total={1100}
      originalAmount={5000}
      items={[
        {
          name: "Premium Plan",
          description: "Monthly subscription",
          price: 299,
        },
        {
          name: "Add-on Services",
          description: "Extra features & support",
          price: 150,
        },
        {
          name: "Setup Fee",
          description: "One-time charge",
          price: 551,
        },
      ]}
      taxRate={10}
      taxLabel="Tax"
    />
  );
}
