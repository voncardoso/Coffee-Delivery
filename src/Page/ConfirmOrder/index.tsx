import {MapPinLine, CurrencyDollar, CreditCard, Money, Bank, Minus, Plus, ShoppingCart, Trash} from "phosphor-react"
import { useContext, useState } from "react";
import { CartContext } from "../../contexts";
import { 
    ContainerConfirmOrder, 
    FormPayment, 
    Payment, 
    TypePayment, 
    CoffeeSelected,
    ListCoffeeSelected,
    ListCoffeeSelectedValue,
    ButtonConfirm
} from "./style";


export function ConfirmOrder(){
    const {carCoffe, handleRemoverItem, AddCoffe, RemoveCoffe} = useContext(CartContext);

    const [buttonCredito, setBbuttonCredito] = useState("");
    const [buttonDebito, setBbuttonDebito] = useState("");
    const [buttonDinheiro, setBbuttonDinheiro] = useState("");

    function ValueTotalItem(value: number, amount: number){
        const total = value * amount;

        return total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    
    return(
        <ContainerConfirmOrder>
           <Payment>
                <h3>Complete seu pedido</h3>
                <FormPayment action="">
                    <div>
                        <MapPinLine size={22} />
                        <div>
                            <img src="" alt="" />
                            <div>
                                <span>Endereço de Entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </div>
                    </div>
                    <input
                        id="cep"
                        name="cep" 
                        type="text" 
                        placeholder="CEP"
                    />
                    <input
                        id="rua"
                        name="rua" 
                        type="text" 
                        placeholder="Rua"
                    />
                    <input
                        id="numero"
                        name="numero" 
                        type="text" 
                        placeholder="Número"
                    />
                    <input
                        id="complemento"
                        name="complemento" 
                        type="text" 
                        placeholder="Complemento"
                    />
                    <input
                        id="bairro"
                        name="bairro" 
                        type="text" 
                        placeholder="Bairro"
                    />
                    <input
                        id="cidade"
                        name="cidade" 
                        type="text" 
                        placeholder="Cidade"
                    />
                    <input
                        id="uf"
                        name="uf" 
                        type="text" 
                        placeholder="UF"
                    />
                </FormPayment>

                <TypePayment>
                    <div>
                        <CurrencyDollar size={22} />
                        <div>
                            <span>Pagamento</span>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>

                    <div id="payment">
                        <button
                            className={buttonCredito} 
                            onClick={() =>{
                                setBbuttonCredito("active")
                                setBbuttonDebito("")
                                setBbuttonDinheiro("")
                            }}
                        >
                            <CreditCard size={16} />
                            <p>Cartão de crédito</p>
                        </button>
                        <button
                            className={buttonDebito} 
                            onClick={() =>{
                                setBbuttonCredito("")
                                setBbuttonDebito("active")
                                setBbuttonDinheiro("")
                            }}
                        >
                            <Bank size={16} />
                            <p>Cartão de débito</p>
                        </button>
                        <button 
                            className={buttonDinheiro} 
                            onClick={() =>{
                                setBbuttonCredito("")
                                setBbuttonDebito("")
                                setBbuttonDinheiro("active")
                            }}
                        >
                            <Money size={16} />
                            <p>dinheiro</p>
                        </button>
                    </div>
                </TypePayment>
           </Payment>

           <CoffeeSelected>
            <h3>Cafés selecionados</h3>
            <div>
                <ListCoffeeSelected>
                   {carCoffe.map((item) =>{
                    return(
                        <li key={item.id}>
                            <img src={item.img} alt="" />
                            <div>
                                <header>
                                    <p>{item.type}</p>
                                    <strong>{ValueTotalItem(item.money, item.amount)}</strong>
                                </header>
                                <div>
                                    <div>
                                        <button onClick={() =>{
                                           RemoveCoffe(item.id, item)
                                        }}>
                                            <Minus weight="bold" size={14}/>
                                        </button>
                                        <p>{item.amount}</p>
                                        <button onClick={() =>{
                                           AddCoffe(item.id, item)
                                        }}>
                                            <Plus weight="bold" size={14}/>
                                        </button>
                                    </div>
                                    <button id="remover" onClick={() =>{
                                       handleRemoverItem(item.id)
                                    }}>
                                        <Trash size={16}/>
                                        <p>Remover</p>
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                   })}
                </ListCoffeeSelected>

                <ListCoffeeSelectedValue>
                    <p>Total de intens</p>
                    <p id="value">R$ 29,70</p>

                    <p>Entrega</p>
                    <p id="value">R$ 3,50</p>

                    <strong>Total</strong>
                    <strong id="total">R$ 33,20</strong>
                </ListCoffeeSelectedValue>

                <ButtonConfirm>Confirma pedido</ButtonConfirm>
            </div>
           </CoffeeSelected>
        </ContainerConfirmOrder>
    )
}