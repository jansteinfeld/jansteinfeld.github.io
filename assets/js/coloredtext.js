(function() {
  // Pastellfarben der Pride-Flagge
  const pastelPrideColors = [
    "#ED8E89", // Pastellrot
    "#F7B685", // Pastellorange
    "#F3EBA5", // Pastellgelb
    "#94C691", // Pastellgrün
    "#9BD6D9", // Pastellblau
    "#B4A8E0", // Pastellviolett
  ];

  function colorizeNode(node, colorIndexObj) {
    if (node.nodeType === Node.TEXT_NODE) {
      const fragment = document.createDocumentFragment();
      for (let char of node.textContent) {
        if (char.trim() !== "") {
          let color = pastelPrideColors[colorIndexObj.index % pastelPrideColors.length];
          const span = document.createElement("span");
          span.style.color = color;
          span.textContent = char;
          fragment.appendChild(span);
          colorIndexObj.index++;
        } else {
          fragment.appendChild(document.createTextNode(char));
        }
      }
      node.parentNode.replaceChild(fragment, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.childNodes).forEach(child => {
        colorizeNode(child, colorIndexObj);
      });
    }
  }

  function colorizePridePastellElementById() {
    const element = document.getElementById('coloredtext');
    if (element) {
      colorizeNode(element, { index: 0 });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", colorizePridePastellElementById);
  } else {
    colorizePridePastellElementById();
  }
})();
