// Contador de Supply (fictício - pode ser conectado a API depois)
let totalSupply = 1000000000;
let burnedSupply = 250000000;

function updateSupply() {
    document.getElementById('totalSupply').innerText = 
        totalSupply.toLocaleString() + ' ZERO';
    document.getElementById('burnedSupply').innerText = 
        burnedSupply.toLocaleString() + ' ZERO';
}

// Copiar contrato
document.getElementById('copyContract').addEventListener('click', () => {
    const contractAddress = '0xb918b6ad21211B075a0761b87b09561D2A5e5a1f';
    navigator.clipboard.writeText(contractAddress);
    alert('Contrato copiado!');
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateSupply();
});