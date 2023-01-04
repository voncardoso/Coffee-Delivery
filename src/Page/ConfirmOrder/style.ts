import styled from "styled-components";

export const ContainerConfirmOrder = styled.section`
    position: relative;
    top: 144px;
    max-width: 72.5rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(200px, 640px) 1fr;
    gap: 32px;

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

export const Payment = styled.div`
    width: 100%;
   
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

export const CoffeeSelected = styled.div`
    max-width: 28rem;
    width: 100%;
    max-height: 31.125rem;

    >div{
        background: ${(props) => props.theme["base-card"]};
        border-top-right-radius: 36px;
        border-bottom-left-radius: 36px;
    }
`;


export const ListCoffeeSelected = styled.ul`
    padding: 40px;
    li{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;
        margin-bottom: 1.5rem;
        img{
            max-width: 64px;
            width: 100%;
        }

        div{
            width: 100%;
            padding-top: 3px;
            header{
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.5rem;
                p{
                    color: ${(props) => props.theme["base-subtitle"]};
                    line-height: 130%;
                }
            }

            >div{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 8px;

                svg{
                    display: flex;
                    align-items: center;
                    color: ${(props) => props.theme["purple"]};
                }
                >div{
                    width: 72px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: ${(props) => props.theme["base-button"]};
                    padding: 5px;
                    border-radius: 6px;
                    >button{
                        border: none;
                        background: none;
                    }
                }
                
                #remover{
                    padding: 6px;
                    border-radius: 6px;
                    border: none;
                    font-size: 12px;
                    background: ${(props) => props.theme["base-button"]};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    text-transform: uppercase;
                }
            }
        }
    }

    li + li{
        padding-top: 1.5rem;
        border-top: 1px solid  ${(props) => props.theme["base-button"]};
    }
`;


export const ListCoffeeSelectedValue = styled.div`
    padding: 40px;
`;