window.onload = () => {
  setTimeout(() => {
    document.getElementById("acessar").style.opacity = 1;
  }, 4000);

  document.getElementById("acessar").addEventListener("click", () => {
    document.querySelector(".glitch").style.display = "none";
    document.getElementById("acessar").style.display = "none";

    const camada2 = document.getElementById("camada2");
    const statusCheck = document.getElementById("status-check");
    const ipDisplay = document.getElementById("ip-display");
    const armazenado = document.getElementById("armazenamento");

    camada2.classList.remove("oculto");
    camada2.classList.add("visivel");

    const etapas = [
      "TESTANDO SEGURANÇA...",
      "RASTREANDO CAMADA LOCAL...",
      "INTERFERÊNCIA DETECTADA...",
      "VERIFICANDO ORIGEM..."
    ];

    let etapaAtual = 0;

    const mostrarEtapas = setInterval(() => {
      if (etapaAtual < etapas.length) {
        statusCheck.innerText = `> ${etapas[etapaAtual]}`;
        etapaAtual++;
      } else {
        clearInterval(mostrarEtapas);
        statusCheck.style.display = "none";
        ipDisplay.style.display = "block";

        fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => {
            ipDisplay.innerText = `> origin: ${data.ip}`;
          })
          .catch(() => {
            const falhas = [
              "[indetectável]",
              "[rede oculta]",
              "[submersa]",
              "[sem traço]",
              "[desconhecida]",
              "[instância anônima]",
              "[falha no rastreio]"
            ];
            const aleatorio = falhas[Math.floor(Math.random() * falhas.length)];
            ipDisplay.innerText = `> origin: ${aleatorio}`;
          })
          .finally(() => {
            setTimeout(() => {
              armazenado.style.display = "block";
              armazenado.innerText = "> resposta armazenada";
            }, 1000);
          });
      }
    }, 700); // troca a cada 700ms
  });
};
