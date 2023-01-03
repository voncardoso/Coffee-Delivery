import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg"
import { ShoppingCart, MapPin } from "phosphor-react";
import { ContainerHeader, IconCarItems } from "./style";
import { useContext } from "react";
import { CartContext } from "../../contexts";

export function Header(){
    const {somerCar} = useContext(CartContext)
    return(
        <ContainerHeader>
            <img src={Logo} alt="Logo do site" />

            <nav>
                <button>
                    <MapPin weight="fill" size={22}/>
                    Porto Alegre, RS
                </button>

                {somerCar === 0 ?                 
                    <NavLink to="/confirmarpedido">
                        <ShoppingCart weight="fill" size={22}/>
                    </NavLink>
                :
                    <IconCarItems>
                        <NavLink to="/confirmarpedido">
                            <ShoppingCart weight="fill" size={22}/>
                        </NavLink>
                        <span>{somerCar}</span>
                    </IconCarItems>
                }
            </nav>
        </ContainerHeader>
    )
}