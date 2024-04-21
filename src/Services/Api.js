import axios from 'axios'
import Swal from 'sweetalert2'

export default class Api {
    async login(usuario, senha) {
        try {

            const { data } = await this.axios.post('/login', { usuario, senha },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    timeout: 30000 //30 segundos
                })
            if (data) {
                sessionStorage.setItem('token', data.usuario.token_acesso)
                sessionStorage.setItem('permissoes', data.usuario.permissoes)
                sessionStorage.setItem('motivos_baixas', JSON.stringify(data.motivos_baixa))
                sessionStorage.setItem('codigo_usuario', data.usuario.usu_cod)
                sessionStorage.setItem('usu_nome_completo', data.usuario.usu_nome_completo)
                sessionStorage.setItem('usu_nome', data.usuario.usu_nome)
                sessionStorage.setItem('usu_unidade', data.usuario.usu_unidade)
                sessionStorage.setItem('credores', JSON.stringify(await this.buscar_credor()))
                sessionStorage.setItem('unidades', JSON.stringify(data.unidades))
                sessionStorage.setItem('usu_foto', data.usuario.imagem)
                sessionStorage.setItem('status_pda', JSON.stringify(data.status_pda))

                return true
            }

        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                // timeout da requisição
                Swal.fire({
                    icon: 'error',
                    title: 'Tempo limite excedido! Tente novamente',
                    confirmButtonColor: "#ef7c00",
                })
                return false
            } else if (error.code === 'ERR_NETWORK') {
                // outras exceções
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao efetuar login! Favor abrir chamado para o desenvolvimento.',
                    confirmButtonColor: "#ef7c00",
                })
                return false
            } else if (error.response.data.detail.includes('Usuário')) {
                //usuario sem permissao ou credenciais incorretas
                return error.response.data.detail
            }
        }
    }

    // https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt&archetype=Blue-Eyes

    async getCards() {
        try {
            const resposta = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?race=Aqua&language=pt')
            console.log(resposta);

            if (resposta && resposta.data) {
                return resposta.data.data
            }
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                // timeout da requisição
                Swal.fire({
                    icon: 'error',
                    title: 'Tempo limite excedido! Tente novamente',
                    confirmButtonColor: "#ef7c00",
                })
            } else if (error.response.data.detail === "Token inválido ou expirado") {
                // outras exceções
                Swal.fire({
                    icon: 'error',
                    text: 'Sessão expirada favor logar novamente!',
                    confirmButtonColor: "#ef7c00",
                }).then(function () {
                    sessionStorage.clear()
                    window.location.href = './login'
                });
                setTimeout(() => {
                    sessionStorage.clear()
                    window.location.href = './login'
                }, 5000)
            } else {
                // outras exceções
                Swal.fire({
                    icon: 'error',
                    title: 'Erro inesperado. Favor contatar o desenvolvimento!',
                    confirmButtonColor: "#ef7c00",
                })
            }
            return []
        }
    }

    async getArchetypes() {
        try {
            const resposta = await axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')

            if (resposta && resposta.data) {
                return resposta.data
            }
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                // timeout da requisição
                Swal.fire({
                    icon: 'error',
                    title: 'Tempo limite excedido! Tente novamente',
                    confirmButtonColor: "#ef7c00",
                })
            } else if (error.response.data.detail === "Token inválido ou expirado") {
                // outras exceções
                Swal.fire({
                    icon: 'error',
                    text: 'Sessão expirada favor logar novamente!',
                    confirmButtonColor: "#ef7c00",
                }).then(function () {
                    sessionStorage.clear()
                    window.location.href = './login'
                });
                setTimeout(() => {
                    sessionStorage.clear()
                    window.location.href = './login'
                }, 5000)
            } else {
                // outras exceções
                Swal.fire({
                    icon: 'error',
                    title: 'Erro inesperado. Favor contatar o desenvolvimento!',
                    confirmButtonColor: "#ef7c00",
                })
            }
            return []
        }
    }

    usuarioAutenticado() {
        return sessionStorage.getItem("token") !== null ? true : false
    }

    async logout() {
        sessionStorage.clear();
        return true
    }
}