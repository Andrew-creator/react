import '@/assets/App.css'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function CartWidget() {
    const cartArticles = useSelector((state) => state.cart.totalItems);
    const numArticles = ((cartArticles != null) ? cartArticles : 0);
    const sumArticles = useSelector((state) => state.cart.totalPrice);


    if (numArticles>0) {
    return (
        <>
        <Link style={{ position: "absolute", top: "20px", right: "20px" }} to="/cart"><button>Корзина<br/>Товаров: {numArticles}<br/>Сумма: {sumArticles}</button></Link>
        </>
    )
    } else {
        return (
            <>
            </>
        )    
    }
}

export default CartWidget;