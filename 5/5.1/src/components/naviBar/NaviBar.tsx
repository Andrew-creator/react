import '@/assets/App.css'
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai'
import { authAtom } from '@/stores/JotaiStore'

function NaviBar() {
    const navigate = useNavigate()
    const [auth, setAuth] = useAtom(authAtom)

    const goToShop = () => {
        navigate("/")
    }

    const goToCart = () => {
        navigate("/cart")
    }

    if (!auth) {
        return (
            <>
            <div style={{ display: "flex", flexDirection: "row" }}>
            <button onClick={goToShop}>Магазин</button>
            <button onClick={goToCart}>Корзина</button>
            <button onClick={() => setAuth((value) => true)}>Авторизация</button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div style={{ display: "flex", flexDirection: "row" }}>
            <button onClick={goToShop}>Магазин</button>
            <button onClick={goToCart}>Корзина</button>
            <button onClick={() => setAuth((value) => false)}>Выход</button>
            </div>
            </>
        )
    }
}

export default NaviBar;