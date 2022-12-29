import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react"
import ImgCopoCafe from "../../assets/ImgCopoCafe.png"
import ImgCoffe from "../../assets/Coffee.png"
import { ContainerHome, DetailedInformation, DetailedInformationLi, HomeInfo, ImgPrincipalHome, MethodOfPreparationCoffe, MoneyCoffe, Ourcafe, TypeCoffe } from "./style"
import { Link } from "react-router-dom"
import { useState } from "react"

import {Data} from "../../data/index"

interface propsCoffe{
    id: number,
    modo: any,
    type: string,
    description: string,
    money: number,
    amount: number,
    img: string,
}

export function Home(){
    const [coffe, steCoffe] = useState<propsCoffe[]>([])

    function AddCoffe(id: number, coffeItem: propsCoffe){
        const copyCoffee = [...coffe];

        const item = Data.find((coffe) => coffe.id === id);

        const item2 = copyCoffee.find((teste) => teste.id === id)
        if(item){
            item.amount++
        }

        if(!item2){
            copyCoffee.push({
                id: coffeItem.id,
                amount: coffeItem.amount,
                description: coffeItem.description,
                img: coffeItem.img,
                modo: coffeItem.modo,
                money: coffeItem.money,
                type: coffeItem.type
               })
               
        }else{
            item2.amount++
        }
        steCoffe(copyCoffee)
        
    }

    function RemoveCoffe(id: number, coffeItem: propsCoffe){
        const copyCoffee = [...coffe];

        const item = Data.find((coffe) => coffe.id === id);

        const item2 = copyCoffee.find((teste) => teste.id === id)
        if(item){
            item.amount--
        }

        if(!item2){
            copyCoffee.push({
                id: coffeItem.id,
                amount: coffeItem.amount,
                description: coffeItem.description,
                img: coffeItem.img,
                modo: coffeItem.modo,
                money: coffeItem.money,
                type: coffeItem.type
               })
               
        }else{
            item2.amount--
        }
        steCoffe(copyCoffee)
        
    }

    console.log(coffe)

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
                        {Data.map((item) =>{
                            return(
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <MethodOfPreparationCoffe>
                                        {item.modo.map((modo) =>{
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
                                        <p>R$ <span>{item.money}</span></p>
                                        <div>
                                            <div>
                                                <button onClick={(event) =>{
                                                    event.preventDefault()
                                                    RemoveCoffe(item.id, item)
                                                }}>
                                                    <Minus weight="bold" size={14}/>
                                                </button>
                                                <p>{item.amount}</p>
                                                <button onClick={(event) =>{
                                                    event.preventDefault()
                                                    AddCoffe(item.id, item)
                                                }}>
                                                    <Plus weight="bold" size={14}/>
                                                </button>
                                            </div>
                                            <Link to="/">
                                                <ShoppingCart weight="fill" size={22}/>
                                            </Link>
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