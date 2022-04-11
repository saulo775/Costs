import React from "react";
import savings from "../../assets/savings.svg"

import { LinkButton } from "../../components/LinkButton";
import {Container} from "./styles";

export function Home() {
    return(
        <Container>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to={"/projects"} text={"Criar projeto"}/>
            <img src={savings} alt="Costs" />
        </Container>
    )
}