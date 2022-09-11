import styled from "styled-components";


function Inputs ({children}){
    return (
        <InputsWrapper>
            {children}
        </InputsWrapper>

    )
}

const InputsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input {
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 15px;
    margin-bottom: 13px;
    &::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000000;
   }
}
div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    input{
        width: 146px;
        padding-left: 6px;
        
    }
}

button {
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    border: #A328D6;;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 24px;
    margin-top: 8px;

}

`;


export default Inputs;