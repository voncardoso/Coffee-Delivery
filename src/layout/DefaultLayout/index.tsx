import { Outlet } from 'react-router-dom'
import { Header } from "../../components/Header";
import { ContainerDefalut } from './style';

export function  DefaultLayout(){
    return(
        <ContainerDefalut>
            <div>
                <Header />
            </div>
            <Outlet />
        </ContainerDefalut>
    )
}