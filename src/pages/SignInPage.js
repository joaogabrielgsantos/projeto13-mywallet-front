import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Inputs from "../components/Inputs";
import { useState } from "react";
import { LinkWrap } from "./SignUpPage";
import styled from "styled-components";
import { postSignIn } from "../services/MyWallet";



function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Entrar")
    const [member, setMember] = useState('')

    const navigate = useNavigate();


    function Logar(e) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Entrando...")

        const body = {
            email, password
        }


        postSignIn(body).then(response => {
            const { data } = response
            console.log(data.membership)
            const memberSerializado = JSON.stringify({ ...data })
            localStorage.setItem('my-wallet', memberSerializado)
            const memberStorage= JSON.parse(localStorage.getItem('my-wallet'));
            setMember(memberStorage)
            navigate("/home");

        })
        postSignIn(body).catch(response => {
            const { data } = response
            console.log(data);
            alert("Usuário não encontrado")
            window.location.reload(false);
        })

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


