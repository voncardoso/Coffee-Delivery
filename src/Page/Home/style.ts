import styled from "styled-components";
import background from "../../assets/Background.png"
import {rgba} from "polished"
//section Infomraçoes

export const ContainerHome = styled.section`
    position: relative;
    top: 104px;
`;

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
    -webkit-mask-image: linear-gradient(to top, transparent 0%, white 10%);
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

    h2{
        font-family: 'Baloo 2', cursive;
        font-size: 2rem;
        font-weight: 800;
        line-height: 130%;
        margin-bottom: 3.375rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2rem;

        li{
            background: ${(props) => props.theme["base-card"]};
            padding: 0px 24px 20px 24px;
            border-top-right-radius: 36px;
            border-bottom-left-radius: 36px;
            display: flex;
            flex-direction: column;
            justify-content: center;


            img{
                position: relative;
                top: -20px;
                max-width: 120px;
                width: 100%;
                margin: 0 auto;
            }
        }
    }
`

export const MethodOfPreparationCoffe = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 20px;
    p{
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;
        background:  ${(props) => props.theme["yellow-light"]};
        color:  ${(props) => props.theme["yellow-dark"]};
        line-height: 130%;
        padding: 4px 8px;
        border-radius: 10px;
    }
`;

export const TypeCoffe = styled.div`
    display: flex;
    flex-direction: column;
    strong{
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        color:  ${(props) => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        line-height: 130%;
        text-align: center;
        margin-bottom: 8px;
    }

    p{
        color:  ${(props) => props.theme["base-label"]};
        font-size: 0.875rem;
        text-align: center;
        line-height: 130%;
        margin-bottom: 2rem;
    }
`;

export const MoneyCoffe = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >p{
        font-family: 'Baloo 2', cursive;
        color:  ${(props) => props.theme["base-text"]};
        line-height: 130%;
        span{
            font-weight: 800;
            font-size: 1.5rem;
        }
    }

    >div{
        display: flex;
        gap: 8px;
        align-items: center;
        >div{
        display: flex;
        align-items: center;
        gap: 4px;
        background: ${(props) => props.theme["base-button"]};
        padding: 8.5px;
        border-radius: 6px;

        P{
            font-size: 1rem;
            line-height: 130%;
            width: 20px;
            text-align: center;
            color:${(props) => props.theme["base-title"]} ;
        }

        button{
            display: flex;
            align-items: center;
            border: none;
            background: none;
            cursor: pointer;
            svg{
                color:${(props) => props.theme["purple"]} ;
            }
        }

    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        background: ${(props) => props.theme["purple-dark"]};
        border-radius: 6px;

        svg{
            color:  ${(props) => props.theme["base-card"]};
        }
    }
    }
`;