import React from "react";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routers/Coordinator";
import { MyEndPage } from './style'

export default function EndPage() {
    const navigate = useNavigate()

    setTimeout(() => {
        goToHome(navigate)
    }, 2000);
    return (
        <>
          <Header />
          <MyEndPage>
            <h1>Pedido Finalizado com Sucesso!!!</h1>
            <h2>Obrigado pela Preferência!</h2>
          </MyEndPage>
        </>
    )
}