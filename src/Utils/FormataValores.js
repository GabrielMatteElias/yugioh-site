import { isEmptySemObjeto } from "./Validadores";

const formatarValor = (valor) => {
    if (isEmptySemObjeto(valor)) {
        return valor
    }

    if (typeof valor === 'string') {
        if (valor.includes(',')) {
            const valorPonto = valor.replace(',', '.')
            valor = Number(valorPonto)

        }
        valor = Number(valor)
    }

    // Verifica se o valor é maior ou igual a um mil
    return valor.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 });

}

export {
    formatarValor
}