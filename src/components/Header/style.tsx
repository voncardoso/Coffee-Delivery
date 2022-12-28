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