import { BrowserRouter, Routes, Route } from "react-router-dom"
import RotasProtegidas from "./RotasProtegidas";

// pages
import Login from "../pages/Login"
import Home from "../pages/Home"
import Produtos from "../pages/Produtos"



const Rotas = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<RotasProtegidas> <Home /> </RotasProtegidas>} />
                <Route path="/produtos" element={<RotasProtegidas> <Produtos /> </RotasProtegidas>} />
            </Routes>
        </BrowserRouter >
    )
}

export default Rotas