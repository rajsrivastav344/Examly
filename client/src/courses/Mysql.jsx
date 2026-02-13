// MySQL.jsx
import React, { useState } from "react";
import "./All.css";

export default function MySQL() {
  const [selected, setSelected] = useState("Introduction to MySQL");
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🐬 MySQL Database": {
      "Introduction to MySQL": {
        title: "Introduction to MySQL",
        content: `
MySQL is an open-source relational database management system (RDBMS) that stores data in tables and allows users to perform operations using SQL (Structured Query Language).

It supports transactions, joins, triggers, and indexing for fast, reliable performance.
        `,
        example: `
# Connect to MySQL Server
mysql -u root -p

# Create a new database
CREATE DATABASE company_db;

# Use the database
USE company_db;
        `,
      },
      "MySQL CRUD Operations": {
        title: "MySQL CRUD Operations",
        content: `
CRUD stands for Create, Read, Update, and Delete — the four essential operations to manage data in a database table.
        `,
        example: `
-- 1️⃣ CREATE (Insert data)
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  department VARCHAR(50),
  salary DECIMAL(10,2)
);

INSERT INTO employees (name, department, salary)
VALUES ('Raj', 'IT', 60000);

-- 2️⃣ READ (Retrieve data)
SELECT * FROM employees;

-- 3️⃣ UPDATE (Modify data)
UPDATE employees
SET salary = 70000
WHERE name = 'Raj';

-- 4️⃣ DELETE (Remove data)
DELETE FROM employees
WHERE name = 'Raj';
        `,
      },
      "DDL (Data Definition Language)": {
        title: "DDL (Data Definition Language)",
        content: `
DDL commands define and modify database structures — they affect schema-level changes.
        `,
        example: `
-- Create a table
CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(100)
);

-- Alter a table
ALTER TABLE employees ADD COLUMN joining_date DATE;

-- Rename a table
RENAME TABLE employees TO staff;

-- Drop a table
DROP TABLE departments;

-- Truncate a table (remove all data but keep structure)
TRUNCATE TABLE staff;
        `,
      },
      "DML (Data Manipulation Language)": {
        title: "DML (Data Manipulation Language)",
        content: `
DML commands manage data within existing tables — they include inserting, updating, deleting, and selecting records.
        `,
        example: `
-- Insert a record
INSERT INTO staff (name, department, salary) VALUES ('Aarav', 'HR', 50000);

-- Update existing data
UPDATE staff SET salary = 55000 WHERE name = 'Aarav';

-- Delete a record
DELETE FROM staff WHERE name = 'Aarav';

-- Select records
SELECT name, department, salary FROM staff WHERE department = 'IT';
        `,
      },
      "DCL (Data Control Language)": {
        title: "DCL (Data Control Language)",
        content: `
DCL commands control database access and permissions for users.
        `,
        example: `
-- Create a new user
CREATE USER 'developer'@'localhost' IDENTIFIED BY 'password123';

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON company_db.* TO 'developer'@'localhost';

-- Revoke permissions
REVOKE UPDATE ON company_db.* FROM 'developer'@'localhost';

-- Show privileges
SHOW GRANTS FOR 'developer'@'localhost';
        `,
      },
      "TCL (Transaction Control Language)": {
        title: "TCL (Transaction Control Language)",
        content: `
TCL manages database transactions — ensuring data integrity during multiple operations.
        `,
        example: `
-- Start a transaction
START TRANSACTION;

-- Perform operations
UPDATE accounts SET balance = balance - 500 WHERE acc_no = 101;
UPDATE accounts SET balance = balance + 500 WHERE acc_no = 202;

-- Commit if all OK
COMMIT;

-- Rollback if error
ROLLBACK;
        `,
      },
      "Joins in MySQL": {
        title: "Joins in MySQL",
        content: `
Joins are used to combine rows from two or more tables based on related columns.
        `,
        example: `
-- INNER JOIN
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.department = d.dept_id;

-- LEFT JOIN
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.department = d.dept_id;

-- RIGHT JOIN
SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.department = d.dept_id;
        `,
      },
      "Constraints in MySQL": {
        title: "Constraints in MySQL",
        content: `
Constraints enforce data integrity in a database.
        `,
        example: `
CREATE TABLE students (
  roll_no INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT CHECK (age >= 18),
  email VARCHAR(100) UNIQUE,
  course_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
        `,
      },
      "Functions and Stored Procedures": {
        title: "Functions and Stored Procedures",
        content: `
Functions and procedures are reusable blocks of SQL code.

- A *Function* returns a value.
- A *Procedure* performs actions and may not return a value.
        `,
        example: `
-- Function Example
DELIMITER //
CREATE FUNCTION getBonus(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
BEGIN
  RETURN salary * 0.10;
END //
DELIMITER ;

SELECT name, salary, getBonus(salary) AS bonus FROM employees;

-- Stored Procedure Example
DELIMITER //
CREATE PROCEDURE increaseSalary(IN emp_id INT, IN percent DECIMAL(3,2))
BEGIN
  UPDATE employees
  SET salary = salary + (salary * percent / 100)
  WHERE id = emp_id;
END //
DELIMITER ;

CALL increaseSalary(1, 5);
        `,
      },
      "Views, Indexes, and Triggers": {
        title: "Views, Indexes, and Triggers",
        content: `
These advanced features improve performance and maintain data automatically.
        `,
        example: `
-- View
CREATE VIEW high_salary AS
SELECT name, salary FROM employees WHERE salary > 70000;

-- Index
CREATE INDEX idx_name ON employees(name);

-- Trigger
DELIMITER //
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
  SET NEW.salary = IF(NEW.salary < 20000, 20000, NEW.salary);
END //
DELIMITER ;
        `,
      },
      "Real-World Example: E-Commerce System": {
        title: "Real-World Example: E-Commerce System",
        content: `
A sample MySQL structure for an e-commerce website with tables for users, products, orders, and payments.
        `,
        example: `
-- Create tables
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  price DECIMAL(10,2)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  order_date DATE,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_items (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,
  product_id INT,
  quantity INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);
        `,
      },
    },
  };

  // --- Sidebar resize logic ---
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  const selectedContent =
    Object.values(sections)
      .map((topics) => topics[selected])
      .filter(Boolean)[0] || "";

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>🐬 MySQL Dashboard</h1>
        <input
          type="text"
          placeholder="Search topics..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <aside className="sidebar" style={{ width: sidebarWidth }}>
        {Object.keys(sections).map((section) => {
          const filteredTopics = Object.keys(sections[section]).filter((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredTopics.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filteredTopics.map((topic) => (
                  <li
                    key={topic}
                    onClick={() => setSelected(topic)}
                    className={selected === topic ? "active" : ""}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          );
        })}
      </aside>

      <div className="resizer" onMouseDown={handleMouseDown}></div>

      <main className="content">
        <h2>{selected}</h2>
        {typeof selectedContent === "object" ? (
          <div>
            <pre className="code-block">
              <code>{selectedContent.content}</code>
            </pre>
            <pre className="code-block sql">
              <code>{selectedContent.example}</code>
            </pre>
          </div>
        ) : (
          <p>{selectedContent}</p>
        )}
      </main>
    </div>
  );
}
