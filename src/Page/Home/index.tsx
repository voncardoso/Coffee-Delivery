import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react"
import ImgCopoCafe from "../../assets/ImgCopoCafe.png"
import { ContainerHome, DetailedInformation, DetailedInformationLi, HomeInfo, ImgPrincipalHome, MethodOfPreparationCoffe, MoneyCoffe, Ourcafe, TypeCoffe } from "./style"
import { useContext } from "react"
import { CartContext } from "../../contexts"



export function Home(){
    const {AddCoffe, RemoveCoffe, addCarsCoffe, dataCoffeeCar} = useContext(CartContext)
    
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
                        {dataCoffeeCar.map((item: any) =>{
                            return(
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <MethodOfPreparationCoffe>
                                        {item.modo.map((modo: any) =>{
                                            return(
                                                <p key={modo.id}>{modo.type}</p>
                                            )
                                        })}
                                    </MethodOfPreparationCoffe>
                                    <TypeCoffe>
                                        <strong>{item.type}</strong>
                                        <p>{item.description}</p>
                                    </TypeCoffe>
                                    <MoneyCoffe>
                                        <p>R$ <span>{item.money.toLocaleString('pt-br',{minimumFractionDigits: 2})}</span></p>
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
                                            <button onClick={() =>{
                                                item.amount = 0
                                                addCarsCoffe()
                                            }}>
                                                <ShoppingCart weight="fill" size={20}/>
                                            </button>
                                        </div>
                                    </MoneyCoffe>
                                </li>  
                            )
                        })}                     
                    </ul>
                </Ourcafe>
        </ContainerHome>
    )
}