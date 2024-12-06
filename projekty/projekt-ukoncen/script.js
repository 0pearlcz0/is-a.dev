// Po načtení DOM spustíme animaci
document.addEventListener("DOMContentLoaded", () => {
  // Najdeme element s textem
  const text = document.querySelector(".copy-container p");

  // Inicializujeme animaci pomocí GSAP
  gsap.fromTo(
    text, // Element k animaci
    { 
      opacity: 0,  // Počáteční průhlednost
      y: 20        // Text začne o 20px níže
    },
    { 
      opacity: 1,  // Konečná průhlednost
      y: 0,        // Text se vrátí na původní pozici
      duration: 2, // Trvání animace v sekundách
      ease: "power2.out" // Plynulý výstup
    }
  );

  // Přidáme tlačítko pro opětovné spuštění animace (volitelné)
  const replayButton = document.createElement("button");
  replayButton.textContent = "Znovu přehrát animaci";
  replayButton.style.cssText = `
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #ffe500;
    color: #000;
    border-radius: 5px;
  `;
  document.body.appendChild(replayButton);

  // Připojíme událost kliknutí k tlačítku
  replayButton.addEventListener("click", () => {
    gsap.fromTo(
      text,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );
  });
});
