import Container from "../components/Container";
import styled from "styled-components";
import { IoExitOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";


function HomePage() {
    return (
        <>
            <Container display="block">
                <Header>
                    <h1>Olá, Fulano</h1>
                    <IoExitOutline size="40px" color="#ffffff" />
                </Header>
                <ScreenWrapper>
                    <ScreenEntries>
                        <h2>Não há registros de entrada ou saída</h2>
                    </ScreenEntries>
                </ScreenWrapper>
                <Footer>
                    <InFlow>
                        <IoAddCircleOutline size="25px" color="#ffffff" />
                        <h3>Nova entrada</h3>

                    </InFlow>
                    <OutFlow>
                        <IoRemoveCircleOutline size="25px" color="#ffffff" />
                        <h3>Nova saída</h3>
                    </OutFlow>
                </Footer>
            </Container>

        </>
    )
}

export default HomePage;

const Header = styled.div`
width: 100%;
height: 78px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 24px;
position: fixed;
top: 0px;
h1{
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
}

`;

const ScreenWrapper = styled.div`
padding: 78px 24px 143px 24px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;

const ScreenEntries = styled.div`
width: 100%;
height: 100%;
left: 25px;
background-color: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
h2{
    width: 180px;
    height: 46px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
}

`;

const Footer = styled.div`
width: 100%;
padding: 0px 24px;
height: 143px;
position: fixed;
bottom: 0;
display: flex;
align-items: center;
justify-content: space-between;

`;

const InFlow = styled.div`
width: 47%;
height: 114px;
background-color: #A328D6;
border-radius: 5px;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
h3{
    width: 64px;
    height: 40px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
}

`;

const OutFlow = styled.div`
width: 47%;
height: 114px;
padding: 10px;
background-color: #A328D6;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
h3{
    width: 64px;
    height: 40px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
}

`;