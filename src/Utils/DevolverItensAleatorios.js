const getRandomNumbers = (array, maxItens) => {
    const numerosAleatorios = [];
    const tamanhoArray = array.length;

    while (numerosAleatorios.length < maxItens) {
        const indiceAleatorio = Math.floor(Math.random() * tamanhoArray);
        if (!numerosAleatorios.includes(array[indiceAleatorio])) {
            numerosAleatorios.push(array[indiceAleatorio]);
        }
    }

    return numerosAleatorios;
}


export {
    getRandomNumbers
}