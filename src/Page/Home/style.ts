import styled from "styled-components";
import background from "../../assets/Background.png"
import {rgba} from "polished"
//section Infomraçoes

export const HomeInfo = styled.section`
    width: 100%;
    margin: 0 auto;
    background: ${({theme}) => `url(${background}) no-repeat center,
    linear-gradient(
        45deg,
        ${theme["white"]} 0%,
        ${rgba(theme["background"], 0.8)} 100%,
        ${theme["background"]} 100%
    )`};
    -webkit-mask-image: linear-gradient(to top, transparent 0%, white 20%);
    background-size: cover;
    > div{
        max-width: 72.5rem;
        width: 100%;
        height: 34rem;
        padding: 0rem 1.125rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 56px;
        z-index: 1000;
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


// section nosso cafe

export const Ourcafe = styled.section`
    max-width: 72.5rem;
    width: 100%;
    padding: 0rem 1.125rem;
    margin: 0 auto;
    margin-bottom : 157px;
`
