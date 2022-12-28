import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg"
import { ShoppingCart, MapPin } from "phosphor-react";
import { ContainerHeader } from "./style";

export function Header(){
    return(
        <ContainerHeader>
            <img src={Logo} alt="Logo do site" />

            <nav>
                <button>
                    <MapPin weight="fill" size={22}/>
                    Porto Alegre, RS
                </button>
                <NavLink to="/">
                    <ShoppingCart weight="fill" size={22}/>
                </NavLink>
            </nav>
        </ContainerHeader>
    )
}