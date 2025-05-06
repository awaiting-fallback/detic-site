window.onload = () => {
  setTimeout(() => {
    document.getElementById("acessar").style.opacity = 1;
  }, 4000);

  document.getElementById("acessar").addEventListener("click", () => {
    // Esconde a primeira camada (frase + botão)
    document.querySelector(".glitch").style.display = "none";
    document.getElementById("acessar").style.display = "none";

    // Mostra a camada 2 com fallback
    document.getElementById("camada2").classList.remove("oculto");
    document.getElementById("camada2").classList.add("visivel");
  });
};
