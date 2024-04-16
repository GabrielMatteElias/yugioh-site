//Importação das bibliotecas utilizadas
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

//Importação das imagens

//Importação da estilização
import "./Login.css";
import Alert from '@mui/material/Alert';
//Importação da variavel de conecxão com o backend
import Api from '../Services/Api';
import { validar_senha, validar_usuario } from '../Utils/Validadores';

//Carregamento
import CircularProgress from '@mui/material/CircularProgress';

//instanciando a classe de conexão com backend
const userService = new Api()

const Login = () => {

    /* ===#===#=== Variáveis de usuário e Senha ===#===#===  */
    const [loading, setLoading] = useState(false)
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    /* ===#===#=== Variável de mensagem de erro ===#===#===  */
    const [erro, setErro] = useState('')

    /* ===#===#=== variavel para navageção entre as páginas ===#===#===  */
    const navigate = useNavigate();

    /* ===#===#=== Botão login ===#===#===  */
    const handleClique = async (e) => {
        e.preventDefault();

        setLoading(true)

        // const response = await userService.login(usuario, base64_encode(senha))
        // if (response === true) { // recebeu retorno do backend, vai navegar para o menu com o navigate
        //     navigate('/')
        //     setLoading(false)
        // } else if (response === false){
        //     setLoading(false)

        // }else {
        //     setLoading(false)
        //     setErro(response)
        // }
    }

    const validador_input = () => {
        return validar_usuario(usuario) && validar_senha(senha)
    }

    return (

        <div className='login'>
            {/* // <img src={logoHoepers} className='logo-hoepers' /> */}
            <form className="container-principal-login">

                <div className='agrupador-input-login'>
                    <h1 className='titulo-login'>
                        {/* <img src={hoepers} className='logo-hoepers-login' alt='' /> */}
                        <span className='hoepers'>LOGIN</span>
                    </h1>

                    <label>
                        <input
                            type="text"
                            name="usuario"
                            placeholder='Usuário'
                            id='usuario'
                            className='input-login'
                            maxLength='45'
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value.toLocaleUpperCase())} required
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Senha'
                            className='input-login'
                            maxLength='8'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </label>

                    <div className='agrupador-botao'>
                        <div>
                            <button
                                type="submit"
                                onClick={handleClique}
                                disabled={loading === true || !validador_input()}

                            >{loading ? <CircularProgress className={'circular-progress'} size={35} /> : 'Entrar'}
                            </button>
                            {/* {loading && <Spinner radius={38} color={"#EF7C00"} stroke={3} visible={true} />} */}
                            {erro && <Alert id='mensagem-erro-login' severity="info"><p className='erro-senha'>{erro}</p></Alert>}

                        </div>
                    </div>

                </div>
                <div className="container-icone">
                </div>
            </form>
        </div>
    )
}

export default Login