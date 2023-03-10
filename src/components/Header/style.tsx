import styled from "styled-components";


export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 72.5rem;
    margin: 0 auto;
    padding: 2rem 1.125rem;


    nav{
        display: flex;
        align-items: center;
        gap: 12px;
        button{
            display: flex;
            align-items: center;
            gap: 4px;
            border: none;
            background: ${(props) => props.theme['purple-light']};
            font-size: 0.875rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color:  ${(props) => props.theme['purple-dark']};
            padding: 8px;
            border-radius: 6px;
            svg{
                color:  ${(props) => props.theme['purple']};
            }
        }

        a{
            display: flex;
            align-items: center;
            padding: 8px;
            background: ${(props) => props.theme['yellow-light']};
            border-radius: 6px;

            svg{
                color: ${(props) => props.theme['yellow-dark']};
            }
        }
    }
`;

export const IconCarItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
        a{
            display: flex;
            align-items: center;
            padding: 8px;
            background: ${(props) => props.theme['yellow-light']};
            border-radius: 6px;

            svg{
                color: ${(props) => props.theme['yellow-dark']};
            }
        }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: -10px;
        right: 8px;
        align-self: flex-start;
        font-size: 0.75rem;
        padding: 2px 4px;
        background: red;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        color: ${(props) => props.theme['background']};
        background: ${(props) => props.theme['yellow-dark']}
    }
`;