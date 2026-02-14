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
  svg.innerHTML = ""; // clear previous lines

  nodes.forEach(node => {
    node.options.forEach(opt => {
      const target = nodes.find(n => n.id === opt.nextId);
      if (!target) return;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

      line.setAttribute("x1", node.position.x + 110);
      line.setAttribute("y1", node.position.y + 80);

      line.setAttribute("x2", target.position.x + 110);
      line.setAttribute("y2", target.position.y);

      line.setAttribute("stroke", "#888");
      line.setAttribute("stroke-width", "2");

      svg.appendChild(line);
    });
  });
}

loadFlow();
