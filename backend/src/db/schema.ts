// Placeholder schema (would be managed by Drizzle ORM in real app)
export const tables = {
  customers: ["id", "name", "email", "phone", "address"],
  vehicles: ["id", "customer_id", "make", "model", "year", "vin_number"],
  services: ["id", "vehicle_id", "technician_id", "status", "estimated_cost"],
  invoices: ["id", "service_id", "amount", "tax", "total", "payment_status"]
}