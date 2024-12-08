document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".option");
    const resetButton = document.getElementById("reset-button");
  
    // Adiciona evento de clique para cada opção
    options.forEach((option) => {
      option.addEventListener("click", () => {
        const voteSpan = option.querySelector(".votes");
        let votes = parseInt(voteSpan.textContent.split(" ")[0], 10);
        votes++;
        voteSpan.textContent = `${votes} votos`;
      });
    });
  
    // Reinicia os resultados
    resetButton.addEventListener("click", () => {
      options.forEach((option) => {
        const voteSpan = option.querySelector(".votes");
        voteSpan.textContent = "0 votos";
      });
    });
  });
  