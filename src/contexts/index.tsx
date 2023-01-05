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

interface IFormInput {
    cep: String;
    rua: string;
    complemento: string;
    bairro: string
    cidade: string
    uf: string;
    numero: number;
}

interface CarContextTypes{
    carCoffe: propsCoffe[],
    AddCoffe: (id: number,  coffeItem: propsCoffe) => void,
    RemoveCoffe: (id: number,  coffeItem: propsCoffe) => void,
    addCarsCoffe: () => void,
    dataCoffeeCar: propsCoffe[],
    somerCar: number,
    handleRemoverItem: (id: number) => void,
    dataPayment:  any,
    addPayment: (data: IFormInput) => void
    clearCarCoffe: () => void
}



export const CartContext = createContext({} as CarContextTypes)

export function CartContextProvaider({children}: CartContextProvaiderProps){
    const [dataCoffeeCar, setDataCoffeCar] = useState<propsCoffe[]>([])
    const [somerCar, setSomerCar] = useState(0);
    const [dataPayment, setDataPayment] = useState<{}>({})
    const [carCoffe, setCarsCoffe] = useState<propsCoffe[]>(() =>{
        const storedCart = localStorage.getItem("@ingniteCoffeCars:state-1.0.0")
        if(storedCart){
            return JSON.parse(storedCart)
        }
        return []
    })

    useEffect(() =>{
        setDataCoffeCar(Data)
    }, [])


    useEffect(() =>{
        const SomerItemsCar = carCoffe.reduce((prevItem: any, item:propsCoffe) => prevItem + Number(item.amount), 0)
        setSomerCar(SomerItemsCar)
    }, [])


    function AddCoffe(id: number, coffeItem: propsCoffe){
        const copyCoffee = [...carCoffe];

        const item = dataCoffeeCar.find((coffe) => coffe.id === id);

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

        const item = dataCoffeeCar.find((coffe) => coffe.id === id);

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

    function addCarsCoffe(){
        const SomerItemsCar = carCoffe.reduce((prevItem: any, item:propsCoffe) => prevItem + Number(item.amount), 0)

        setSomerCar(SomerItemsCar)

        localStorage.setItem("@ingniteCoffeCars:state-1.0.0", JSON.stringify(carCoffe))
    }

    function handleRemoverItem(id: number){
        const array = [...carCoffe]

        const index = array.filter((item) => item.id !== id)
        const SomerItemsCar = index.reduce((prevItem: any, item:propsCoffe) => prevItem + Number(item.amount), 0)

        setCarsCoffe(index)
        setSomerCar(SomerItemsCar)
        window.localStorage.setItem("@ingniteCoffeCars:state-1.0.0",  JSON.stringify(index))
    }

    function addPayment(data: IFormInput){
        setDataPayment(data)
    }

    function clearCarCoffe(){
        setCarsCoffe([])
        setSomerCar(0)
    }
    console.log("pagamento", dataPayment)
    return(
        <CartContext.Provider 
            value={{
                AddCoffe, 
                RemoveCoffe, 
                carCoffe,   
                addCarsCoffe,
                dataCoffeeCar,
                somerCar,
                handleRemoverItem,
                dataPayment,
                addPayment,
                clearCarCoffe
            }}>
            {children}
        </CartContext.Provider>
    )
}