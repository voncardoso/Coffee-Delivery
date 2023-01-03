import styled from "styled-components";

export const ContainerConfirmOrder = styled.section`
    position: relative;
    top: 144px;
    max-width: 72.5rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(200px, 640px) 1fr;
    gap: 32px;
`;

export const Payment = styled.div`
    width: 100%;
    h3{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 130%;
        color:  ${(props) => props.theme["base-subtitle"]};
        margin-bottom: 0.93rem;
    }
`;

export const FormPayment = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: minmax(100px, 200px) minmax(100px, 276px) minmax(60px, 60px);
    grid-template-areas:
        "title title title" 
        "cep null null" 
        "rua rua rua"
        "numero complemento complemento"
        "bairro cidade uf";
    padding: 40px;
    gap: 12px;
    background: ${(props) => props.theme["base-card"]};


    >div{
        grid-area: title;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        margin-bottom: 2rem;
        svg{
            color: ${(props) => props.theme["yellow-dark"]}; 
        }

        div{
            span{
                font-weight: 400;
                color: ${(props) => props.theme["base-subtitle"]};
                line-height: 130%;
                margin-bottom: 2px;
            }

            p{
                font-size: 0.875rem;
                line-height: 130%;
                color: ${(props) => props.theme["base-text"]};
            }
        }
    }

    input{
        border: none;
        width: 100%;
        background: ${(props) => props.theme["base-button"]};
        color: ${(props) => props.theme["base-text"]};
        padding: 0.75rem;
        border-radius: 4px;
    }

    #cep{
        grid-area: cep;
    }

    #rua{
        grid-area: rua; 
    }

    #numero{
        grid-area: numero;
    }

    #complemento{
        grid-area: complemento;
    }

    #bairro{
        grid-area: bairro;
    }

    #cidade{
        grid-area: cidade;
    }

    #uf{
        grid-area: uf;
    }
`;

export const TypePayment = styled.div`
    background: ${(props) => props.theme["base-card"]};
    margin-top: 12px;
    padding: 40px;
    >div{
        grid-area: title;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 8px;
        margin-bottom: 2rem;
        svg{
            color: ${(props) => props.theme["purple"]}; 
        }

        div{
            span{
                font-weight: 400;
                color: ${(props) => props.theme["base-subtitle"]};
                line-height: 130%;
                margin-bottom: 2px;
            }

            p{
                font-size: 0.875rem;
                line-height: 130%;
                color: ${(props) => props.theme["base-text"]};
            }
        }
    }

    #payment{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-between;
        align-items: center;

        button{
            width: 100%;
            display: flex;
            justify-content: left;
            align-items: center;
            font-size: 0.75rem;
            padding: 1rem;
            border-radius: 6px;
            border: none;
            background: ${(props) => props.theme["base-button"]};
            gap: 12px;
            svg{
                color: ${(props) => props.theme["purple"]};  
            }
            p{
                text-transform: uppercase;
            }
        }

        button:hover{
            background: ${(props) => props.theme["base-hover"]};  
            cursor: pointer;
        }
    }
`;
