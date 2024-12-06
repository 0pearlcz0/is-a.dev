// Spuštění animace po načtení stránky
document.addEventListener("DOMContentLoaded", () => {
  // Najdeme element s textem
  const text = document.querySelector(".container p");

  // Použití GSAP pro animaci textu
  gsap.fromTo(
    text, // Element k animaci
    { 
      opacity: 0,  // Text začíná neviditelný
      y: 20        // Startovní pozice 20px níže
    },
    { 
      opacity: 1,  // Text se stane viditelným
      y: 0,        // Posune se na původní pozici
      duration: 2, // Trvání animace v sekundách
      ease: "power2.out" // Plynulý efekt
    }
  );
});
