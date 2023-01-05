import {useForm} from "react-hook-form"
import {MapPinLine, CurrencyDollar, CreditCard, Money, Bank, Minus, Plus, ShoppingCart, Trash} from "phosphor-react"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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

interface IFormInput {
    cep: String;
    rua: string;
    complemento: string;
    bairro: string
    cidade: string
    uf: string;
    numero: number;
  }


export function ConfirmOrder(){
    const {register, handleSubmit, watch, formState:{errors}} = useForm<IFormInput>()
    const navigate = useNavigate()
    const {carCoffe, handleRemoverItem, AddCoffe, RemoveCoffe, addPayment, clearCarCoffe} = useContext(CartContext);

    const [deliveryValue, setDeliveryValue] = useState(5)
    const[typePay, setTypePay] = useState("")
    const [buttonCredito, setBbuttonCredito] = useState("");
    const [buttonDebito, setBbuttonDebito] = useState("");
    const [buttonDinheiro, setBbuttonDinheiro] = useState("");


    function ValueItem(value: number, amount: number){
        const total = value * amount;

        return total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    function ValueTotalCars(){
        const valueItens = carCoffe.reduce((prevItem, item) => prevItem + (Number(item.amount) * Number(item.money)), 0)

        const total = valueItens + deliveryValue

        return total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    function ValueTotalItens(){
        const total = carCoffe.reduce((prevItem, item) => prevItem + (Number(item.amount) * Number(item.money)), 0)

        return total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    function handleFinishedOrder(data: IFormInput){
        const dataAdress = {
             cidade:data.cidade ,
             cep:data.cep,
             bairro:data.bairro,
             uf:data.uf,
             rua:data.rua,
             complemento:data.complemento ,
             numero:data.numero,
             payment: typePay,
        }
        
        addPayment(dataAdress)
        clearCarCoffe()
        navigate("/produtovendido")
    }

    return(
        <ContainerConfirmOrder onSubmit={handleSubmit(handleFinishedOrder)}>
           <Payment>
                <h3>Complete seu pedido</h3>
                <FormPayment>
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
                        type="text" 
                        placeholder="CEP"
                        {...register("cep",{ required: true})}
                    />
                    <input
                        id="rua"
                        type="text" 
                        placeholder="Rua"
                        {...register("rua",{ required: true })}
                    />
                    <input
                        id="numero"
                        type="text" 
                        placeholder="Número"
                        {...register("numero",{ required: true })}
                    />
                    <input
                        id="complemento"
                        type="text" 
                        placeholder="Complemento"
                        {...register("complemento")}
                    />
                    <input
                        id="bairro"
                        type="text" 
                        placeholder="Bairro"
                        {...register("bairro",{ required: true })}
                    />
                    <input
                        id="cidade"                    
                        type="text" 
                        placeholder="Cidade"
                        {...register("cidade", { required: true })}
                    />
                    <input
                        id="uf"
                        type="text" 
                        placeholder="UF"
                        {...register("uf", { required: true })}
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
                            type="button"
                            onClick={() =>{
                                setBbuttonCredito("active")
                                setBbuttonDebito("")
                                setBbuttonDinheiro("")
                                setTypePay("Cartão")
                            }}
                        >
                            <CreditCard size={16} />
                            <p>Cartão de crédito</p>
                        </button>
                        <button
                            className={buttonDebito} 
                            type="button"
                            onClick={() =>{
                                setBbuttonCredito("")
                                setBbuttonDebito("active")
                                setBbuttonDinheiro("")
                                setTypePay("Debito")
                            }}
                        >
                            <Bank size={16} />
                            <p>Cartão de débito</p>
                        </button>
                        <button 
                            className={buttonDinheiro} 
                            type="button"
                            onClick={() =>{
                                setBbuttonCredito("")
                                setBbuttonDebito("")
                                setBbuttonDinheiro("active")
                                setTypePay("Dinheiro")
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
                                    <strong>{ValueItem(item.money, item.amount)}</strong>
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
                    <p id="value">{ValueTotalItens()}</p>

                    <p>Entrega</p>
                    <p id="value">{carCoffe.length === 0 ? "0,00" : deliveryValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>

                    <strong>Total</strong>
                    <strong id="total">{carCoffe.length === 0 ? "0,00" : ValueTotalCars()}</strong>
                </ListCoffeeSelectedValue>

                <ButtonConfirm 
                    type="submit"
                    onClick={() =>{
                      //  handleFinishedOrder()
                    }}>Confirma pedido</ButtonConfirm>
            </div>
           </CoffeeSelected>
        </ContainerConfirmOrder>
    )
}