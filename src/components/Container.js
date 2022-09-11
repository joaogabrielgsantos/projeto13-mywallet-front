import styled from 'styled-components';
function Container(props){
    return (
        <Conteudo color={props.color}>
            {props.children}
        </Conteudo>
    )
}


const Conteudo = styled.div`
	width: 100%;
    height: 100vh;
	background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;




export default Container;