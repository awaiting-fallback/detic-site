window.onload = () => {
  setTimeout(() => {
    document.getElementById("acessar").style.opacity = 1;
  }, 4000);

  document.getElementById("acessar").addEventListener("click", () => {
    // Esconde a primeira camada
    document.querySelector(".glitch").style.display = "none";
    document.getElementById("acessar").style.display = "none";

    // Mostra a segunda camada
    const camada2 = document.getElementById("camada2");
    camada2.classList.remove("oculto");
    camada2.classList.add("visivel");

    // Chama API de IP
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        document.getElementById("ip-display").innerText = `> origin: ${data.ip}`;
      })
      .catch(() => {
        document.getElementById("ip-display").innerText = `> origin: [indetectável]`;
      });
  });
};
