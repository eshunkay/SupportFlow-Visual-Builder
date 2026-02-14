let flowData = null;
let currentNode = null;

/* =========================
   LOAD FLOW
========================= */
async function loadFlow() {
  try {
    const response = await fetch("flow_data.json");
    flowData = await response.json();

    renderNodes(flowData.nodes);
    drawConnections(flowData.nodes);
    setupPreview();
  } catch (error) {
    console.error("Error loading flow:", error);
  }
}

/* =========================
   RENDER NODES
========================= */
function renderNodes(nodes) {
  const canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  nodes.forEach(node => {
    const div = document.createElement("div");
    div.classList.add("node", node.type);
    div.dataset.id = node.id;

    div.style.left = `${node.position.x}px`;
    div.style.top = `${node.position.y}px`;

    const title = document.createElement("h4");
    title.textContent = node.text;
    div.appendChild(title);

    node.options.forEach(opt => {
      const option = document.createElement("div");
      option.classList.add("option");
      option.textContent = `• ${opt.label}`;
      div.appendChild(option);
    });

    canvas.appendChild(div);
  });
}

/* =========================
   DRAW CONNECTIONS
========================= */
function drawConnections(nodes) {
  const svg = document.getElementById("connections");

  svg.innerHTML = `
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10"
        refX="10" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="#4B5563" />
      </marker>
    </defs>
  `;

  nodes.forEach(node => {
    node.options.forEach(opt => {
      const target = nodes.find(n => n.id === opt.nextId);
      if (!target) return;

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );

      line.setAttribute("x1", node.position.x + 110);
      line.setAttribute("y1", node.position.y + 90);
      line.setAttribute("x2", target.position.x + 110);
      line.setAttribute("y2", target.position.y);
      line.setAttribute("stroke", "#4B5563");
      line.setAttribute("stroke-width", "3");
      line.setAttribute("marker-end", "url(#arrow)");

      svg.appendChild(line);
    });
  });
}

/* =========================
   PREVIEW FLOW
========================= */
function setupPreview() {
  const btn = document.getElementById("previewBtn");
  btn.addEventListener("click", startPreview);
}

function startPreview() {
  const preview = document.getElementById("chat-preview");
  preview.classList.remove("hidden");

  document.getElementById("chat-log").innerHTML = "";
  document.getElementById("chat-options").innerHTML = "";

  currentNode = flowData.nodes.find(n => n.type === "start");
  renderChatNode(currentNode);
}

function renderChatNode(node) {
  highlightNode(node.id);

  const log = document.getElementById("chat-log");
  const optionsBox = document.getElementById("chat-options");

  const msg = document.createElement("div");
  msg.className = "chat-message";
  msg.textContent = node.text;
  log.appendChild(msg);

  optionsBox.innerHTML = "";

  node.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.label;

    btn.onclick = () => {
      const next = flowData.nodes.find(n => n.id === opt.nextId);
      if (next) renderChatNode(next);
    };

    optionsBox.appendChild(btn);
  });

  log.scrollTop = log.scrollHeight;
}

/* =========================
   HIGHLIGHT ACTIVE NODE
========================= */
function highlightNode(nodeId) {
  document.querySelectorAll(".node").forEach(n => {
    n.style.transform = "scale(1)";
    n.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
  });

  const active = document.querySelector(`.node[data-id="${nodeId}"]`);
  if (active) {
    active.style.transform = "scale(1.08)";
    active.style.boxShadow = "0 0 0 3px #22C55E";
  }
}

/* =========================
   INIT
========================= */
loadFlow();
