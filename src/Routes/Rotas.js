import { BrowserRouter, Routes, Route } from "react-router-dom"
import RotasProtegidas from "./RotasProtegidas";

// pages
import Login from "../pages/Login"
import Home from "../pages/Home"
import Produtos from "../pages/Produtos"
import Explorar from "../pages/Explorar"



const Rotas = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<RotasProtegidas> <Home /> </RotasProtegidas>} />
                <Route path="/produtos" element={<RotasProtegidas> <Produtos /> </RotasProtegidas>} />
                <Route path="/explorar" element={<RotasProtegidas> <Explorar /> </RotasProtegidas>} />

            </Routes>
        </BrowserRouter >
    )
}

export default Rotas