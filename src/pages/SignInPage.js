import { Link } from "react-router-dom";
import Container from "../components/Container";
import Inputs from "../components/Inputs";
import { useState } from "react";
import { LinkWrap } from "./SignUpPage";
import styled from "styled-components";




function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Entrar")


    function Logar(e) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Entrando...")

    }






    return (
        <Container>
            <Logo>My Wallet</Logo>
            <form onSubmit={Logar}>
                <Inputs>
                    <input disabled={disable} type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input disabled={disable} type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">{textButton}</button>
                </Inputs>
            </form>
            <Link to="/signup">
                <LinkWrap>
                    Primeira vez? Cadastre-se!
                </LinkWrap>
            </Link>
        </Container>
    )
}

export default SignInPage;




export const Logo = styled.h1`
font-family: 'Saira Stencil One';
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
margin-bottom: 24px;

`;