/* todas as rotas da aplicação. */

import { BrowserRouter, Route, Routes as  Switch, Navigate } from "react-router-dom";
import { Cadastro, Login } from "../pages";

export const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/entrar" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />

                <Route path="*" element={<Navigate to="/cadastro"/> } />

            </Switch>
        </BrowserRouter>
    );
}