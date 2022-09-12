import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Inputs from "../components/Inputs";
import styled from "styled-components";
import { Logo } from "./SignInPage";
import { postSignUp } from "../services/MyWallet";



function SignUpPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Cadastrar")

    const navigate = useNavigate();



    function handleCadastrar(e) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Cadastrando...")

        const body = {
            email, name, password
        }

        if (password !== confirmPassword){
            alert("Senha inválida!")
            window.location.reload(false)
        } else {

            postSignUp(body).then(response => {
                console.log(response)
                navigate("/");
            })
    
            postSignUp(body).catch(() => {
                alert("Não foi possível realizar o cadastro")
                window.location.reload(false)
            })


        }

    

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