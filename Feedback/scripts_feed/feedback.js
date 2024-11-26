// Função limitar notas
function updaten() {
    var input = document.getElementById('notaModal');
    if (input.value > 5) {
        input.value = 5;
    } else if (input.value < 0) {
        input.value = 0;
    }
    converterNotaEmEstrelas(Number(input.value)); 
}

// Função para converter nota em estrelas e retornar o HTML
function converterNotaEmEstrelas(nota) {
    var estrelas = '';
    for (var i = 1; i <= 5; i++) {
        if (i <= nota) {
            estrelas += '<i class="fas fa-star"></i>';
        } else {
            estrelas += '<i class="far fa-star"></i>';
        }
    }
    return estrelas;
}

// Função para criar card
function outcome() {
    const nome = document.getElementById('nameModal').value;
    const opiniao = document.getElementById('opniaoModal').value;
    const nota = Number(document.getElementById('notaModal').value); 

    const cardHtml = `
        <div class="row g-0">
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="textBox">
                        <div class="textContent">
                            <i class="bi bi-person-circle"></i> <p class="h1 hc">${nome}</p>
                            <span class="span spanc"></span>
                            ${converterNotaEmEstrelas(nota)} <!-- Converte a nota em estrelas -->
                        </div>
                        <p class="p pc">${opiniao}</p>
                    </div>
                </div>
            </div>
        </div>`;
    
    document.getElementById('cards').innerHTML += cardHtml;
}
