import '@/assets/App.css'
import { useSelector } from 'react-redux';
import CartArticle from './CartArticle';
import { Navigate } from "react-router-dom";

function Cart(props) {
    const cartArticles = useSelector((state) => state.cart.cartArticles);
    const numArticles = ((cartArticles != null) ? cartArticles.length : 0);

    const createOrder = () => {

    }


    if (numArticles == 0) {
      return(
        <Navigate to="/" />
      )
    } else {
    return (
      <>
      <h1>Корзина</h1>
      {
        cartArticles.map(
          (article) => (
            <CartArticle 
                key={article.id} 
                article={article} 
            />
          )
        )
      }
      { cartArticles != null && cartArticles.length > 0 && <button onClick={createOrder}>Сделать заказ</button> }
      </>
    )
  }
}

export default Cart;