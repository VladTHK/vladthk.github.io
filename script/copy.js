function copyTon() {
    const text = document.getElementById("textToCopy").innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Адрес кошелька скопирован: " + text);
    });
  }
  