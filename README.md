# SupportFlow Visual Builder

SupportFlow Visual Builder is a browser-based visual tool for designing and previewing customer support conversation flows. It allows non-technical users to visually map decision trees while developers can implement and preview the same logic using vanilla JavaScript.

This project was built in phases, starting from design ideation in Figma, through structured UI planning, and finally implemented using HTML, CSS, and JavaScript without any external frameworks.

## 🚀 Project Overview

Customer support workflows are often complex, hard to visualize, and difficult to test before deployment. SupportFlow Visual Builder solves this by:

- Providing a node-based visual interface for designing support flows
- Clearly separating design, logic, and preview
- Allowing flows to be tested instantly using a chat-style preview
- Remaining lightweight and framework-free

## 🧩 Project Phases

### Phase 0 — Repository Setup

- Forked the repository
- Organized project structure
- Defined project goals and phases
- Set up local development environment

### Phase 1 — Design & UX Planning (Figma)

The entire UI and interaction logic was designed before any code was written.

#### Design Goals

- Make flows easy to read and understand
- Use color to communicate node meaning
- Keep the interface minimal and focused
- Ensure scalability for large flows

#### Design System

A small but consistent design system was created in Figma:

| Node Type | Meaning | Color |
|-----------|---------|-------|
| Start Node | Entry point | Green |
| Question Node | Decision / branching | Blue |
| End Node | Terminal action | Red |
| Editing State | Active selection | Yellow |
| Canvas | Workspace background | Light mint |

#### Screens Designed

- Main Builder Screen
- Flow Canvas
- Node layout & hierarchy
- Preview Flow interaction

**Why Figma first?** Designing first helped prevent layout issues, logic confusion, and unnecessary rewrites during development.

The full design system and flow planning were created in Figma.

🔗 Figma Design File:
https://www.figma.com/design/uWgY2JTCzmSqQ2u64tsWpV/SupportFlow-Visual-Builder-%E2%80%93-Design-System?node-id=0-1&t=qJPVCjyAW0E4bSco-1


### Phase 2 — Vanilla JavaScript Implementation

The application was implemented using pure web technologies:

- **HTML** — Structure and layout
- **CSS** — Styling, colors, layout, and animations
- **JavaScript** — Flow rendering, connections, and preview logic

No frameworks or libraries were used.

## 🛠️ Technical Implementation

### Core Concepts

#### Flow Data Structure

Flows are defined using a simple JSON-based structure:

- Nodes
- Node types
- Positions
- Options and transitions

This keeps logic decoupled from UI rendering.

#### Visual Builder

- Nodes are dynamically rendered onto a canvas
- SVG is used to draw directional connections
- Active nodes are highlighted during preview

#### Preview Mode

- Simulates real user interaction
- Displays messages and selectable options
- Follows the same logic as the visual flow

This allows flows to be tested instantly without backend integration.

## 📁 Project Structure
```
supportflow-visual-builder/
│
├── index.html        # Main application layout
├── css/
│   └── styles.css    # All styling and layout rules
├── js/
│   └── app.js        # Core logic and flow handling
├── flow_data.json    # Flow configuration
└── README.md         # Project documentation
```

## 🧪 How to Run the Project Locally

1. Fork the repository
2. Clone it locally
3. Start a local server (required for JSON loading):
```bash
   python3 -m http.server 8000
```
4. Open your browser and visit:
```
   http://localhost:8000
```

## 🎯 Key Features

- Visual flow builder
- Node-based decision mapping
- Clear color semantics
- Real-time chat preview
- Lightweight & framework-free
- Easy to extend and customize

## 🧠 Design Decisions

- Vanilla JS only to demonstrate strong fundamentals
- JSON-driven flows for flexibility
- Figma-first approach for clean UX
- Separation of concerns between UI and logic

## 📌 Future Improvements

- Drag-and-drop node editing
- Flow persistence (save/load)
- Undo / redo
- Zoom & pan
- Export to chatbot platforms


## ✨ Wildcard Feature — Live Flow Path Highlighting

To enhance both usability and debugging, the application includes **Live Flow Path Highlighting** during Preview Mode.

### What It Does

- Highlights the currently active node on the canvas while the preview is running
- Visually marks previously visited nodes to show the full conversation path
- Keeps the editor and preview experiences connected in real time

### Why This Matters

For non-technical managers, understanding chatbot behavior is significantly easier when logic is visible rather than abstract.

This feature:
- Makes flow debugging intuitive
- Helps identify incorrect branching or dead ends quickly
- Bridges the gap between design-time configuration and runtime behavior

By allowing users to *see* how the conversation flows as it runs, SupportFlow Visual Builder becomes easier to validate, debug, and trust before deployment.


## 👤 Author

**Kelvin Eshun**

Built as a practical capstone project to demonstrate:

- UX planning
- Visual system design
- Frontend architecture
- Clean JavaScript logic

---

