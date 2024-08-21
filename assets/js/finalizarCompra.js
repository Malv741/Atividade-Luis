function mostarCampoPagamento(){
    var secaoPagamento = document.getElementById('secaoPagamento');
    var secaoEndereco = document.getElementById('secaoEndereco');
    secaoEndereco.style.display = 'none';
    secaoPagamento.style.display = 'block';
}
function mostrarCampos() {
    var campoSelect = document.getElementById('campoSelect');
    var campoValores = document.getElementById('campoValores');
    var campoCartao = document.getElementById('campoCartao');
    var botaoPagamento = document.getElementById('pagamento');
    var pagamentoAVista = document.getElementById('pagamentoAVista');
    var pagamentoAPrazo = document.getElementById('pagamentoAPrazo');

    if (campoSelect.value ==='Debito'|| campoSelect.value === 'Pix' || campoSelect.value === 'Boleto'){
        campoValores.style.display = 'block';
        pagamentoAVista.style.display = 'block';
        pagamentoAPrazo.style.display = 'none';
        campoCartao.style.display = 'none';
        botaoPagamento.style.display='block';
    }

    if (campoSelect.value === 'Credito'){
        campoValores.style.display = 'block';
        pagamentoAPrazo.style.display = 'block';
        campoCartao.style.display = 'block';
        pagamentoAVista.style.display = 'block';
        botaoPagamento.style.display='block';

    }

    if (campoSelect.value === 'Selecione'){
        campoValores.style.display = 'none';
        campoCartao.style.display = 'none';
        pagamentoAPrazo.style.display = 'none';
        pagamentoAVista.style.display = 'none';
        botaoPagamento.style.display='none';

    }

}

function mostrarModal(){
    var modal = document.getElementById('modal');
    var secaoPagamento = document.getElementById('secaoPagamento');
    secaoPagamento.style.display = 'none';
    modal.style.display = 'flex';
}