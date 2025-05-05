window.onload = () => {
  setTimeout(() => {
    document.getElementById("acessar").style.opacity = 1;
  }, 4000); // botão aparece depois de 4 segundos

  document.getElementById("acessar").addEventListener("click", () => {
    document.getElementById("camada2").classList.remove("oculto");
    document.getElementById("camada2").classList.add("visivel");
  });
};
