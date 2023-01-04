import { MapPin, Timer, CurrencyDollar } from "phosphor-react"
import ImgEntrega from "../../assets/Illustration.png"
import { ContainerProductSold, LiProductSold } from "./style";

export function ProductSold(){
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
                            <p>Entrega em <strong>Rua João Daniel Martinelli</strong>, 102</p>
                            <p>Farrapos - Porto Alegre, RS</p>
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
                            <p>Entrega em Rua João Daniel Martinelli, 102</p>
                            <strong>Cartão de Credito</strong>
                        </div>
                    </LiProductSold>
                </ul>
            </div>
            <img src={ImgEntrega} alt="" />
        </ContainerProductSold>
    )
}