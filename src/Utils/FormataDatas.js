import { format } from 'date-fns';

const formataData = (data) => {
    if (data === null) {
        return
    } else {
        const partesData = data.split('-');
        const ano = partesData[0];
        const mes = partesData[1];
        const dia = partesData[2];

        return `${dia}/${mes}/${ano}`
    }
}

const formataDataBordero = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const getDataAtual = () => {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const dataFormatada = `${ano}${mes}${dia}`;

    return dataFormatada
}

const getDataAtualInput = () => {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const dataFormatada = `${ano}-${mes}-${dia}`;

    return dataFormatada
}

const getDataComHora = (dataHora) => {
    return  format(new Date(dataHora), 'dd/MM/yyyy HH:mm:ss'); 
}

const formataMesAno = (data) => {
    const dataString = String(data)

    const ano = dataString.substring(0, 4);
    const mes = dataString.substring(4, 6);

    const dataFormatada = `${mes}/${ano}`;
    return dataFormatada
}


export {
    formataData,
    formataDataBordero,
    getDataAtual,
    getDataAtualInput,
    getDataComHora,
    formataMesAno
}