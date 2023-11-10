document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const corpoTabela = document.getElementById("tabela-dados");

    const dadosArmazenados = JSON.parse(localStorage.getItem("formData")) || [];
    for (const dados of dadosArmazenados) {
        adicionarDadosNaTabela(dados);
    }

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const dadosFormulario = new FormData(formulario);
        const objetoDadosForm = Object.fromEntries(dadosFormulario.entries());

        adicionarDadosNaTabela(objetoDadosForm);

        dadosArmazenados.push(objetoDadosForm);
        localStorage.setItem("formData", JSON.stringify(dadosArmazenados));

        formulario.reset();
    });

    function adicionarDadosNaTabela(dados) {
        const novaLinha = document.createElement("tr");
        for (const chave in dados) {
            const celula = document.createElement("td");
            celula.textContent = dados[chave];
            novaLinha.appendChild(celula);
        }

        const colunaRemover = document.createElement("td");
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("btn-remover");
        botaoRemover.addEventListener("click", function () {
            removerDadosDaTabela(novaLinha, dados);
        });
        colunaRemover.appendChild(botaoRemover);
        novaLinha.appendChild(colunaRemover);

        corpoTabela.appendChild(novaLinha);
    }

    function removerDadosDaTabela(linha, dados) {
        corpoTabela.removeChild(linha);
        dadosArmazenados.splice(dadosArmazenados.indexOf(dados), 1);
        localStorage.setItem("formData", JSON.stringify(dadosArmazenados));
    }
});