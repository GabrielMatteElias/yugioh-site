const validar_usuario = (usuario) => {
    return usuario?.toString().length > 0
}

const validar_senha = (senha) => {
    return senha?.toString().length > 0
}

const validaCampoVazio = (campo) => {
    return campo === null ? false : true
}

//Verificar campos vazios
const isEmpty = (str) => {
    return str === '' || str === null || str === undefined || Object.keys(str).length === 0
}

const isEmptySemObjeto = (str) => {
    return str === '' || str === null || str === undefined
}

export {
    validar_usuario,
    validar_senha,
    validaCampoVazio,
    isEmpty,
    isEmptySemObjeto
}