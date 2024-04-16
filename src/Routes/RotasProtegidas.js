import { Navigate } from "react-router-dom";
import Api from "../Services/Api";

const userService = new Api()

const RotasProtegidas = ({children}) => {
    const usuarioAutenticado =   true/*userService.usuarioAutenticado()*/
    return usuarioAutenticado ? children : <Navigate to='/login' />
}
export default RotasProtegidas