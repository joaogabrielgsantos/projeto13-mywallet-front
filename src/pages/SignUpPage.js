import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Inputs from "../components/Inputs";
import styled from "styled-components";
import { Logo } from "./SignInPage";


function SignUpPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Cadastrar")






    function handleCadastrar(e) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Cadastrando...")



    }


    return (
        <Container>
            <Logo>My Wallet</Logo>
            <form onSubmit={handleCadastrar}>
                <Inputs>
                    <input disabled={disable} type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    <input disabled={disable} type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input disabled={disable} type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <input disabled={disable} type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    <button disabled={disable} type="submit">{textButton}</button>
                </Inputs>
            </form>

            <Link to="/">
                <LinkWrap>
                    Já tem uma conta? Entre agora!
                </LinkWrap>
            </Link>

        </Container>
    )


}

export default SignUpPage;


export const LinkWrap = styled.div`
	text-decoration-line: underline;
    color: #FFFFFF;
`;