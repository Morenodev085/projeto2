let lista = localStorage.getItem("minhaLista");
const formulario = document.querySelector("#adicionar"); // Selecionar pelo id "adicionar"
const ulpessoas = document.querySelector(".lista ul"); // Selecionar a lista dentro da classe "lista"

if (lista) {
    lista = JSON.parse(lista);
} else {
    lista = [];
}

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Adicionar parênteses para invocar a função

    let novaPessoa = {}; // Utilizar a sintaxe simplificada para criar um objeto vazio
    novaPessoa.nome = this.querySelector('input[type="text"]').value; // Corrigir seleção do campo nome
    novaPessoa.telefone = this.querySelector('input[type="tel"]').value; // Corrigir seleção do campo telefone

    lista.push(novaPessoa);

    this.reset();

    localStorage.setItem("minhaLista", JSON.stringify(lista));

    listar(document.querySelector('input[type="text"]').value); // Passar o valor do campo de pesquisa para listar()
});

function listar(filtro = '') {
    ulpessoas.innerHTML = "";
    lista.forEach((item, key) => {
        if (item.nome.toUpperCase().includes(filtro.toUpperCase()) || filtro.trim() === '') {
            let linha = document.createElement('li');
            let s = `<button>[excluir]</button><button>[editar]</button>`;
            linha.innerHTML = "Nome: " + item.nome + ", Telefone: " + item.telefone + s;
            ulpessoas.appendChild(linha);
        }
    });
}
