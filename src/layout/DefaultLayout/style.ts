import styled from "styled-components";

export const ContainerDefalut = styled.section`
    >div{
        z-index: 100;
        position: fixed;
        width: 100%;
        background: ${(props) => props.theme["background"]};
    }
`;