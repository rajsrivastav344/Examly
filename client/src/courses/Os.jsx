// OS.jsx
import React, { useState } from "react";
import "./All.css";

export default function OS() {
  const [selected, setSelected] = useState("Introduction to OS");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🖥️ Operating Systems": {
      "Introduction to OS": {
        title: "Introduction to Operating System",
        content:
          "An Operating System (OS) is system software that acts as an intermediary between computer hardware and users. It manages resources, provides services, and ensures smooth execution of programs.",
        example: "<p>Example: Windows, Linux, macOS</p>",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Operating_System_Concepts.svg/1200px-Operating_System_Concepts.svg.png",
      },
      "Functions of OS": {
        title: "Functions of Operating System",
        content:
          "OS functions include Process Management, Memory Management, File Management, Device Management, Security, and providing a User Interface.",
        example: "<ul><li>Process Management</li><li>Memory Management</li><li>File Management</li></ul>",
        image: "https://www.geeksforgeeks.org/wp-content/uploads/20210303190301/Functions-of-OS.png",
      },
      "Types of OS": {
        title: "Types of Operating Systems",
        content:
          "Operating systems are categorized into Batch, Time-Sharing, Distributed, Network, Real-Time, Mobile, Multiprocessing, and Multithreading OS.",
        example: "<ul><li>Batch OS: IBM Mainframe</li><li>Time-Sharing OS: UNIX</li><li>RTOS: FreeRTOS</li></ul>",
        image: "https://www.tutorialride.com/img/operating-system-types.png",
      },
      "Process Management": {
        title: "Process Management",
        content:
          "Handles creation, scheduling, and termination of processes. Ensures CPU utilization is efficient.",
        example: "<p>Example: Running multiple applications simultaneously.</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/process_scheduling.jpg",
      },
      "Memory Management": {
        title: "Memory Management",
        content:
          "Allocates memory to processes efficiently. Uses techniques like paging, segmentation, and virtual memory.",
        example: "<p>Example: Virtual memory in Windows or Linux.</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/memory_management.jpg",
      },
      "File Management": {
        title: "File Management",
        content:
          "Maintains file systems, directories, and controls access to files and directories.",
        example: "<p>Example: NTFS in Windows, EXT4 in Linux.</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/file_system.jpg",
      },
      "Device Management": {
        title: "Device Management",
        content:
          "Controls input/output devices via drivers. Manages data transfer using polling, interrupts, or DMA.",
        example: "<p>Example: Keyboard, Mouse, Printer.</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/device_management.jpg",
      },
      "Security & Protection": {
        title: "Security and Protection",
        content:
          "Ensures authorized access only. Implements user authentication, encryption, and access control.",
        example: "<p>Example: Linux file permissions, User login passwords.</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/security.jpg",
      },
      "User Interface": {
        title: "User Interface",
        content:
          "Provides CLI or GUI to interact with the system.",
        example: "<p>Example: Command Prompt (CLI), Windows Explorer (GUI)</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/user_interface.jpg",
      },
      "Real-World Examples": {
        title: "Real-World Examples",
        content:
          "Different OS types are used in various scenarios.",
        example: "<ul><li>Batch OS: IBM Mainframe</li><li>Time-Sharing OS: UNIX</li><li>RTOS: FreeRTOS</li><li>Mobile OS: Android</li></ul>",
        image: "https://cdn.educba.com/academy/wp-content/uploads/2019/12/Types-of-Operating-Systems.jpg",
      },
      "Process Scheduling": {
        title: "Process Scheduling",
        content:
          "Techniques used to decide the order of process execution: FCFS, Round Robin, Priority Scheduling.",
        example: "<p>Example: Round Robin scheduling in time-sharing OS.</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/process_scheduling.jpg",
      },
      "Memory Concepts": {
        title: "Memory Concepts",
        content:
          "Includes concepts like paging, segmentation, virtual memory, and memory hierarchy to optimize performance.",
        example: "<p>Example: RAM, Cache, Secondary storage.</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/memory_management.jpg",
      },
      "Deadlocks": {
        title: "Deadlocks",
        content:
          "Occurs when processes wait indefinitely due to circular dependencies. Avoided using algorithms like Banker's Algorithm.",
        example: "<p>Example: Two processes waiting for each other to release resources.</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/deadlock.jpg",
      },
      "Interrupt Handling": {
        title: "Interrupt Handling",
        content:
          "Mechanism to give immediate attention to important events. Interrupts can be hardware or software-based.",
        example: "<p>Example: Keyboard interrupt triggers CPU to read input.</p>",
        image: "https://www.tutorialspoint.com/operating_system/images/interrupt_handling.jpg",
      },
    },
  };

  // Sidebar Resize
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 150), 400);
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
        <h1>🖥️ Operating System Dashboard</h1>
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
            <p>{selectedContent.content}</p>
            {selectedContent.example && (
              <div className="example-container">
                <pre className="code-block">
                  <code>{selectedContent.example}</code>
                </pre>
                <iframe
                  title="example-output"
                  className="output-frame"
                  srcDoc={selectedContent.example}
                />
              </div>
            )}
            {selectedContent.image && (
              <img
                src={selectedContent.image}
                alt="Example"
                className="topic-img"
              />
            )}
          </div>
        ) : (
          <p>{selectedContent}</p>
        )}
      </main>
    </div>
  );
}
