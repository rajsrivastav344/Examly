// Webdev.JavaScriptx
import React, { useState } from "react";
import "./Webdev.css";

export default function Webdev() {
  const [selected, setSelected] = useState("HTML Home");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🟠 HTML Tutorial": {
      "HTML Home": "Welcome to the HTML tutorial! Learn step by step.",
      "HTML Introduction": {title:"HTML Introduction", content:"Placeholder", example:"<h1>Hello</h1>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Editors": {title:"HTML Editors", content:"Placeholder", example:"<p>Use VSCode or Sublime Text</p>", image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"},
      "HTML Basic": {title:"HTML Basic", content:"Placeholder", example:"<h1>Basic HTML</h1>", image:"https://www.tutorialrepublic.com/lib/images/html-elements.png"},
      "HTML Elements": {title:"HTML Elements", content:"Placeholder", example:"<p>Paragraph</p>", image:"https://www.tutorialrepublic.com/lib/images/html-elements.png"},
      "HTML Attributes": {title:"HTML Attributes", content:"Placeholder", example:"<img src='#' alt=''>", image:"https://www.w3schools.com/html/img_html.png"},
      "HTML Headings": {title:"HTML Headings", content:"Placeholder", example:"<h1>Heading</h1>", image:"https://www.tutorialrepublic.com/lib/images/html-headings.png"},
      "HTML Paragraphs": {title:"HTML Paragraphs", content:"Placeholder", example:"<p>Paragraph</p>", image:"https://www.tutorialrepublic.com/lib/images/html-paragraphs.png"},
      "HTML Styles": {title:"HTML Styles", content:"Placeholder", example:"<p style='color:red'>Red text</p>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Formatting": {title:"HTML Formatting", content:"Placeholder", example:"<b>Bold</b> <i>Italic</i>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Quotations": {title:"HTML Quotations", content:"Placeholder", example:"<blockquote>Quote</blockquote>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Comments": {title:"HTML Comments", content:"Placeholder", example:"<!-- Comment -->", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Colors": {title:"HTML Colors", content:"Placeholder", example:"<p style='color:blue'>Blue</p>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML CSS": {title:"HTML CSS", content:"Placeholder", example:"<link rel='stylesheet' href='style.css'>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Links": {title:"HTML Links", content:"Placeholder", example:"<a href='https://google.com'>Google</a>", image:"https://www.tutorialrepublic.com/lib/images/html-links.png"},
      "HTML Images": {title:"HTML Images", content:"Placeholder", example:"<img src='img.jpg' alt=''>", image:"https://www.tutorialrepublic.com/lib/images/html-images.png"},
      "HTML Favicon": {title:"HTML Favicon", content:"Placeholder", example:"<link rel='icon' href='favicon.ico'>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Page Title": {title:"HTML Page Title", content:"Placeholder", example:"<title>Page Title</title>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Tables": {title:"HTML Tables", content:"Placeholder", example:"<table><tr><td>Cell</td></tr></table>", image:"https://www.tutorialrepublic.com/lib/images/html-tables.png"},
      "HTML Lists": {title:"HTML Lists", content:"Placeholder", example:"<ul><li>Item</li></ul>", image:"https://www.tutorialrepublic.com/lib/images/html-lists.png"},
      "HTML Block & Inline": {title:"HTML Block & Inline", content:"Placeholder", example:"<div>Block</div> <span>Inline</span>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Div": {title:"HTML Div", content:"Placeholder", example:"<div>Content</div>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Classes": {title:"HTML Classes", content:"Placeholder", example:"<p class='className'>Text</p>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Id": {title:"HTML Id", content:"Placeholder", example:"<p id='idName'>Text</p>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Iframes": {title:"HTML Iframes", content:"Placeholder", example:"<iframe src='page.html'></iframe>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML JavaScript": {title:"HTML JavaScript", content:"Placeholder", example:"<script>alert('Hi');</script>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML File Paths": {title:"HTML File Paths", content:"Placeholder", example:"<img src='images/pic.jpg'>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Head": {title:"HTML Head", content:"Placeholder", example:"<head>...</head>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Layout": {title:"HTML Layout", content:"Placeholder", example:"<header>Header</header>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Responsive": {title:"HTML Responsive", content:"Placeholder", example:"<meta name='viewport'>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Computercode": {title:"HTML Computercode", content:"Placeholder", example:"<code>Code Example</code>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Semantics": {title:"HTML Semantics", content:"Placeholder", example:"<article>Content</article>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Style Guide": {title:"HTML Style Guide", content:"Placeholder", example:"<p>Follow style guide</p>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Entities": {title:"HTML Entities", content:"Placeholder", example:"&lt; &gt; &amp;", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Symbols": {title:"HTML Symbols", content:"Placeholder", example:"&copy; &reg;", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Emojis": {title:"HTML Emojis", content:"Placeholder", example:"😀 😎", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Charsets": {title:"HTML Charsets", content:"Placeholder", example:"<meta charset='UTF-8'>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML URL Encode": {title:"HTML URL Encode", content:"Placeholder", example:"https://example.com?q=Hello%20World", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML vs. XHTML": {title:"HTML vs. XHTML", content:"Placeholder", example:"<p>XHTML strict</p>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Forms": {title:"HTML Forms", content:"Placeholder", example:"<form><input type='text'></form>", image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},
      "HTML Form Attributes": {title:"HTML Form Attributes", content:"Placeholder", example:"<form action='#'>...</form>", image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},
      "HTML Form Elements": {title:"HTML Form Elements", content:"Placeholder", example:"<input> <textarea> <select>", image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},
      "HTML Input Types": {title:"HTML Input Types", content:"Placeholder", example:"<input type='email'>", image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},
      "HTML Input Attributes": {title:"HTML Input Attributes", content:"Placeholder", example:"<input placeholder='Name'>", image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},
      "Input Form Attributes": {title:"Input Form Attributes", content:"Placeholder", example:"<input required>", image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},
      "HTML Graphics": {title:"HTML Graphics", content:"Placeholder", example:"<canvas></canvas>", image:"https://www.tutorialrepublic.com/lib/images/html-canvas.png"},
      "HTML Canvas": {title:"HTML Canvas", content:"Placeholder", example:"<canvas id='myCanvas'></canvas>", image:"https://www.tutorialrepublic.com/lib/images/html-canvas.png"},
      "HTML SVG": {title:"HTML SVG", content:"Placeholder", example:"<svg><circle cx='50' cy='50' r='40'></circle></svg>", image:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG.svg"},
      "HTML Media": {title:"HTML Media", content:"Placeholder", example:"<video src='video.mp4'></video>", image:"https://www.tutorialrepublic.com/lib/images/html-video.png"},
      "HTML Video": {title:"HTML Video", content:"Placeholder", example:"<video controls></video>", image:"https://www.tutorialrepublic.com/lib/images/html-video.png"},
      "HTML Audio": {title:"HTML Audio", content:"Placeholder", example:"<audio controls></audio>", image:"https://www.tutorialrepublic.com/lib/images/html-audio.png"},
      "HTML Plug-ins": {title:"HTML Plug-ins", content:"Placeholder", example:"<embed src='file.swf'>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML YouTube": {title:"HTML YouTube", content:"Placeholder", example:"<iframe src='https://www.youtube.com/embed/videoid'></iframe>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML APIs": {title:"HTML APIs", content:"Placeholder", example:"navigator.geolocation.getCurrentPosition(...)", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Geolocation": {title:"HTML Geolocation", content:"Placeholder", example:"navigator.geolocation.getCurrentPosition(...)", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Drag and Drop": {title:"HTML Drag and Drop", content:"Placeholder", example:"<div draggable='true'></div>", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Web Storage": {title:"HTML Web Storage", content:"Placeholder", example:"localStorage.setItem('key','value')", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML Web Workers": {title:"HTML Web Workers", content:"Placeholder", example:"var worker = new Worker('worker.JavaScript')", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
      "HTML SSE": {title:"HTML SSE", content:"Placeholder", example:"new EventSource('server.php')", image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},
    },

    "🔵 CSS Tutorial": {
      "CSS Introduction": {title:"CSS Introduction", content:"Placeholder", example:"<style>p{color:red;}</style>", image:"https://www.w3schools.com/css/img_syntax.gif"},
      "CSS Syntax": {title:"CSS Syntax", content:"Placeholder", example:"p { color: red; }", image:"https://www.w3schools.com/css/img_syntax.gif"},
      "CSS Selectors": {title:"CSS Selectors", content:"Placeholder", example:"p { color: blue; }", image:"https://www.tutorialrepublic.com/lib/images/css-selectors.png"},
      "CSS How To": {title:"CSS How To", content:"Placeholder", example:"<link rel='stylesheet' href='style.css'>", image:"https://www.w3schools.com/css/img_syntax.gif"},
      "CSS Colors": {title:"CSS Colors", content:"Placeholder", example:"p { color: green; }", image:"https://www.w3schools.com/css/img_colors.gif"},
      "CSS Box Model": {title:"CSS Box Model", content:"Placeholder", example:"div { margin:10px; padding:5px; }", image:"https://www.tutorialrepublic.com/lib/images/css-boxmodel.png"},
      "CSS Layouts": {title:"CSS Layouts", content:"Placeholder", example:".container{display:flex;}", image:"https://www.tutorialrepublic.com/lib/images/css-flexbox.png"},
      "CSS Position": {title:"CSS Position", content:"Placeholder", example:"position:absolute;", image:"https://www.tutorialrepublic.com/lib/images/css-position.png"},
      "CSS Float": {title:"CSS Float", content:"Placeholder", example:"float:left;", image:"https://www.tutorialrepublic.com/lib/images/css-float.png"},
      "CSS Display": {title:"CSS Display", content:"Placeholder", example:"display:inline-block;", image:"https://www.tutorialrepublic.com/lib/images/css-display.png"},
      "CSS Z-index": {title:"CSS Z-index", content:"Placeholder", example:"z-index:10;", image:"https://www.tutorialrepublic.com/lib/images/css-z-index.png"},
      "CSS Pseudo-classes": {title:"CSS Pseudo-classes", content:"Placeholder", example:"a:hover { color:red; }", image:"https://www.tutorialrepublic.com/lib/images/css-pseudo-class.png"},
      "CSS Pseudo-elements": {title:"CSS Pseudo-elements", content:"Placeholder", example:"p::first-letter { font-size:2em; }", image:"https://www.tutorialrepublic.com/lib/images/css-pseudo-element.png"},
      "CSS Transitions": {title:"CSS Transitions", content:"Placeholder", example:"transition:all 0.5s;", image:"https://www.tutorialrepublic.com/lib/images/css-transition.png"},
      "CSS Animations": {title:"CSS Animations", content:"Placeholder", example:"@keyframes example {...}", image:"https://www.tutorialrepublic.com/lib/images/css-animation.png"},
      "CSS Media Queries": {title:"CSS Media Queries", content:"Placeholder", example:"@media screen and (max-width:600px){...}", image:"https://www.tutorialrepublic.com/lib/images/css-mediaquery.png"},
      "CSS Flexbox": {title:"CSS Flexbox", content:"Placeholder", example:"display:flex;", image:"https://www.tutorialrepublic.com/lib/images/css-flexbox.png"},
      "CSS Grid": {title:"CSS Grid", content:"Placeholder", example:"display:grid;", image:"https://www.tutorialrepublic.com/lib/images/css-grid.png"},
      "CSS Variables": {title:"CSS Variables", content:"Placeholder", example:"--main-color:red;", image:"https://www.tutorialrepublic.com/lib/images/css-variables.png"},
      "CSS Functions": {title:"CSS Functions", content:"Placeholder", example:"calc(100% - 50px);", image:"https://www.tutorialrepublic.com/lib/images/css-functions.png"},
      "CSS Units": {title:"CSS Units", content:"Placeholder", example:"px, %, em, rem, vw", image:"https://www.tutorialrepublic.com/lib/images/css-units.png"},
      "CSS Specificity": {title:"CSS Specificity", content:"Placeholder", example:".class > p { }", image:"https://www.tutorialrepublic.com/lib/images/css-specificity.png"},
    },

    "🟢 JavaScript Tutorial": {
      "JavaScript Introduction": {title:"JavaScript Introduction", content:"Placeholder", example:"<script>alert('Hi');</script>", image:"https://www.w3schools.com/JavaScript/img_JavaScript.png"},
      "JavaScript Variables": {title:"JavaScript Variables", content:"Placeholder", example:"let x=5;", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-variables.png"},
      "JavaScript Data Types": {title:"JavaScript Data Types", content:"Placeholder", example:"let x = 'Hello';", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-datatypes.png"},
      "JavaScript Operators": {title:"JavaScript Operators", content:"Placeholder", example:"x + y;", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-operators.png"},
      "JavaScript Functions": {title:"JavaScript Functions", content:"Placeholder", example:"function f(){return 1;}", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-functions.png"},
      "JavaScript Objects": {title:"JavaScript Objects", content:"Placeholder", example:"let obj={a:1};", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-objects.png"},
      "JavaScript Arrays": {title:"JavaScript Arrays", content:"Placeholder", example:"let arr=[1,2,3];", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-arrays.png"},
      "JavaScript Loops": {title:"JavaScript Loops", content:"Placeholder", example:"for(let i=0;i<5;i++){}", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-loops.png"},
      "JavaScript Conditionals": {title:"JavaScript Conditionals", content:"Placeholder", example:"if(x>5){ }", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-conditionals.png"},
      "JavaScript Events": {title:"JavaScript Events", content:"Placeholder", example:"element.addEventListener('click', fn)", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-events.png"},
      "JavaScript DOM": {title:"JavaScript DOM", content:"Placeholder", example:"document.getElementById('id')", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-dom.png"},
      "JavaScript BOM": {title:"JavaScript BOM", content:"Placeholder", example:"window.alert('Hi')", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-bom.png"},
      "JavaScript ES6": {title:"JavaScript ES6", content:"Placeholder", example:"let x = () => {}", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-es6.png"},
      "JavaScript Async": {title:"JavaScript Async", content:"Placeholder", example:"async function f(){}", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-async.png"},
      "JavaScript Fetch": {title:"JavaScript Fetch", content:"Placeholder", example:"fetch('url').then(res=>res.JavaScripton())", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-fetch.png"},
      "JavaScript JavaScriptON": {title:"JavaScript JavaScriptON", content:"Placeholder", example:"JavaScriptON.parse('{}')", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-JavaScripton.png"},
      "JavaScript LocalStorage": {title:"JavaScript LocalStorage", content:"Placeholder", example:"localStorage.setItem('key','value')", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-localstorage.png"},
      "JavaScript SessionStorage": {title:"JavaScript SessionStorage", content:"Placeholder", example:"sessionStorage.setItem('key','value')", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-sessionstorage.png"},
      "JavaScript Debugging": {title:"JavaScript Debugging", content:"Placeholder", example:"console.log('debug')", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-debugging.png"},
      "JavaScript Error Handling": {title:"JavaScript Error Handling", content:"Placeholder", example:"try{ }catch(e){ }", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-error.png"},
      "JavaScript Classes": {title:"JavaScript Classes", content:"Placeholder", example:"class Person {}", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-classes.png"},
      "JavaScript Modules": {title:"JavaScript Modules", content:"Placeholder", example:"export default x;", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-modules.png"},
      "JavaScript Template Literals": {title:"JavaScript Template Literals", content:"Placeholder", example:"`Hello ${name}`", image:"https://www.tutorialrepublic.com/lib/images/JavaScript-template.png"},
    },
  };


  // ===== Mouse handlers for sidebar resizing =====
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      // limit sidebar width between 150px and 400px
      const newWidth = Math.min(Math.max(e.clientX, 150), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  // ===== Get the section name for selected topic =====
  const getSectionName = (topic) => {
    for (let section in sections) {
      if (Object.keys(sections[section]).includes(topic)) return section;
    }
    return null;
  };

  const selectedContent =
    Object.values(sections)
      .map((topics) => topics[selected])
      .filter(Boolean)[0] || "";
  const selectedSection = getSectionName(selected);
  return (
    <div className="dashboard" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
      <header className="header">
        <h1>📘 Web Development Dashboard</h1>
        <input type="text" placeholder="Search..." className="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </header>

      <aside className="sidebar" style={{ width: sidebarWidth }}>
        {Object.keys(sections).map((section) => {
          const filteredTopics = Object.keys(sections[section]).filter((topic) => topic.toLowerCase().includes(searchTerm.toLowerCase()));
          if (filteredTopics.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filteredTopics.map((topic) => (
                  <li key={topic} onClick={() => setSelected(topic)} className={selected === topic ? "active" : ""}>
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
                <iframe title="example-output" className="output-frame" srcDoc={selectedContent.example} />
              </div>
            )}
            {selectedContent.image && <img src={selectedContent.image} alt="Example" className="topic-img" />}
          </div>
        ) : (
          <p>{selectedContent}</p>
        )}
      </main>
    </div>
  );
}
