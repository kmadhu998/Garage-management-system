CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(15),
  address TEXT
);

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  make VARCHAR(50),
  model VARCHAR(50),
  year INT,
  vin_number VARCHAR(50)
);