import expresoTradicional from "../assets/Coffee.png"
import expresoAmericano from "../assets/CoffeeExpressoAmericano.png"
import expresoCremoso from "../assets/CoffeExpressoCremoso.png"
import expresoGelado from "../assets/CoffeExpressoGelado.png"
import coffeLeite from "../assets/CoffeLeite.png"
import coffeLatte from "../assets/Latte.png"
import coffeCapuccino from "../assets/Capuccino.png"
import coffeMacchiato from "../assets/Macchiato.png"
import coffeMocaccino from "../assets/Mocaccino.png"
import coffeChocolateQuente from "../assets/ChocolateQuente.png"
import coffeCubano from "../assets/Cubano.png"
import coffeHavaiano from "../assets/Havaiano.png"
import coffeArabe from "../assets/Arabe.png"
import coffeIrlandes from "../assets/Irlandes.png"


export const Data = [
    {
        id: 1,
        modo: [
            {
                id: 1,
                type: "tradicional"
            }
        ],
        type: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        money: 9.90,
        amount: 0,
        img: expresoTradicional
    },
    {
        id: 2,
        modo: [
            {
                id: 1,
                type: "tradicional"
            }
        ],
        type: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        money: 9.90,
        amount: 0,
        img: expresoAmericano
    },
    {
        id: 3,
        modo: [
            {
                id: 1,
                type: "tradicional"
            }
        ],
        type: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        money: 9.90,
        amount: 0,
        img: expresoCremoso
    },
    {
        id: 4,
        modo: [
            {
                id: 1,
                type: "tradicional"
            },
            {
                id: 2,
                type: "gelado"
            }
        ],
        type: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        money: 9.90,
        amount: 0,
        img: expresoGelado
    },
    {
        id: 5,
        modo: [
            {
                id: 1,
                type: "tradicional"
            },
            {
                id: 2,
                type: "com leite"
            }
        ],
        type: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        money: 9.90,
        amount: 0,
        img: coffeLeite
    },
    {
        id: 6,
        modo: [
            {
                id: 1,
                type: "tradicional"
            },
            {
                id: 2,
                type: "com leite"
            }
        ],
        type: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        money: 9.90,
        amount: 0,
        img: coffeLatte
    },
    {
        id: 7,
        modo: [
            {
                id: 1,
                type: "tradicional"
            },
            {
                id: 2,
                type: "com leite"
            }
        ],
        type: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        money: 9.90,
        amount: 0,
        img: coffeCapuccino
    },
    {
        id: 8,
        modo: [
            {
                id: 1,
                type: "tradicional"
            },
            {
                id: 2,
                type: "com leite"
            }
        ],
        type: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        money: 9.90,
        amount: 0,
        img: coffeMacchiato
    },
    {
        id: 9,
        modo: [
            {
                id: 1,
                type: "tradicional"
            },
            {
                id: 2,
                type: "com leite"
            }
        ],
        type: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        money: 9.90,
        amount: 0,
        img: coffeMocaccino
    },
    {
        id: 10,
        modo: [
            {
                id: 1,
                type: "especial"
            },
            {
                id: 2,
                type: "com leite"
            }
        ],
        type: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        money: 9.90,
        amount: 0,
        img: coffeChocolateQuente
    },
    {
        id: 11,
        modo: [
            {
                id: 1,
                type: "especial"
            },
            {
                id: 2,
                type: "alcoólico"
            },
            {
                id: 3,
                type: "gelado"
            }
        ],
        type: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        money: 9.90,
        amount: 0,
        img: coffeCubano
    },
    {
        id: 12,
        modo: [
            {
                id: 1,
                type: "especial"
            }
        ],
        type: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        money: 9.90,
        amount: 0,
        img: coffeHavaiano
    },
    {
        id: 13,
        modo: [
            {
                id: 1,
                type: "especial"
            }
        ],
        type: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        money: 9.90,
        amount: 0,
        img: coffeArabe
    },
    {
        id: 14,
        modo: [
            {
                id: 1,
                type: "especial"
            },
            {
                id: 2,
                type: "alcoólico"
            }
        ],
        type: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantill",
        money: 9.90,
        amount: 0,
        img: coffeArabe
    }


]