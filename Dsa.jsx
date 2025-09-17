import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Dsa() {
  const [activeSection, setActiveSection] = useState("Intro");

  const sections = {
    Intro: (
      <div>
        <h2>1. Introduction to DSA</h2>
        <p>DSA = Data Structures + Algorithms...</p>
      </div>
    ),
    Arrays: (
      <div>
        <h2>3. Arrays</h2>
        <p>Arrays are collections stored in memory...</p>
      </div>
    ),
  };

  // 📌 Function to export content as PDF
  const downloadPDF = () => {
    const input = document.getElementById("dsa-content");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("DSA-Cheatsheet.pdf");
    });
  };

  return (
    <div className="dsa-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <h1>📘 DSA Cheatsheet</h1>
        <button onClick={downloadPDF} style={{ margin: "10px 0", padding: "6px 10px", background: "#2563eb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          ⬇ Download PDF
        </button>
        <ul>
          {Object.keys(sections).map((key) => (
            <li
              key={key}
              className={activeSection === key ? "active" : ""}
              onClick={() => setActiveSection(key)}
            >
              {key}
            </li>
          ))}
        </ul>
      </div>

      {/* Content (Captured for PDF) */}
      <div className="content" id="dsa-content">
        {sections[activeSection]}
      </div>
    </div>
  );
}
