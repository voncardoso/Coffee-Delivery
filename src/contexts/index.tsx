import { createContext, ReactNode, useEffect, useState } from "react";
import {Data} from "../data/index";


interface CartContextProvaiderProps{
    children: ReactNode
}

interface propsCoffe{
    id: number,
    modo: any,
    type: string,
    description: string,
    money: number,
    amount: number,
    img: string,
    
}

interface CarContextTypes{
    carCoffe: propsCoffe[],
    AddCoffe: (id: number,  coffeItem: propsCoffe) => void
    RemoveCoffe: (id: number,  coffeItem: propsCoffe) => void
    SomerItemsCar: number
}

export const CartContext = createContext({} as CarContextTypes)

export function CartContextProvaider({children}: CartContextProvaiderProps){
    const [carCoffe, setCarsCoffe] = useState<propsCoffe[]>(() =>{
        const storedCart = localStorage.getItem("teste")
        if(storedCart){
            return JSON.parse(storedCart)
        }
        return []
    })

    useEffect(() =>{
        localStorage.setItem("teste", JSON.stringify(carCoffe))
    }, [carCoffe])

    const SomerItemsCar = carCoffe.reduce((prevItem: any, item:propsCoffe) => prevItem + Number(item.amount), 0)


    function AddCoffe(id: number, coffeItem: propsCoffe){
        const copyCoffee = [...carCoffe];

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
        setCarsCoffe(copyCoffee)
    }

    function RemoveCoffe(id: number, coffeItem: propsCoffe){
        const copyCoffee = [...carCoffe];

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
        setCarsCoffe(copyCoffee)
        
    }



    return(
        <CartContext.Provider value={{AddCoffe, RemoveCoffe, carCoffe, SomerItemsCar}}>
            {children}
        </CartContext.Provider>
    )
}