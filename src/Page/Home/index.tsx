import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import ImgCopoCafe from "../../assets/ImgCopoCafe.png"
import backgound from "../../assets/Background.png"
import { ContainerHome, DetailedInformation, DetailedInformationLi, HomeInfo, ImgPrincipalHome, Ourcafe } from "./style"
import { Link } from "react-router-dom"

export function Home(){
    return(
        <ContainerHome>
                <HomeInfo>
                    <div>
                        <DetailedInformation >
                        <div>
                            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        </div>

                        <ul>
                            <DetailedInformationLi  statusColor="yellowDark">
                                <span>
                                    <ShoppingCart weight="fill" size={16}/>
                                </span>
                                Compra simples e segura
                            </DetailedInformationLi>
                            <DetailedInformationLi statusColor="baseText">
                                <span>
                                    <Package weight="fill" size={16}/>
                                </span>
                                Embalagem mantém o café intacto
                            </DetailedInformationLi>
                            <DetailedInformationLi statusColor="yellow">
                                <span>
                                    <Timer weight="fill" size={16}/>
                                </span>
                                Entrega rápida e rastreada
                            </DetailedInformationLi>
                            <DetailedInformationLi statusColor="purple">
                                <span>
                                    <Coffee weight="fill" size={16}/>
                                </span>
                                O café chega fresquinho até você
                            </DetailedInformationLi>
                        </ul>
                        </DetailedInformation>
                        <ImgPrincipalHome src={ImgCopoCafe} alt="" />
                    </div>
                </HomeInfo>

                <Ourcafe>
                    <h2>Nossos cafés</h2>
                    <ul>
                        <li>
                            <img src="" alt="" />
                            <div>
                                <p>Tradicional</p>
                                <p>Tradicional</p>
                            </div>
                            <div>
                                <span>Expresso Tradicional</span>
                                <p>O tradicional café feito com água quente e grãos moídos</p>
                            </div>
                            <div>
                                <p>R$ <span>9,90</span></p>
                                <input type="number" />
                                <Link to="/"/>
                            </div>
                        </li>
                    </ul>
                </Ourcafe>
        </ContainerHome>
    )
}