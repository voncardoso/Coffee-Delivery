import styled from "styled-components";



export const ContainerProductSold = styled.section`
    position: relative;
    top: 184px;
    max-width: 72.5rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 102px;

    div{
        h1{
            color: ${(props) => props.theme["yellow-dark"]};
            font-size: 2rem;
            line-height: 130%;
            font-family: 'Baloo 2';
        }

        h2{
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 130%;
        }
        ul{
            width: 32.875rem;
            padding: 40px;
            margin-top: 40px;
            background: linear-gradient(white, white) padding-box,
            linear-gradient(to right, #DBAC2C, #8047F8) border-box;
            border-radius: 10px 36px 10px 36px;
            border: 1px solid transparent;
        }

        
    }

    img{
        height: 285px;
        align-self: flex-end;
    }
`;

const STATUS_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple'
} as const

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
}

export const LiProductSold = styled.li<StatusProps>`
    
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

             svg{
                color: ${(props) => props.theme["white"]};
             }
         }
         div{
             p{
               color:  ${(props) => props.theme["base-text"]};
               line-height: 130%;
             }
         }
    
    &:nth-child(2){
        margin: 2rem 0;
    }
`;

