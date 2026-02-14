async function loadFlow() {
  try {
    const response = await fetch("flow_data.json");
    const data = await response.json();

    renderNodes(data.nodes);
    drawConnections(data.nodes);

  } catch (error) {
    console.error("Error loading flow:", error);
  }
}

function renderNodes(nodes) {
  const canvas = document.getElementById("canvas");
  canvas.innerHTML = ""; // clear previous render

  nodes.forEach(node => {
    const div = document.createElement("div");
    div.classList.add("node", node.type);

    div.style.left = node.position.x + "px";
    div.style.top = node.position.y + "px";

    const title = document.createElement("h4");
    title.textContent = node.text;
    div.appendChild(title);

    node.options.forEach(opt => {
      const option = document.createElement("div");
      option.classList.add("option");
      option.textContent = "• " + opt.label;
      div.appendChild(option);
    });

    canvas.appendChild(div);
  });
}

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

      const startX = node.position.x + 110;
      const startY = node.position.y + 90;

      const endX = target.position.x + 110;
      const endY = target.position.y;

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );

      line.setAttribute("x1", startX);
      line.setAttribute("y1", startY);
      line.setAttribute("x2", endX);
      line.setAttribute("y2", endY);
      line.setAttribute("stroke", "#4B5563");
      line.setAttribute("stroke-width", "3");
      line.setAttribute("marker-end", "url(#arrow)");

      svg.appendChild(line);
    });
  });
}


loadFlow();
