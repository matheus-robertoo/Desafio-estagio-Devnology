function extrairTexto(seletor) {
    const elemento = document.querySelector(seletor);
    return elemento ? elemento.innerText.trim() : 'Informação não disponível';
}

function extrairNutriScore() {
    const nutriScoreElement = document.querySelector('a[href="#panel_nutriscore"]');
    if (nutriScoreElement) {
        const classList = nutriScoreElement.className.split('_');
        const nutriScoreValue = classList.pop();
        if (['a', 'b', 'c', 'd', 'e'].includes(nutriScoreValue)) {
            return nutriScoreValue;
        }
    }
    return 'Informação Nutri Score indisponível no site';
}

function extrairNova() {
    const novaElement = document.querySelector('div.img_attr img[src*="nova-group"]');
    const novaValue = novaElement ? novaElement.src.split('-').pop().split('.')[0] : 'Informação Nova indisponível no site';
    return (novaValue >= 1 && novaValue <= 4) ? novaValue : 'Informação Nova indisponível no site';
}

function extrairEcoScore() {
    const ecoScoreElement = document.querySelector('a[href="#panel_ecoscore"]');
    const ecoScoreValue = ecoScoreElement ? ecoScoreElement.className.split('_').pop() : 'Informação EcoScore indisponível no site';
    return (['a', 'b', 'c', 'd', 'e'].includes(ecoScoreValue)) ? ecoScoreValue : 'Informação EcoScore indisponível no site';
}

const nomeDoProduto = extrairTexto('h1[itemprop="name"]');
const marca = extrairTexto('a[itemprop="brand"]');
const ingredientes = extrairTexto('div.panel_text');
const nutriScore = extrairNutriScore();
const nova = extrairNova();
const ecoScore = extrairEcoScore();

const informacoesDoProduto = {
    'Nome do produto': nomeDoProduto || 'Informação indisponível no site',
    'Marca': marca || 'Informação indisponível no site',
    'Ingredientes': ingredientes || 'Informação de ingredientes indisponível no site',
    'NutriScore': nutriScore,
    'Nova': nova,
    'EcoScore': ecoScore
};

console.log('Nome do produto:', informacoesDoProduto['Nome do produto']);
console.log('Marca:', informacoesDoProduto['Marca']);
console.log('Ingredientes:', informacoesDoProduto['Ingredientes']);
console.log('NutriScore:', informacoesDoProduto['NutriScore']);
console.log('Nova:', informacoesDoProduto['Nova']);
console.log('EcoScore:', informacoesDoProduto['EcoScore']);