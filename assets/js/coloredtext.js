function() {
  // Pastellfarben der Pride-Flagge
  const pastelPrideColors = [
    "#ED8E89", // Pastellrot
    "#F7B685", // Pastellorange
    "#F3EBA5", // Pastellgelb
    "#94C691", // Pastellgrün
    "#9BD6D9", // Pastellblau
    "#B4A8E0",  // Pastellviolett
  ];

  function colorizeNode(node, colorIndexObj) {
    if (node.nodeType === Node.TEXT_NODE) {
      let result = "";
      for (let char of node.textContent) {
        if (char.trim() !== "") {
          let color = pastelPrideColors[colorIndexObj.index % pastelPrideColors.length];
          result += `<span style="color:${color}">${char}</span>`;
          colorIndexObj.index++;
        } else {
          result += char;
        }
      }
      const span = document.createElement("span");
      span.innerHTML = result;
      node.replaceWith(span);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let i = 0; i < node.childNodes.length; i++) {
        colorizeNode(node.childNodes[i], colorIndexObj);
      }
    }
  }

  function colorizePridePastellElements() {
    const elements = document.querySelectorAll('.coloredtext');
    elements.forEach(element => {
      // Für jedes Element eigenen Farbindex verwenden, damit Muster pro Element beginnt
      colorizeNode(element, { index: 0 });
    });
  }

  // Warten, bis das DOM geladen ist
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", colorizePridePastellElements);
  } else {
    colorizePridePastellElements();
  }
})();