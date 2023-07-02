import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')

    }
    return(
        <div>
            <h2>Авторизация</h2>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Логин"/>
                <MyInput type="text" placeholder="Пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login