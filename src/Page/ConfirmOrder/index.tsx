import {MapPinLine, CurrencyDollar, CreditCard, Money, Bank} from "phosphor-react"
import { ContainerConfirmOrder, FormPayment, Payment, TypePayment } from "./style";

export function ConfirmOrder(){

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
                        <button>
                            <CreditCard size={16} />
                            <p>Cartão de crédito</p>
                        </button>
                        <button>
                            <Bank size={16} />
                            <p>Cartão de débito</p>
                        </button>
                        <button>
                            <Money size={16} />
                            <p>dinheiro</p>
                        </button>
                    </div>
                </TypePayment>
           </Payment>

           <div>
            <h1>tasydgashjkghjk</h1>
           </div>
        </ContainerConfirmOrder>
    )
}