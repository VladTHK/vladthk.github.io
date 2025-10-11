document.addEventListener("DOMContentLoaded", () => {
    const toggleButtonsElement = document.getElementById("toggleAdditionalButtons");
    const moreButtonElement = document.getElementById("moreButtons");
  
    toggleButtonsElement.onclick = () => {
      const visible = moreButtonElement.style.display === "flex";
      moreButtonElement.style.display = visible ? "none" : "flex";
      toggleButtonsElement.textContent = visible ? "more..." : "...less";
    };
});

