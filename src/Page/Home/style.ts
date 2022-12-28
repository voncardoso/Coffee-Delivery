import styled from "styled-components";
export const ContainerHome = styled.section`
    max-width: 72.5rem;
    width: 100%;
    padding: 0rem 1.125rem;
    margin: 0 auto;
    
`;


//section Infomraçoes

export const HomeInfo = styled.section`
    margin: 0 auto;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 5.875rem;
    margin-bottom: 5.875rem;
    gap: 56px;
    z-index: 1000;

    .fundo{
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 100px;
        border: 0;
        left: 0;
        width: 100%;
        max-height: 34rem;
        height: 100%;
    }
`;

export const DetailedInformation = styled.div`
    z-index: 1000;
    div{
        max-width: 588px;
        width: 100%;
        margin-bottom: 4.125rem;
        h1{
            font-family: 'Baloo 2', cursive;
            font-size: 3rem;
            color: ${(props) => props.theme["base-title"]};
            line-height: 130%;
            font-weight: 800;
        }

        p{
            font-size: 1.25rem;
            line-height: 130%;
            font-family: 'Roboto', sans-serif;
            margin-top: 1rem;
            color: ${(props) => props.theme["base-subtitle"]};
        }
    }

    ul{
        width: 100%;
        display: grid;
        grid-template-columns: minmax(187px, 250px) 1fr;
        list-style: none;
        column-gap: 20px
    }
`;

const STATUS_COLORS = {
    yellowDark: 'yellow-dark',
    baseText: 'base-text',
    yellow: 'yellow',
    purple: 'purple'
} as const

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
}

export const DetailedInformationLi = styled.li<StatusProps>`
    z-index: 1000;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
    margin-bottom: 1.25rem;
    color: ${(props) => props.theme["base-text"]};
    display: flex;
    align-items: center;
    gap: 12px;
    span{
        background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        gap: 8px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    svg{
        color: ${(props) => props.theme["white"]};
    }
`;

export const ImgPrincipalHome = styled.img`
    z-index: 1000;
`;

