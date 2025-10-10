// Python.jsx
import React, { useState } from "react";
import "./Webdev.css";

export default function Python() {
  const [selected, setSelected] = useState("Introduction to Python");
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🐍 Python Programming": {
      "Introduction to Python": {
        title: "Introduction to Python",
        content: `
Python is a high-level, interpreted programming language known for its simplicity and readability. 
It is widely used in web development, data analysis, automation, AI, and scientific computing.

Python supports multiple programming paradigms — procedural, object-oriented, and functional.
        `,
        example: `
# Print Hello World
print("Hello, World!")

# Simple addition
a = 10
b = 5
print("Sum:", a + b)
        `,
      },
      "Python Data Types": {
        title: "Python Data Types",
        content: `
Python provides several built-in data types that help organize and manage data efficiently.
        `,
        example: `
# Basic Data Types
integer = 10             # int
decimal = 3.14           # float
text = "Python"          # str
is_active = True         # bool
fruits = ["apple", "mango", "banana"]  # list
person = ("John", 25)    # tuple
student = {"name": "Aarav", "age": 20} # dict
unique = {1, 2, 3, 3}    # set

print(type(person))  # Output: <class 'tuple'>
        `,
      },
      "Python Operators": {
        title: "Python Operators",
        content: `
Operators are special symbols that perform operations on variables and values. Python supports several types of operators:
        `,
        example: `
# Arithmetic Operators
a, b = 10, 3
print(a + b)  # Addition
print(a - b)  # Subtraction
print(a * b)  # Multiplication
print(a / b)  # Division
print(a % b)  # Modulus

# Comparison Operators
print(a > b)   # True
print(a == b)  # False

# Logical Operators
x, y = True, False
print(x and y) # False
print(x or y)  # True
print(not x)   # False

# Assignment Operators
a += 5  # a = a + 5

# Membership Operators
print("Py" in "Python")  # True
        `,
      },
      "Python Functions": {
        title: "Python Functions",
        content: `
Functions are reusable blocks of code that perform a specific task. 
They can take inputs (parameters) and return outputs (values).
        `,
        example: `
# Function with parameters and return value
def greet(name):
    return f"Hello, {name}!"

print(greet("Raj"))

# Function with default argument
def power(base, exp=2):
    return base ** exp

print(power(3))   # 9
print(power(2, 3)) # 8

# Lambda Function
square = lambda x: x * x
print(square(5))
        `,
      },
      "Important Python Libraries": {
        title: "Important Python Libraries",
        content: `
Python’s ecosystem provides thousands of libraries that make development faster and more powerful.
Here are the most important ones:
        `,
        example: `
# 📊 Data Handling
import numpy as np     # Numerical computations
import pandas as pd    # Data analysis & manipulation

# 📈 Visualization
import matplotlib.pyplot as plt
import seaborn as sns

# 🤖 Machine Learning
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# 🧠 Deep Learning
import tensorflow as tf
import torch

# 🌐 Web Development
from flask import Flask
        `,
      },
      "File Handling in Python": {
        title: "File Handling in Python",
        content: `
Python allows reading, writing, and appending to files easily.
        `,
        example: `
# Writing to a file
with open("data.txt", "w") as f:
    f.write("Hello Python!")

# Reading from a file
with open("data.txt", "r") as f:
    print(f.read())
        `,
      },
      "Object-Oriented Programming": {
        title: "Object-Oriented Programming",
        content: `
OOP allows structuring code using classes and objects, improving code reusability and organization.
        `,
        example: `
# Class Example
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def drive(self):
        print(f"{self.brand} {self.model} is driving.")

car1 = Car("Tesla", "Model S")
car1.drive()
        `,
      },
      "Python in AI and Machine Learning": {
        title: "Python in AI and Machine Learning",
        content: `
Python is the backbone of modern AI due to its simplicity, vast libraries, and strong community support.

Key reasons Python is dominant in AI:
- Easy syntax for quick prototyping.
- Rich ecosystem of ML/DL libraries (TensorFlow, PyTorch, scikit-learn).
- Integration with data tools like Pandas, NumPy, Matplotlib.
- Community support for AI frameworks.

AI developers use Python for:
1. **Data Collection & Preprocessing**
2. **Model Building**
3. **Model Evaluation**
4. **Deployment (via Flask, FastAPI, Streamlit)**
        `,
        example: `
# Example: Simple AI Model (Linear Regression)
from sklearn.linear_model import LinearRegression
import numpy as np

# Training Data
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])

# Model
model = LinearRegression()
model.fit(X, y)

# Prediction
print(model.predict([[5]]))  # Output: [10.]
        `,
      },
      "Real-World Example: AI Chatbot": {
        title: "Real-World Example: AI Chatbot",
        content: `
Python powers chatbots like ChatGPT using natural language processing and deep learning models.
Below is a simple rule-based chatbot example.
        `,
        example: `
def chatbot(user_input):
    user_input = user_input.lower()
    if "hello" in user_input:
        return "Hi there! How can I help you?"
    elif "bye" in user_input:
        return "Goodbye! Have a great day!"
    else:
        return "I'm learning to understand better!"

print(chatbot("Hello"))
print(chatbot("Tell me something"))
print(chatbot("Bye"))
        `,
      },
    },
  };

  // === Sidebar resize logic ===
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
        <h1>🐍 Python Dashboard</h1>
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
            <pre className="code-block python">
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
