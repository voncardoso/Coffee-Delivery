import { MapPin, Timer, CurrencyDollar } from "phosphor-react"
import { useContext } from "react";
import ImgEntrega from "../../assets/Illustration.png"
import { CartContext } from "../../contexts";
import { ContainerProductSold, LiProductSold } from "./style";

export function ProductSold(){
    const {dataPayment} = useContext(CartContext)
    return(
        <ContainerProductSold>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você</h2>

                <ul>
                    <LiProductSold statusColor="purple" >
                        <span>
                            <MapPin size={16}  weight="fill"/>
                        </span>
                        <div>
                            <p>Entrega em <strong>{dataPayment.rua}</strong>, {dataPayment.numero}</p>
                            <p>{dataPayment.bairro} - {dataPayment.cidade}, {dataPayment.uf}</p>
                        </div>
                    </LiProductSold>
                    <LiProductSold statusColor="yellow">
                        <span>
                            <Timer size={16} weight="fill"/>
                        </span>
                        
                        <div>
                            <p>Previsão de entrega</p>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </LiProductSold>
                    <LiProductSold statusColor="yellowDark">
                        <span>
                            <CurrencyDollar size={16} />
                        </span>
                        
                        <div>
                            <p>Entrega em Rua {dataPayment.rua}, {dataPayment.numero}</p>
                            <strong>{dataPayment.payment}</strong>
                        </div>
                    </LiProductSold>
                </ul>
            </div>
            <img src={ImgEntrega} alt="" />
        </ContainerProductSold>
    )
}