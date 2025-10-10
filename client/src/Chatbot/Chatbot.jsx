import { useState, useEffect } from "react";
import Answer from "./Answer";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);
  const [recentHistory, setRecentHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );
  const [open, setOpen] = useState(false);

  const payload = {
    contents: [
      {
        parts: [{ text: question }],
      },
    ],
  };

  const askQuestion = async () => {
    if (!question.trim()) return;

    // Update history
    const updatedHistory = [question, ...recentHistory];
    localStorage.setItem("history", JSON.stringify(updatedHistory));
    setRecentHistory(updatedHistory);

    // API call
    let response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDNclMUdKoG7dUiee2-3bdyUIdDfH59AOU`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ").map((item) => item.trim());

    setResult([
      ...result,
      { type: "q", text: question },
      { type: "a", text: dataString },
    ]);
    setQuestion("");
  };

  const deleteMessage = (index) => {
    const newResult = [...result];
    newResult.splice(index, 1);
    setResult(newResult);
  };

  return (
    <>
      {/* Chat toggle button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: "#3f3f46",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          💬
        </button>
      </div>

      {/* Chat sidebar */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: "350px",
            height: "500px",
            backgroundColor: "#18181b",
            border: "1px solid #3f3f46",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "10px",
              backgroundColor: "#27272a",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
        chacha
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fa0f0f",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {result.map((item, index) => (
         <div
  style={{
    display: "flex",
    justifyContent: item.type === "q" ? "flex-end" : "flex-start",
    alignItems: "center",
    gap: "5px",
  }}
>
  <div
    style={{
      backgroundColor: item.type === "q" ? "#3f3f46" : "#27272a",
      color: "white",
      padding: "8px 12px",
      borderRadius: "12px",
      maxWidth: "80%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "8px",
    }}
  >
    <span style={{ flex: 1, wordBreak: "break-word" }}>
      {item.type === "a"
        ? item.text.map((ansItem, ansIndex) => (
            <div key={ansIndex}>{ansItem}</div>
          ))
        : item.text}
    </span>

    <button
      onClick={() => deleteMessage(index)}
      style={{
        background: "transparent",
        border: "none",
        color: "#fa0f0f",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#fa0f0fff"
      >
        <path d="m400-325 80-80 80 80 51-51-80-80 80-80-51-51-80 80-80-80-51 51 80 80-80 80 51 51Zm-88 181q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480Zm-336 0v480-480Z"/>
      </svg>
    </button>
  </div>
</div>

            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              gap: "5px",
              backgroundColor: "#27272a",
            }}
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                borderRadius: "20px",
                padding: "8px 12px",
                border: "none",
                outline: "none",
                backgroundColor: "#18181b",
                color: "#fff",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") askQuestion();
              }}
            />
            <button
              onClick={askQuestion}
              style={{
                borderRadius: "20px",
                padding: "8px 12px",
                border: "none",
                backgroundColor: "#3f3f46",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
