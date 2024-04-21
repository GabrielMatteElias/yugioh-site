import { Navigate } from "react-router-dom";

const RotasProtegidas = ({children}) => {
    const usuarioAutenticado =   true
    return usuarioAutenticado ? children : <Navigate to='/login' />
}
export default RotasProtegidas